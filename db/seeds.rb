# frozen_string_literal: true

# Guard: skip if fully seeded (past rides + reviews already exist)
if Ride.where(status: :closed).count >= 3
  puts "\nDemo data already exists — skipping seeds."
  return
end

puts "\nSeeding demo data..."

def seed_image_io
  base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
  StringIO.new(Base64.strict_decode64(base64))
end

car_photo_path = Rails.root.join('test/assets/images/car_1.jpg')

def attach_car_photo(driver, car_photo_path)
  if car_photo_path.exist?
    driver.car_photo.attach(io: File.open(car_photo_path), filename: 'car.jpg', content_type: 'image/jpeg')
  else
    driver.car_photo.attach(io: seed_image_io, filename: 'placeholder.png', content_type: 'image/png')
  end
end

# ── Users ─────────────────────────────────────────────────────────────────────
print "\nCreating users"

user_data = [
  { email: 'jake.martinez@example.com', first_name: 'Jake',   last_name: 'Martinez',  gender: 'M',   dob: Date.new(1992, 3, 15) },
  { email: 'sarah.chen@example.com',    first_name: 'Sarah',  last_name: 'Chen',       gender: 'F',   dob: Date.new(1995, 7, 22) },
  { email: 'mike.thompson@example.com', first_name: 'Mike',   last_name: 'Thompson',   gender: 'M',   dob: Date.new(1988, 11, 8) },
  { email: 'emily.r@example.com',       first_name: 'Emily',  last_name: 'Rodriguez',  gender: 'F',   dob: Date.new(1997, 4, 30) },
  { email: 'alex.patel@example.com',    first_name: 'Alex',   last_name: 'Patel',      gender: 'NB',  dob: Date.new(1993, 9, 14) },
  { email: 'casey.j@example.com',       first_name: 'Casey',  last_name: 'Johnson',    gender: 'M',   dob: Date.new(1990, 1, 25) },
  { email: 'jordan.lee@example.com',    first_name: 'Jordan', last_name: 'Lee',        gender: 'F',   dob: Date.new(1996, 6, 3)  },
]

users = user_data.map do |u|
  print '.'
  User.find_or_create_by!(email: u[:email]) do |user|
    user.first_name            = u[:first_name]
    user.last_name             = u[:last_name]
    user.gender                = u[:gender]
    user.date_of_birth         = u[:dob]
    user.city                  = 'Denver'
    user.state                 = 'CO'
    user.zip_code              = '80202'
    user.password              = 'password123!'
    user.password_confirmation = 'password123!'
  end
end

# ── Drivers ───────────────────────────────────────────────────────────────────
print "\nCreating drivers"

driver_data = [
  {
    user: users[0], car_make: 'Subaru', car_model: 'Outback', car_year: 2022,
    description: "Experienced I-70 driver. 4WD, snow tires, roof rack for gear. I leave early to beat traffic — if you're late, I'm gone."
  },
  {
    user: users[1], car_make: 'Toyota', car_model: '4Runner', car_year: 2021,
    description: "Heading to the mountains most weekends. Good vibes only, no drama. Bring snacks to share and you're golden."
  },
  {
    user: users[2], car_make: 'Jeep', car_model: 'Grand Cherokee', car_year: 2020,
    description: "Season pass holder at Breck. I do this drive every week and know all the tricks to avoid the worst of I-70. Pet-free car."
  },
  {
    user: users[5], car_make: 'Honda', car_model: 'CR-V', car_year: 2023,
    description: "New to posting rides but I've been skiing Colorado for 8 years. AWD, plenty of room for gear. Usually throw on a ski podcast for the drive up."
  },
]

drivers = driver_data.map do |d|
  print '.'
  driver = Driver.find_or_initialize_by(user: d[:user])
  if driver.new_record?
    driver.car_make    = d[:car_make]
    driver.car_model   = d[:car_model]
    driver.car_year    = d[:car_year]
    driver.description = d[:description]
    attach_car_photo(driver, car_photo_path)
    driver.save!
  end
  driver
end

# ── Upcoming Rides ────────────────────────────────────────────────────────────
print "\nCreating upcoming rides"

# Build upcoming Saturday/Sunday dates
upcoming_weekends = (1..5).flat_map do |week|
  [
    Date.today.next_occurring(:saturday) + ((week - 1) * 7),
    Date.today.next_occurring(:sunday)   + ((week - 1) * 7)
  ]
end

