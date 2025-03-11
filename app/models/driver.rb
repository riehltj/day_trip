# frozen_string_literal: true

class Driver < ApplicationRecord
  belongs_to :user
  has_one_attached :car_photo

  def full_car_details
    "#{car_make} #{car_model} #{car_year}"
  end
end
