# frozen_string_literal: true

class TripsController < ApplicationController
  before_action :authenticate_user!, except: %i[new create]
  before_action :set_ride, only: %i[new create]
  before_action :set_trip, only: %i[show accept reject complete]
  before_action :set_ride_from_trip, only: %i[accept reject complete]
  before_action :authorize_driver!, only: %i[accept reject complete]

  def index
    @trips = Trip.for_user(current_user)
  end

  def show; end

  def new
    @trip = @ride.trips.new
  end

  def create # rubocop:disable Metrics/AbcSize
    if params[:user].present? && !user_signed_in?
      create_account_and_sign_in
      return if @user.nil?
    end

    authenticate_user! unless user_signed_in?

    # Validate ride is open and has enough seats
    unless @ride.open?
      flash.now[:alert] = 'This ride is no longer available for booking.'
      render :new, status: :unprocessable_entity
      return
    end

    # Validate user isn't booking their own ride
    if @ride.driver.user == current_user
      flash.now[:alert] = 'You cannot book your own ride.'
      render :new, status: :unprocessable_entity
      return
    end

    # Validate enough seats available
    seats_requested = trip_params[:number_of_seats].to_i
    if seats_requested > @ride.available_seats
      flash.now[:alert] = "Not enough seats available. Only #{@ride.available_seats} seat(s) remaining."
      render :new, status: :unprocessable_entity
      return
    end

    ActiveRecord::Base.transaction do
      @trip = @ride.trips.create!(trip_params.merge(ride_id: @ride.id,
                                                    user_id: current_user.id,
                                                    payment_status: 'pending'))
      @ride.lock!
      if @ride.available_seats < seats_requested
        raise ActiveRecord::RecordInvalid.new(@trip)
      end
      new_available_seats = @ride.available_seats - seats_requested
      @ride.update!(available_seats: new_available_seats)
      # Update status to filled if no seats left
      @ride.update_column(:status, :filled) if new_available_seats.zero? && @ride.open?
    end

    TripMailer.trip_passenger_request(@trip).deliver_later if defined?(TripMailer)
    redirect_to new_payment_path(trip_id: @trip.id), notice: 'Your trip booking was successfully created.'
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.message
    render :new, status: :unprocessable_entity
  end

  def accept
    return unless @trip.update(status: :accepted)

    mail_trip_users(@ride, :trip_accepted)
    redirect_to my_rides_path, notice: "Trip for #{@trip.user.full_name} was accepted!"
  rescue StandardError => e
    Rails.logger.error { "Error accepting trip: #{e.message}" }
    flash[:alert] = "Couldn't accept this trip"
    redirect_to my_rides_path
  end

  def reject
    ActiveRecord::Base.transaction do
      if @trip.update(status: :rejected)
        # Return seats to available_seats
        @ride.lock!
        new_available_seats = @ride.available_seats + @trip.number_of_seats
        @ride.update!(available_seats: new_available_seats)
        # Update status back to open if seats were returned
        @ride.update_column(:status, :open) if @ride.filled? && new_available_seats.positive?
        
        if @trip.payment_status == 'paid'
          # TODO: Refund the trip cost (processing fee is gone?)
        end
        mail_trip_users(@ride, :trip_rejected)
        redirect_to my_rides_path, notice: "Trip for #{@trip.user.full_name} was rejected."
      else
        flash[:alert] = "Couldn't reject this trip"
        redirect_to my_rides_path
      end
    end
  rescue StandardError => e
    Rails.logger.error { "Error rejecting trip: #{e.message}" }
    flash[:alert] = "Couldn't reject this trip"
    redirect_to my_rides_path
  end

  def complete
    ActiveRecord::Base.transaction do
      # Only close accepted trips
      @ride.trips.where(status: :accepted).each { |trip| trip.update!(status: 'closed') }
      @ride.update!(status: 'closed')
    end
    mail_trip_users(@ride, :trip_completed)
    redirect_to my_rides_path, notice: 'Ride was completed!'
  rescue ActiveRecord::RecordInvalid => e
    Rails.logger.error { "Error completing trip: #{e.message}" }
    flash[:alert] = e.message
    redirect_to my_rides_path
  end

  private

  def set_ride
    @ride = Ride.find(params[:ride_id])
  end

  def create_account_and_sign_in
    @user = User.create!(user_params)
    sign_in(@user)
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.message
    render :new
  end

  def mail_trip_users(ride, method)
    ride.trips.each do |trip|
      TripMailer.send(method, trip).deliver_later if defined?(TripMailer)
    end
  end

  def set_trip
    @trip = Trip.find(params[:id] || params[:trip_id])
  end

  def set_ride_from_trip
    @ride = @trip.ride
  end

  def authorize_driver!
    return if @ride&.driver&.user == current_user

    raise User::NotAuthorized
  end

  def trip_params
    params.require(:trip).permit(:number_of_seats, :total_cost_in_cents, :payment_status)
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
