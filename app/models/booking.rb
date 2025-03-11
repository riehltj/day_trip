# frozen_string_literal: true

class Booking < ApplicationRecord
  belongs_to :user
  belongs_to :ride

  scope :upcoming, -> { joins(:ride).where('rides.leave_date > ?', Time.zone.now).order('rides.leave_date ASC') }
  scope :completed, -> { joins(:ride).where(rides: { leave_date: ...Time.zone.now }).order('rides.leave_date DESC') }
  scope :canceled, -> { joins(:ride).where(rides: { status: :cancelled }) }
end
