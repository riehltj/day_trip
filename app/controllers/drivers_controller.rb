# frozen_string_literal: true

class DriversController < ApplicationController
  before_action :authenticate_user!, only: %i[new create]
  before_action :set_driver, only: %i[show edit update destroy]

  def show; end

  def new
    @driver = Driver.new
  end

  def edit; end

  def create
    @driver = Driver.create!(driver_params.merge(user: current_user))
    redirect_to driver_path(@driver), notice: 'Driver profile created successfully'
  end

  def update
    @driver.update!(driver_params)
    redirect_to driver_path(@driver), notice: 'Driver profile updated successfully'
  rescue ActiveRecord::RecordInvalid => e
    flash.now[:alert] = e.message
  end

  def destroy
    @driver.destroy
    redirect_to root_path, notice: 'Driver profile deleted successfully'
  rescue ActiveRecord::RecordNotDestroyed => e
    flash.now[:alert] = e.message
  end

  private

  def set_driver
    @driver = Driver.find(params[:id])
  end

  def driver_params
    params.require(:driver).permit(:car_make, :car_model, :car_year, :car_photo, :license_plate_photo, :description,
                                   :twitter, :facebook, :instagram)
  end
end
