# frozen_string_literal: true

class RidesController < ApplicationController
  before_action :set_ride, only: %i[show edit update destroy]

  def index
    @rides = Ride.other_open_rides(current_user&.driver&.id)
  end

  def show; end

  def new
    @ride = Ride.new
  end

  def edit; end

  def create
    @ride = Ride.new(ride_params.merge(driver: current_user.driver))

    if @ride.save
      redirect_to my_rides_rides_path, notice: 'Ride was successfully created.'
    else
      flash.now[:alert] = @ride.errors.full_messages.to_sentence
      render :new
    end
  end

  def update
    if @ride.update(ride_params)
      redirect_to my_rides_rides_path, notice: 'Ride was successfully updated.'
    else
      flash.now[:alert] = @ride.errors.full_messages.to_sentence
      render :edit
    end
  end

  def destroy
    @ride.destroy
    redirect_to rides_url, notice: 'Ride was successfully destroyed.'
  end

  def my_rides
    @rides = Ride.where(driver: current_user.driver)
  end

  private

  def set_ride
    @ride = Ride.find(params[:id])
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
                                 :cost_per_rider,
                                 :driver_id)
  end
end
