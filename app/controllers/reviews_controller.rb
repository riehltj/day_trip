# frozen_string_literal: true

class ReviewsController < ApplicationController
  def all_from_user
    @user = User.find(params[:user_id])
    @reviews = @user.reviews
  end

  def new
    @ride = Ride.find(params[:ride_id])
    @driver = Driver.find(params[:driver_id])
    @review = Review.new
  end

  def create
    @review = Review.create!(review_params)
    redirect_to trips_path, notice: "Successfully reviewed driver #{@review.driver.user.full_name}"
  rescue ActiveRecord::RecordInvalid
    # Log out Error
  end

  private

  def review_params
    params.require(:review).permit(:rating, :comment, :ride_id, :user_id, :driver_id)
  end
end
