# frozen_string_literal: true

class Driver < ApplicationRecord
  # The current supported social media platforms
  # and their base URLs for generating profile links.
  SOCIALS = {
    twitter: 'https://twitter.com/',
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/'
  }.freeze

  belongs_to :user

  has_one_attached :car_photo
  has_one_attached :license_plate_photo
  has_many :rides, dependent: :destroy
  has_many :reviews, dependent: :destroy

  validates :car_make, presence: true
  validates :car_model, presence: true
  validates :car_year, presence: true, numericality: { only_integer: true }
  validates :car_photo, presence: true

  def full_car_details
    "#{car_make} #{car_model} #{car_year}"
  end

  def rides_completed
    rides.where(status: :closed).count
  end

  def average_rating
    return 0 if reviews.empty?

    total_rating = reviews.sum(:rating)
    total_reviews = reviews.count
    (total_rating / total_reviews.to_f).round(2)
  end
end
