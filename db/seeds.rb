# frozen_string_literal: true

# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).

# Create a user

  test_user = User.find_or_create_by!(email: 'test@test.com') do |user|
    user.first_name = 'Test'
    user.last_name = 'User'
    user.phone_number = '123-456-7890'
    user.address = '123 Test St'
    user.city = 'Denver'
    user.state = 'CO'
    user.zip_code = 80202
    user.gender = 'M'
    user.date_of_birth = Date.new(1990, 1, 1)
    user.password = 'password'
    user.password_confirmation = 'password'
  end


  print "\nCreating a user"
  10.times do
    print '.'
    User.create!(
      email: Faker::Internet.email,
      password: 'password',
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      phone_number: Faker::PhoneNumber.phone_number,
      address: Faker::Address.street_address,
      city: 'Denver',
      state: 'CO',
      zip_code: 80202,
      gender: %w[M F NB DTS].sample,
      date_of_birth: Faker::Date.birthday(min_age: 18, max_age: 65),
      avatar: FakerActiveRecord::Image.attach_avatar
    )
  end

# Create a Driver
  print "\nCreating a driver"
  3.times do |i|
    print '.'
    driver = Driver.create!(
      user: User.all.sample, 
      car_make: Faker::Vehicle.make, 
      car_model: Faker::Vehicle.model, 
      car_year: Faker::Vehicle.year,
      car_photo: FakerActiveRecord::Image.attach_cat
    )
  end

  print "\nCreating a ride"
  leave_time = [6.hours, 6.hours + 15.minutes, 6.hours + 30.minutes].sample
  leave_date = Faker::Date.between(from: Date.today + 6.weeks, to: Date.today + 10.weeks)
  leave_time = Time.zone.now.change(hour: leave_time / 1.hour, min: leave_time % 1.hour / 1.minute)

  10.times do
    print '.'
    Ride.create!(
      driver: Driver.all.sample,
      leave_date: leave_date,
      leave_time: leave_time,
      address_line1: Faker::Address.street_address,
      state: 'CO',
      city: 'Denver',
      zip_code: 80202,
      destination: 'Breckenridge',
      description: Faker::Lorem.paragraph,
      cost_per_rider_in_cents: (400..1500).to_a.sample,
      available_seats: (1..4).to_a.sample,
      status: 1, # open
    )
  end

  print "\nCreating a reservation"
  5.times do
    print '.'
    ride = Ride.all.sample
    number_of_seats = (1..2).to_a.sample
    Reservation.create!(
      user: test_user,
      ride: ride,
      number_of_seats: number_of_seats,
      total_cost_in_cents: ride.cost_per_rider_in_cents * number_of_seats,
      payment_status: 'paid'
    )
  end


  # Make some closed reservations for the test user to leave some reviews!
  8.times do
      print '.'
      ride = Ride.all.sample
      number_of_seats = (1..2).to_a.sample
      
      Reservation.create!(
        user: test_user,
        ride: ride,
        number_of_seats: (1..2).to_a.sample,
        total_cost_in_cents: ride.cost_per_rider_in_cents * number_of_seats,
        payment_status: 'paid',
        status: 'closed'
      )

      Review.create!(driver_id: test_user.driver.id, user_id: User.all.sample.id, ride_id: ride.id, rating: (1..5).to_a.sample, comment: 'This is a comment left by a bot teehee' )
  end


