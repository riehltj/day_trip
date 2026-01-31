# frozen_string_literal: true

class User < ApplicationRecord
  class NotAuthorized < StandardError; end

  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable

  has_many :reservations, dependent: :destroy
  has_many :rides, through: :reservations, dependent: :destroy
  has_one :driver, dependent: :destroy
  has_one_attached :avatar

  validates :first_name, :last_name, presence: true

  # Map codes to full gender names (for display)
  GENDER_DISPLAY = {
    'M' => 'Male',
    'F' => 'Female',
    'NB' => 'Non-binary',
    'DTS' => 'Declined to state'
  }.freeze

  def age
    return 99 unless date_of_birth

    now = Time.now.utc.to_date
    now.year - date_of_birth.year - (date_of_birth.to_date.change(year: now.year) > now ? 1 : 0)
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def gender_full
    GENDER_DISPLAY[gender] || 'Other'
  end

  def driver?
    driver.present?
  end

  def driver_of?(ride)
    driver.present? && ride.driver_id == driver.id
  end
end
