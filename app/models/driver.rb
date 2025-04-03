# frozen_string_literal: true

class Driver < ApplicationRecord
  belongs_to :user

  has_one_attached :car_photo
  has_one_attached :license_plate_photo
  has_many :rides, dependent: :destroy

  def full_car_details
    "#{car_make} #{car_model} #{car_year}"
  end

  def rides_completed
    rides.where(status: 'filled').count
  end
end
