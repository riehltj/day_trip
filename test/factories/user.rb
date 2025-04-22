# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    first_name { 'John' }
    last_name { 'Doe' }
    email { Faker::Internet.email }
    address { '123 Main St' }
    city { 'Denver' }
    state { 'CO' }
    zip_code { '80202' }
    gender { 'M' }
    date_of_birth { '1990-01-01' }
    phone_number { '123-456-7890' }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