ride_templates = [
  {
    driver: drivers[0], destination: 'Breckenridge',
    address: '2000 S Colorado Blvd', city: 'Denver', zip: '80222',
    hour: 6, min: 0, cost: 800, seats: 3,
    description: "Leaving from the King Soopers on S Colorado Blvd at 6am sharp. This drive goes fast with good company. Have a Spotify playlist ready and we'll split coffee costs too."
  },
  {
    driver: drivers[1], destination: 'Vail',
    address: 'Belleview Station Park & Ride', city: 'Aurora', zip: '80014',
    hour: 5, min: 30, cost: 1000, seats: 2,
    description: "Going to Vail for a full day — aiming for first chair. Meeting at the Belleview light rail station parking lot. Plenty of space for skis and boards."
  },
  {
    driver: drivers[2], destination: 'Keystone',
    address: 'Colorado Mills Mall', city: 'Lakewood', zip: '80401',
    hour: 6, min: 30, cost: 700, seats: 2,
    description: "Weekly Keystone run. I park at Colorado Mills so you can grab the light rail from downtown if you need. Super easy meetup. Back by 5pm usually."
  },
  {
    driver: drivers[0], destination: 'Winter Park',
    address: 'I-70 & Wadsworth Park & Ride', city: 'Arvada', zip: '80002',
    hour: 6, min: 15, cost: 900, seats: 3,
    description: "Winter Park through the Moffat Tunnel — no I-70 traffic. Seriously the best-kept secret in Colorado skiing. Let's go shred."
  },
  {
    driver: drivers[1], destination: 'Arapahoe Basin',
    address: 'Chatfield State Park', city: 'Littleton', zip: '80125',
    hour: 6, min: 45, cost: 600, seats: 3,
    description: "A-Basin is closest and the parking lot scene is legendary. Leaving from Chatfield. Relaxed vibe, no rush."
  },
  {
    driver: drivers[3], destination: 'Copper Mountain',
    address: 'Denver Union Station', city: 'Denver', zip: '80202',
    hour: 6, min: 0, cost: 800, seats: 2,
    description: "Copper has great terrain variety and way shorter lift lines than Breck. Picking up at Union Station — easy for anyone coming from downtown."
  },
  {
    driver: drivers[2], destination: 'Breckenridge',
    address: '1400 S Colorado Blvd', city: 'Denver', zip: '80222',
    hour: 5, min: 45, cost: 750, seats: 1,
    description: "One seat left for Saturday. I know the good parking spots and I leave early enough to actually get them. Low key driver, just good music and a smooth ride."
  },
  {
    driver: drivers[0], destination: 'Steamboat Springs',
    address: '16th Street Mall & Stout St', city: 'Denver', zip: '80202',
    hour: 5, min: 0, cost: 1000, seats: 2,
    description: "Long drive but 100% worth it. Steamboat is underrated — champagne powder is real. Early start to make it a full day."
  },
]

unless Ride.where(status: :open).count >= 8
  ride_templates.each_with_index do |t, i|
  print '.'
  leave_date = upcoming_weekends[i] || upcoming_weekends.last
  leave_time = Time.zone.now.change(hour: t[:hour], min: t[:min], sec: 0)

  Ride.create!(
    driver:                  t[:driver],
    destination:             t[:destination],
    address_line1:           t[:address],
    city:                    t[:city],
    state:                   'CO',
    zip_code:                t[:zip],
    leave_date:              leave_date,
    leave_time:              leave_time,
    cost_per_rider_in_cents: t[:cost],
    available_seats:         t[:seats],
    description:             t[:description],
    status:                  :open
  )
  end
end

# ── Past Rides + Reviews ──────────────────────────────────────────────────────
print "\nCreating past rides and reviews"

review_comments = [
  "Left right on time and knew exactly how to dodge the I-70 backup. Great vibes the whole drive. Would 100% ride again.",
  "Easy to coordinate with over text. Clean car, good music, no drama. Exactly what you want at 6am.",
  "Made the drive go by fast. We ended up skiing together for a few runs which was a bonus.",
  "Saved me like $50 in gas and parking. Reliable and friendly. This app is genuinely useful.",
  "Knew all the little tricks for the mountain roads. Had us back in Denver by 5 like he said.",
  "Chill and low-key. Didn't try to talk my ear off at 5:30am which I appreciated.",
  "Seriously the best way to get to the mountains without a car. Will be using this every weekend.",
  "Showed up right on time, full tank, ready to go. No fuss. Exactly what I needed.",
]

past_ride_data = [
  {
    driver: drivers[0], destination: 'Breckenridge',
    address: '2000 S Colorado Blvd', city: 'Denver', zip: '80222',
    date: 2.weeks.ago.to_date, hour: 6, min: 0, cost: 800,
    riders: [users[3], users[4], users[6]], review_offset: 0
  },
  {
    driver: drivers[1], destination: 'Vail',
    address: 'Belleview Station Park & Ride', city: 'Aurora', zip: '80014',
    date: 3.weeks.ago.to_date, hour: 5, min: 30, cost: 1000,
    riders: [users[3], users[6]], review_offset: 4
  },
  {
    driver: drivers[2], destination: 'Keystone',
    address: 'Colorado Mills Mall', city: 'Lakewood', zip: '80401',
    date: 4.weeks.ago.to_date, hour: 6, min: 30, cost: 700,
    riders: [users[4], users[6]], review_offset: 6
  },
]

past_ride_data.each do |t|
  print '.'
  leave_time = Time.zone.now.change(hour: t[:hour], min: t[:min], sec: 0)

  # Skip future-date validation for past demo rides
  past_ride = Ride.new(
    driver:                  t[:driver],
    destination:             t[:destination],
    address_line1:           t[:address],
    city:                    t[:city],
    state:                   'CO',
    zip_code:                t[:zip],
    leave_date:              t[:date],
    leave_time:              leave_time,
    cost_per_rider_in_cents: t[:cost],
    available_seats:         t[:riders].length,
    status:                  :closed
  )
  past_ride.save!(validate: false)

  t[:riders].each_with_index do |user, i|
    Reservation.create!(
      user:                user,
      ride:                past_ride,
      number_of_seats:     1,
      total_cost_in_cents: t[:cost],
      payment_status:      'paid',
      status:              :completed
    )

    Review.create!(
      driver:  t[:driver],
      user:    user,
      ride:    past_ride,
      rating:  [4, 5, 5].sample,
      comment: review_comments[t[:review_offset] + i]
    )
  end
end

puts "\n\nDemo data seeded! ✓"
