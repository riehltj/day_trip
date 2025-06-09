# frozen_string_literal: true

# Preview all emails at http://localhost:3009/rails/mailers/trip_mailer
class TripMailerPreview < ActionMailer::Preview
  def trip_accepted
    trip = Trip.last || Trip.first || create_new_trip
    TripMailer.trip_accepted(trip)
  end

  def trip_rejected
    trip = Trip.last || Trip.first || create_new_trip
    TripMailer.trip_rejected(trip)
  end

  def trip_passenger_request
    trip = Trip.last || Trip.first || create_new_trip
    TripMailer.trip_passenger_request(trip)
  end

  private

  def create_new_trip
    FactoryBot.create(:trip)
  end
end
