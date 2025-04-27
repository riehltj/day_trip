# frozen_string_literal: true

class TripsController < ApplicationController
  before_action :authenticate_user!, only: %i[index show create]
  before_action :set_ride, only: %i[show new]
  before_action :set_trip, only: %i[approve reject show]

  def index
    @trips = Trip.for_user(current_user)
  end

  def my_trips
    @my_trips = current_user.trips.driving
  end

  def show; end

  def new
    @trip = @ride.trips.new
  end

  def create # rubocop:disable Metrics/AbcSize
    @ride = Ride.find(params[:ride_id])
    @trip = @ride.trips.create!(trip_params.merge(ride_id: @ride.id,
                                                  user_id: current_user.id,
                                                  payment_status: 'pending'))

    if @trip.save
      @ride.available_seats -= @trip.number_of_seats
      @ride.save
      redirect_to new_payment_path(trip_id: @trip.id), notice: 'Your trip booking was successfully created.'
    else
      render :new
    end
  end

  def approve
    return unless @trip.update(status: :approved)

    # Send notification to passenger
    TripMailer.trip_approved(@trip).deliver_later if defined?(TripMailer)
    flash.now[:notice] = "Trip for #{@trip.user.full_name} was approved"
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

  def set_trip
    @trip = Trip.find(params[:id])
  end

  def trip_params
    params.require(:trip).permit(:number_of_seats, :total_cost_in_cents, :payment_status)
  end
end
