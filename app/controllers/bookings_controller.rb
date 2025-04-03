# frozen_string_literal: true

class BookingsController < ApplicationController
  before_action :authenticate_user!, only: %i[index show new create]
  before_action :set_ride, only: %i[show new]

  def index
    @scheduled_bookings = current_user.bookings.upcoming
    @canceled_bookings = current_user.bookings.canceled
    @completed_bookings = current_user.bookings.completed
  end

  def show
    @booking = @ride.bookings.find(params[:id])
  end

  def new
    @booking = @ride.bookings.new
  end

  def create # rubocop:disable Metrics/AbcSize
    @ride = Ride.find(params[:ride_id])
    @booking = @ride.bookings.create!(booking_params.merge(ride_id: @ride.id, user_id: current_user.id,
                                                           payment_status: 'pending'))

    if @booking.save
      @ride.available_seats -= @booking.number_of_seats
      @ride.save
      redirect_to new_payment_path(booking_id: @booking.id), notice: 'Booking was successfully created.'
    else
      render :new
    end
  end

  private

  def set_ride
    @ride = Ride.find(params[:ride_id])
  end

  def booking_params
    Rails.logger.debug { ">>> booking_params: #{params.inspect}" }
    params.require(:booking).permit(:number_of_seats, :total_cost_in_cents, :payment_status)
  end
end
