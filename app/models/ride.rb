# frozen_string_literal: true

class Ride < ApplicationRecord
  belongs_to :driver
  has_many :bookings, dependent: :destroy

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

  scope :open_rides, lambda {
    where(status: %w[open pending]).where('leave_date > ?', Time.zone.today).order(leave_date: :asc)
  }

  def meetup_location
    "#{address_line1} #{address_line2}<br>#{city}, #{state} #{zip_code}".html_safe # rubocop:disable Rails/OutputSafety
  end

  def can_edit?
    open? || pending?
  end

  def leave_date_time
    date = leave_date.strftime('%b %d, %Y')
    time = leave_time.strftime('%l:%M %p')
    "#{date} @ #{time}"
  end
end
