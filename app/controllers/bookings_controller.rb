# frozen_string_literal: true

class BookingsController < ApplicationController
  before_action :authenticate_user!

  def index
    @canceled_bookings = current_user.bookings.canceled
    @scheduled_bookings = current_user.bookings.upcoming
    @completed_bookings = current_user.bookings.completed
  end

  def show
    @ride = Ride.find(params[:ride_id])
    @booking = @ride.bookings.find(params[:id])
  end

  def new
    @ride = Ride.find(params[:ride_id])
    @booking = @ride.bookings.build
  end

  def create
    @ride = Ride.find(params[:ride_id])
    @booking = @ride.bookings.build(booking_params)
    @booking.user = current_user

    if @booking.save
      redirect_to @ride, notice: 'Booking was successfully created.'
    else
      render :new
    end
  end

  private

  def booking_params
    params.require(:booking).permit(:number_of_seats, :total_cost, :payment_status)
  end
end
