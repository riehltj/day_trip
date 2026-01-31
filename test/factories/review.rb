# frozen_string_literal: true

FactoryBot.define do
  factory :review do
    association :driver
    association :user
    association :ride
    rating { 5 }
    comment { 'Great ride!' }
  end
end
