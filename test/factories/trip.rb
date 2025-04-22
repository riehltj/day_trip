# frozen_string_literal: true

FactoryBot.define do
  factory :trip do
    association :ride
    association :user
    number_of_seats { 4 }
    total_cost { 4.00 }
    payment_status { 'paid' }
    status { 'pending' }
  end
end
