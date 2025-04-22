# frozen_string_literal: true

FactoryBot.define do
  factory :driver do
    association :user
    car_make { 'Toyota' }
    car_model { 'Camry' }
    car_year { 2020 }
    description { 'A reliable car for rides.' }
    twitter { 'https://twitter.com/test_driver' }
    facebook { 'https://facebook.com/test_driver' }
    instagram { 'https://instagram.com/test_driver' }
    car_photo { Rack::Test::UploadedFile.new(Rails.root.join('test/assets/images/car_1.jpg'), 'image/jpeg') }
    license_plate_photo { Rack::Test::UploadedFile.new(Rails.root.join('test/assets/images/car_1.jpg'), 'image/jpeg') }
  end
end
