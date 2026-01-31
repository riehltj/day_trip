---

### DayTrip (Ruby on Rails + Tailwind CSS)

# DayTrip

DayTrip is a full-stack Ruby on Rails web app that allows users to browse and book seats on upcoming group trips.

## Features

- User authentication (Devise)
- Trip listings with availability and details
- Seat booking with real-time availability
- Admin dashboard for managing trips (optional)

## Tech Stack

- Ruby on Rails 7
- PostgreSQL
- Tailwind CSS
- Turbo/Hotwire
- StimulusJS

## Setup

```bash
git clone https://github.com/yourusername/daytrip.git
cd daytrip
bundle install
yarn install
rails db:create db:migrate db:seed
rails server
```
