# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    email { 'test@test.com' }
    password { 'password' }
    first_name { 'John' }
    last_name { 'Doe' }
    phone_number { '555-555-5555' }
    address { '123 Main St' }
    city { 'Denver' }
    state { 'CO' }
    zip_code { '80202' }
  end
end
