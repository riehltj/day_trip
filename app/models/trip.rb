# frozen_string_literal: true

class Trip < ApplicationRecord
  belongs_to :user
  belongs_to :ride

  validates :number_of_seats, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validate :enough_seats_available, on: :create
  validate :not_booking_own_ride, on: :create
  validate :ride_is_open, on: :create
  validate :total_cost_matches_seats, on: :create

  monetize :total_cost_in_cents, as: :total_cost, numericality: { greater_than_or_equal_to: 0 }

  enum :status, {
    pending: 0,
    accepted: 1,
    rejected: 2,
    closed: 3
  }, default: 0

  scope :pending, -> { where(status: 'pending') }
  scope :accepted, -> { where(status: 'accepted') }
  scope :rejected, -> { where(status: 'rejected') }

  scope :for_user, lambda { |user|
    where(user_id: user.id)
      .joins(:ride)
      .includes(ride: :driver)
      .order('rides.leave_date')
  }

  private

  def enough_seats_available
    return unless ride && number_of_seats

    if number_of_seats > ride.available_seats
      errors.add(:number_of_seats, "exceeds available seats (#{ride.available_seats})")
    end
  end

  def not_booking_own_ride
    return unless ride && user

    if ride.driver.user == user
      errors.add(:base, 'You cannot book your own ride')
    end
  end

  def ride_is_open
    return unless ride

    unless ride.open?
      errors.add(:base, 'This ride is no longer available for booking')
    end
  end

  def total_cost_matches_seats
    return unless ride && number_of_seats && total_cost_in_cents

    expected_cost = number_of_seats * ride.cost_per_rider_in_cents
    if total_cost_in_cents != expected_cost
      errors.add(:total_cost_in_cents, "does not match expected cost (#{expected_cost} cents)")
    end
  end
end
