# frozen_string_literal: true

class RidesController < ApplicationController
  def index
    @rides = Ride.open_rides
  end

  def show; end

  def create; end
end
