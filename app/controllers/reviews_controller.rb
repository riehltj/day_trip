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
    @review = Review.new(review_params.merge(
      user_id: current_user.id,
      ride_id: @ride.id,
      driver_id: @driver.id
    ))

    if @review.save
      redirect_to trips_path, notice: "Successfully reviewed driver #{@review.driver.user.full_name}"
    else
      flash.now[:alert] = @review.errors.full_messages.to_sentence
      render :new, status: :unprocessable_entity
    end
  end

  private

  def set_ride_and_driver
    @ride = Ride.find(params[:ride_id])
    @driver = Driver.find(params[:driver_id])
  end

  def authorize_review!
    # Check user has a completed trip for this ride
    trip = Trip.find_by(user: current_user, ride: @ride, status: :closed)
    unless trip
      flash[:alert] = 'You can only review rides you have completed.'
      redirect_to trips_path
      return
    end

    # Check user hasn't already reviewed this ride
    if Review.exists?(user: current_user, ride: @ride, driver: @driver)
      flash[:alert] = 'You have already reviewed this ride.'
      redirect_to trips_path
      return
    end

    # Check driver matches ride
    unless @ride.driver == @driver
      flash[:alert] = 'Invalid driver for this ride.'
      redirect_to trips_path
      return
    end
  end

  def review_params
    params.require(:review).permit(:rating, :comment)
  end
end
