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

  scope :open_rides, -> { where(status: %w[open pending]).order(leave_date: :asc) }

  def meetup_location
    "#{address_line1} #{address_line2}<br>#{city}, #{state} #{zip_code}".html_safe # rubocop:disable Rails/OutputSafety
  end
end
