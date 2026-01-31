# frozen_string_literal: true

class Ride < ApplicationRecord
  belongs_to :driver
  has_many :reservations, dependent: :destroy

  enum :status, {
    filled: 0, # All seats are booked
    open: 1, # Open for new passengers
    canceled: 2, # Driver canceled the ride
    closed: 3 # Ride is completed
  }, default: 1

  monetize :cost_per_rider_in_cents, as: :cost_per_rider

  validates :status, inclusion: { in: statuses.keys }
  validates :address_line1, :city, :state, :zip_code, :leave_date, :leave_time, :destination, :available_seats,
            :cost_per_rider, presence: true
  validates :available_seats, numericality: { only_integer: true, greater_than_or_equal_to: 0 }
  validates :cost_per_rider, numericality: { greater_than_or_equal_to: 0 }
  validate :leave_date_in_future, on: :create
  validate :leave_date_not_in_past, on: :update
  validate :available_seats_not_below_booked, on: :update

  after_update :update_status_based_on_seats

  scope :other_open_rides, lambda { |current_driver_id = nil|
    # The query to find other open rides
    # that are not associated with the current user
    # and have a leave date in the future
    where(status: :open)
      .where('leave_date > ?', DateTime.now)
      .where('available_seats > 0')
      .where.not(driver_id: current_driver_id)
      .order('leave_date ASC')
  }

  def meetup_location
    "#{address_line1} #{address_line2}<br>#{city}, #{state} #{zip_code}".html_safe # rubocop:disable Rails/OutputSafety
  end

  def can_edit?
    passengers.empty? && open?
  end

  def editable_by?(user)
    driver.user == user
  end

  def passengers
    reservations&.map(&:user)
  end

  def leave_date_time
    date = leave_date.strftime('%b %d, %Y')
    time = leave_time.strftime('%l:%M %p')
    "#{date} @ #{time}"
  end

  def booked_seats
    trips.where(status: %i[pending accepted]).sum(:number_of_seats)
  end

  private

  def leave_date_in_future
    return unless leave_date

    return unless leave_date <= Time.zone.today

    errors.add(:leave_date, 'must be in the future')
  end

  def leave_date_not_in_past
    return unless leave_date && leave_date_changed?

    return unless leave_date < Time.zone.today

    errors.add(:leave_date, 'cannot be changed to a past date')
  end

  def available_seats_not_below_booked
    return unless available_seats && available_seats_changed?

    return unless available_seats < booked_seats

    errors.add(:available_seats, "cannot be less than booked seats (#{booked_seats})")
  end

  def update_status_based_on_seats
    return unless available_seats_changed? && !status_changed?

    if available_seats.zero? && open?
      update!(:status, :filled)
    elsif available_seats.positive? && filled?
      update!(:status, :open)
    end
  end
end
