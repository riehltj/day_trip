# frozen_string_literal: true

class ReservationsController < ApplicationController
  before_action :authenticate_user!, only: %i[index show]
  before_action :set_ride, only: %i[new create]
  before_action :set_reservation, only: %i[show destroy accept reject complete]
  before_action :set_ride_from_reservation, only: %i[accept reject complete]
  before_action :authorize_driver!, only: %i[accept reject complete]

  def index
    @reservations = Reservation.for_user(current_user)
  end

  def show; end

  def new
    @reservation = @ride.reservations.new
  end

  def create # rubocop:disable Metrics/AbcSize
    if params[:user].present? && !user_signed_in?
      create_account_and_sign_in
      return if @user.nil?
    end

    authenticate_user! unless user_signed_in?

    @reservation = Reservation.create!(reservation_params.merge(ride_id: @ride.id, user_id: current_user.id))
    redirect_to reservation_path(@reservation), notice: 'Your reservation booking was successfully created.'
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.message
    render :new
  end

  def accept
    return unless @reservation.update(status: :accepted)

    mail_reservation_users(@ride, :reservation_accepted)
    redirect_to my_rides_path, notice: "reservation for #{@reservation.user.full_name} was accepted!"
  end

  def reject
    @reservation.update!(status: :rejected)
    mail_reservation_users(@ride, :reservation_rejected)
    redirect_to my_rides_path, notice: "reservation for #{@reservation.user.full_name} was rejected."
  rescue ActiveRecord::RecordInvalid => e
    Rails.logger.error { "Error rejecting reservation: #{e.message}" }
    flash.now[:alert] = e.message
    render :show
  end

  def complete
    ActiveRecord::Base.transaction do
      @ride.reservations.each { |reservation| reservation.update!(status: :completed) }
      @ride.update!(status: :closed)
    end

    mail_reservation_users(@ride, :reservation_completed)
    redirect_to my_rides_path, notice: 'Ride was completed!'
  rescue ActiveRecord::RecordInvalid => e
    Rails.logger.error { "Error completing reservation: #{e.message}" }
    flash[:alert] = e.message
    redirect_to my_rides_path
  end

  def destroy
    @reservation.destroy
    redirect_to my_rides_path, notice: 'Reservation was successfully cancelled.'
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

  def mail_reservation_users(ride, method)
    ride.reservations.each do |reservation|
      ReservationMailer.send(method, reservation).deliver_later
    end
  end

  def set_reservation
    @reservation = Reservation.find(params[:id] || params[:reservation_id])
  end

  def set_ride_from_reservation
    @ride = @reservation.ride
  end

  def authorize_driver!
    return if @ride&.driver&.user == current_user

    raise User::NotAuthorized
  end

  def reservation_params
    params.require(:reservation).permit(:number_of_seats, :total_cost_in_cents)
  end

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name)
  end
end
