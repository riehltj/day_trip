# frozen_string_literal: true

# Emails related to reservation status updates and passenger requests
class ReservationMailer < ApplicationMailer
  def reservation_accepted(reservation)
    @reservation = reservation
    @user = reservation.user

    mail(
      to: @user.email,
      subject: 'Your reservation has been accepted'
    )
  end

  def reservation_rejected(reservation)
    @reservation = reservation
    @user = reservation.user

    mail(
      to: @user.email,
      subject: 'Your reservation has been rejected'
    )
  end

  def reservation_completed(reservation)
    @reservation = reservation
    @ride = reservation.ride
    @user = reservation.user
    @driver = reservation.ride.driver.user

    mail(
      to: @user.email,
      subject: 'Your reservation has been completed'
    )
  end

  def reservation_passenger_request(reservation)
    @reservation = reservation
    @ride = reservation.ride
    @user = reservation.user
    @driver = reservation.ride.driver.user

    mail(
      to: @driver.email,
      subject: 'New passenger request for your ride'
    )
  end
end
