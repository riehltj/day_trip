# frozen_string_literal: true

class Driver < ApplicationRecord
  belongs_to :user
  has_one_attached :car_photo
end
