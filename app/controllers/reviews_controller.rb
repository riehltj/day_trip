# frozen_string_literal: true

class ReviewsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_ride_and_driver, only: %i[new create]
  before_action :authorize_review!, only: %i[new create]

  def all_from_user
    @user = User.find(params[:user_id])
    @reviews = @user.reviews
  end

  def new
    @review = Review.new
  end

  def create
    @review = Review.create!(review_params)
    redirect_to reservations_path, notice: "Successfully reviewed driver #{@review.driver.user.full_name}"
  rescue ActiveRecord::RecordInvalid
    flash.now[:alert] = 'Error creating review. Please check the form and try again.'
    render :new
  end

  private

  def set_ride_and_driver
    @ride = Ride.find(params[:ride_id])
    @driver = Driver.find(params[:driver_id])
  end

  def authorize_review! # rubocop:disable Metrics/AbcSize
    trip = Trip.find_by(user: current_user, ride: @ride, status: :closed)
    unless trip
      flash[:alert] = 'You can only review rides you have completed.'
      redirect_to trips_path
      return
    end

    if Review.exists?(user: current_user, ride: @ride, driver: @driver)
      flash[:alert] = 'You have already reviewed this ride.'
      redirect_to trips_path
      return
    end

    return if @ride.driver == @driver

    flash[:alert] = 'Invalid driver for this ride.'
    redirect_to trips_path
    nil
  end

  def review_params
    params.require(:review).permit(:rating, :comment)
  end
end
