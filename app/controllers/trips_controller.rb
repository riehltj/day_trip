# frozen_string_literal: true

class TripsController < ApplicationController
  before_action :authenticate_user!, only: %i[index show]
  before_action :set_ride, only: %i[new create]
  before_action :set_trip, only: %i[show accept reject show]

  def index
    @trips = Trip.for_user(current_user)
  end

  def show; end

  def new
    @trip = @ride.trips.new
  end

  def create # rubocop:disable Metrics/AbcSize
    if params[:user].present?
      create_account_and_sign_in
      return if @user.nil?
    end

    @ride = Ride.find(params[:ride_id])
    @trip = @ride.trips.create!(trip_params.merge(ride_id: @ride.id,
                                                  user_id: current_user.id,
                                                  payment_status: 'pending'))
    @ride.update!(available_seats: @ride.available_seats -= @trip.number_of_seats)
    redirect_to new_payment_path(trip_id: @trip.id), notice: 'Your trip booking was successfully created.'
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.message
    render :new
  end

  def accept
    return unless @trip.update(status: :accepted)

    # Send notification to passenger
    TripMailer.trip_accepted(@trip).deliver_later if defined?(TripMailer)
    redirect_to my_rides_path, notice: "Trip for #{@trip.user.full_name} was accepted"
  end

  def reject
    if @trip.update(status: :rejected)
      # Send notification to passenger
      TripMailer.trip_rejected(@trip).deliver_later if defined?(TripMailer)
      redirect_to @trip.ride, notice: "Trip for #{@trip.user.full_name} was rejected"
    else
      redirect_to @trip.ride, alert: "Couldn't reject this trip"
    end
  end

  private

  def set_ride
    @ride = Ride.find(params[:ride_id])
  end

  def create_account_and_sign_in
    @user = User.create!(user_params)
    sign_in(@user)
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.essage
    render :new
  end

  def set_trip
    @trip = Trip.find(params[:id] || params[:trip_id])
  end

  def trip_params
    params.require(:trip).permit(:number_of_seats, :total_cost_in_cents, :payment_status)
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
