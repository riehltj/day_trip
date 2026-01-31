# frozen_string_literal: true

FactoryBot.define do
  factory :reservation do
    association :ride
    association :user
    number_of_seats { 1 }
    total_cost { 4.00 }
    payment_status { 'paid' }
    status { 'pending' }
  end
end
