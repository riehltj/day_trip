# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  before_save :normalize_gender

  has_many :bookings, dependent: :destroy
  has_many :rides, through: :bookings

  GENDER_MAPPING = {
    'male' => 'M',
    'female' => 'F',
    'non_binary' => 'NB',
    'declined_to_state' => 'DTS'
  }.freeze

  REVERSE_GENDER_MAPPING = GENDER_MAPPING.invert

  def age
    now = Time.now.utc.to_date
    now.year - date_of_birth.year - (date_of_birth.to_date.change(year: now.year) > now ? 1 : 0)
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def normalize_gender
    GENDER_MAPPING[gender] if GENDER_MAPPING.key?(gender)
  end

  def gender_full
    REVERSE_GENDER_MAPPING[gender] || 'Other'
  end
end
