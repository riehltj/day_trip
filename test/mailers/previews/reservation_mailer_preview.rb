# frozen_string_literal: true

# Preview all emails at http://localhost:3009/rails/mailers/reservation_mailer
class ReservationMailerPreview < ActionMailer::Preview
  def reservation_accepted
    reservation = Reservation.last || Reservation.first || create_new_reservation
    ReservationMailer.reservation_accepted(reservation)
  end

  def reservation_completed
    reservation = Reservation.last || Reservation.first || create_new_reservation
    ReservationMailer.reservation_completed(reservation)
  end

  def reservation_rejected
    reservation = Reservation.last || Reservation.first || create_new_reservation
    ReservationMailer.reservation_rejected(reservation)
  end

  def reservation_passenger_request
    reservation = Reservation.last || Reservation.first || create_new_reservation
    ReservationMailer.reservation_passenger_request(reservation)
  end

  private

  def create_new_reservation
    FactoryBot.create(:reservation)
  end
end
