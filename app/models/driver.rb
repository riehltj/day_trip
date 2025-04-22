# frozen_string_literal: true

class Driver < ApplicationRecord
  belongs_to :user

  # when deleted, remove stripe account
  after_destroy :delete_stripe_account
  has_one_attached :car_photo
  has_one_attached :license_plate_photo
  has_many :rides, dependent: :destroy

  validates :car_make, presence: true
  validates :car_model, presence: true
  validates :car_year, presence: true, numericality: { only_integer: true }
  validates :car_photo, presence: true

  def delete_stripe_account
    return if stripe_account_id.blank?

    user.update!(nil)
  end

  def full_car_details
    "#{car_make} #{car_model} #{car_year}"
  end

  def rides_completed
    rides.where(status: 'filled').count
  end
end
