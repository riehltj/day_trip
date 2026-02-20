# frozen_string_literal: true

class Reservation < ApplicationRecord
  belongs_to :user
  belongs_to :ride

  after_create :reduce_ride_seats, :notify_driver_and_passenger
  after_update :notify_status_change
  after_destroy :restore_ride_seats

  validates :number_of_seats, presence: true, numericality: { greater_than_or_equal_to: 0 }

  monetize :total_cost_in_cents, as: :total_cost, numericality: { greater_than_or_equal_to: 0 }

  enum :status, {
    pending: 0,
    accepted: 1,
    rejected: 2,
    completed: 3
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

  def driving
    Reservation.joins(:ride).where(rides: { driver_id: ride.driver.id })
  end

  def reduce_ride_seats
    ride.decrement(:available_seats, number_of_seats)
    ride.save!
  end

  def restore_ride_seats
    ride.increment(:available_seats, number_of_seats)
    ride.save!
  end

  private

  def notify_driver_and_passenger
    ReservationMailer.reservation_passenger_request(self).deliver_later
  end

  def notify_status_change
    return unless saved_change_to_status?

    if status == 'rejected'
      ride.increment(:available_seats, number_of_seats)
      ride.save!
    end

    case status
    when 'accepted'
      ReservationMailer.reservation_accepted(self).deliver_later
    when 'rejected'
      ReservationMailer.reservation_rejected(self).deliver_later
    when 'completed'
      ReservationMailer.reservation_completed(self).deliver_later
    end
  end
end
