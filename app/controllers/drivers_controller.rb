# frozen_string_literal: true

class DriversController < ApplicationController
  before_action :authenticate_user!, only: %i[new create]

  def show
    @driver = Driver.find(params[:id])
  end

  def new
    @driver = Driver.new
  end

  def create
    Driver.create!(driver_params.merge(user: current_user))
    redirect_to root_path, notice: 'Driver profile created successfully'
  end

  private

  def driver_params
    params.require(:driver).permit(:car_make, :car_model, :car_year, :car_photo, :license_plate_photo)
  end
end
