# frozen_string_literal: true

# Emails related to trip status updates and passenger requests
class TripMailer < ApplicationMailer
  def trip_accepted(trip)
    @trip = trip
    @user = trip.user

    mail(
      to: @user.email,
      subject: 'Your trip has been accepted'
    )
  end

  def trip_rejected(trip)
    @trip = trip
    @user = trip.user

    mail(
      to: @user.email,
      subject: 'Your trip has been rejected'
    )
  end

  def trip_completed(trip)
    @trip = trip
    @ride = trip.ride
    @user = trip.user
    @driver = trip.ride.driver.user

    mail(
      to: @user.email,
      subject: 'Your trip has been completed'
    )
  end

  def trip_passenger_request(trip)
    @trip = trip
    @ride = trip.ride
    @user = trip.user
    @driver = trip.ride.driver.user

    mail(
      to: @user.email,
      subject: 'New passenger request for your trip'
    )
  end
end
