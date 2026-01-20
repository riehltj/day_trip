# frozen_string_literal: true

class RidesController < ApplicationController
  before_action :authenticate_user!, only: %i[new create edit update destroy my_rides]
  before_action :set_ride, only: %i[show edit update destroy]
  before_action :authorize_driver!, only: %i[edit update destroy]

  def index
    @rides = Ride.other_open_rides(current_user&.driver&.id)
  end

  def show; end

  def new
    @ride = Ride.new
  end

  def edit; end

  def create
    unless current_user.driver
      flash.now[:alert] = 'You must have a driver profile to create a ride.'
      redirect_to new_driver_path
      return
    end

    @ride = Ride.new(ride_params.merge(driver: current_user.driver))

    if @ride.save
      redirect_to my_rides_path, notice: 'Ride was successfully created.'
    else
      flash.now[:alert] = @ride.errors.full_messages.to_sentence
      render :new, status: :unprocessable_entity
    end
  end

  def update
    raise User::NotAuthorized unless @ride.editable_by?(current_user)

    if @ride.update(ride_params)
      redirect_to my_rides_path, notice: 'Ride was successfully updated.'
    else
      flash.now[:alert] = @ride.errors.full_messages.to_sentence
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    if @ride.trips.any? { |trip| trip.accepted? }
      flash[:alert] = 'Cannot delete a ride with accepted trips.'
      redirect_to my_rides_path
      return
    end

    @ride.destroy
    redirect_to my_rides_path, notice: 'Ride was successfully destroyed.'
  end

  def my_rides
    @rides = Ride.where(driver: current_user.driver).where.not(status: %i[canceled closed])
  end

  private

  def set_ride
    @ride = Ride.find(params[:id])
  end

  def authorize_driver!
    return if @ride&.editable_by?(current_user)

    raise User::NotAuthorized
  end

  def ride_params
    params.require(:ride).permit(:address_line1,
                                 :address_line2,
                                 :city,
                                 :state,
                                 :zip_code,
                                 :leave_date,
                                 :leave_time,
                                 :destination,
                                 :available_seats,
                                 :cost_per_rider)
  end
end
