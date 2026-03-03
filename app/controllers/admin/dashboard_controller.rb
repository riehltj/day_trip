# frozen_string_literal: true

module Admin
  class DashboardController < Admin::BaseController
    def index
      @users = User.order(created_at: :desc)
      @drivers = Driver.includes(:user).order(created_at: :desc)
      @rides = Ride.includes(driver: :user).order(created_at: :desc)
      @reservations = Reservation.includes(:user, :ride).order(created_at: :desc)
      @reviews = Review.includes(:user, :driver, :ride).order(created_at: :desc)
    end
  end
end
