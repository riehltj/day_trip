# frozen_string_literal: true

FactoryBot.define do
  factory :ride do
    association :driver
    address_line1 { '123 Main St' }
    address_line2 { 'Apt 4' }
    city          { 'Testville' }
    state         { 'TS' }
    zip_code      { '12345' }
    leave_date    { Time.zone.today + 1 }
    leave_time    { Time.zone.parse('08:00') }
    destination { DestinationsLoader.all.sample }
    available_seats { 3 }
    cost_per_rider { 10.00 }
    status { 1 } # open
  end
end
