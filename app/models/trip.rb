# frozen_string_literal: true

class Trip < ApplicationRecord
  belongs_to :user
  belongs_to :ride

  validates :number_of_seats, presence: true
  validates :total_cost_in_cents, presence: true

  monetize :total_cost_in_cents, as: :total_cost, allow_nil: true, numericality: { greater_than_or_equal_to: 0 }

  scope :upcoming, -> { joins(:ride).where('rides.leave_date > ?', Time.zone.now).order('rides.leave_date ASC') }
  scope :completed, -> { joins(:ride).where(rides: { leave_date: ...Time.zone.now }).order('rides.leave_date DESC') }
  scope :canceled, -> { joins(:ride).where(rides: { status: :cancelled }) }
end
