# frozen_string_literal: true

class Trip < ApplicationRecord
  belongs_to :user
  belongs_to :ride

  validates :number_of_seats, presence: true

  monetize :total_cost_in_cents, as: :total_cost, numericality: { greater_than_or_equal_to: 0 }

  enum :status, {
    pending: 0,
    approved: 1,
    rejected: 2
  }, default: 0

  scope :pending, -> { where(status: 'pending') }
  scope :approved, -> { where(status: 'approved') }
  scope :rejected, -> { where(status: 'rejected') }

  scope :for_user, lambda { |user|
    where(user_id: user.is_a?(User) ? user.id : user)
      .joins(:ride)
      .includes(ride: :driver)
      .order('rides.leave_date')
  }
end
