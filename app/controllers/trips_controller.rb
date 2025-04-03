# frozen_string_literal: true

class TripsController < ApplicationController
  before_action :authenticate_user!, only: %i[index show create]
  before_action :set_ride, only: %i[show new]

  def index
    @scheduled_trips = current_user.trips.upcoming
    @canceled_trips = current_user.trips.canceled
    @completed_trips = current_user.trips.completed
  end

  def show
    @trip = @ride.trips.find(params[:id])
  end

  def new
    @trip = @ride.trips.new
  end

  def create # rubocop:disable Metrics/AbcSize
    @ride = Ride.find(params[:ride_id])
    @trip = @ride.trips.create!(trip_params.merge(ride_id: @ride.id, user_id: current_user.id,
                                                  payment_status: 'pending'))

    if @trip.save
      @ride.available_seats -= @trip.number_of_seats
      @ride.save
      redirect_to new_payment_path(trip_id: @trip.id), notice: 'Your trip booking was successfully created.'
    else
      render :new
    end
  end

  private

  def set_ride
    @ride = Ride.find(params[:ride_id])
  end

  def trip_params
    Rails.logger.debug { ">>> trip_params: #{params.inspect}" }
    params.require(:trip).permit(:number_of_seats, :total_cost_in_cents, :payment_status)
  end
end
