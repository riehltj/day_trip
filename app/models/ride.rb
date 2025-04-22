# frozen_string_literal: true

class Ride < ApplicationRecord
  belongs_to :driver
  has_many :trips, dependent: :destroy

  enum :status, {
    open: 'open',
    pending: 'pending',
    filled: 'filled',
    canceled: 'canceled'
  }, default: 'open'

  monetize :cost_per_rider_in_cents, as: :cost_per_rider

  validates :status, inclusion: { in: statuses.keys }
  validates :address_line1, :city, :state, :zip_code, :leave_date, :leave_time, :destination, :available_seats,
            :cost_per_rider, presence: true
  validates :available_seats, numericality: { only_integer: true, greater_than_or_equal_to: 1 }
  validates :cost_per_rider, numericality: { greater_than_or_equal_to: 0 }

  scope :other_open_rides, lambda { |current_driver_id = nil|
    # The query to find other open rides
    # that are not associated with the current user
    # and have a leave date in the future
    where(status: :open)
      .where('leave_date > ?', DateTime.now)
      .where.not(driver_id: current_driver_id)
      .order('leave_date ASC')
  }

  def meetup_location
    "#{address_line1} #{address_line2}<br>#{city}, #{state} #{zip_code}".html_safe # rubocop:disable Rails/OutputSafety
  end

  def can_edit?
    open? || pending?
  end

  def passengers
    Trip.where(ride_id: id).map(&:user)
  end

  def trip_payment_status(user)
    Trip.find_by(user_id: user.id, ride_id: id).payment_status
  end

  def leave_date_time
    date = leave_date.strftime('%b %d, %Y')
    time = leave_time.strftime('%l:%M %p')
    "#{date} @ #{time}"
  end
end
