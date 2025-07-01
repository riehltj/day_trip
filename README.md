
---

### DayTrip (Ruby on Rails + Stripe)

# DayTrip

DayTrip is a full-stack Ruby on Rails web app that allows users to browse and book seats on upcoming group trips. The app integrates with Stripe for secure online payments.

## Features

- User authentication (Devise)
- Trip listings with availability and details
- Seat booking with real-time availability
- Stripe Checkout integration for payments
- Admin dashboard for managing trips (optional)

## 💸 Payments

Stripe is used to securely handle credit card transactions. Payments are processed using [Stripe Checkout](https://stripe.com/docs/checkout), and all sensitive data is handled via Stripe's SDK.

## Tech Stack

- Ruby on Rails 7
- PostgreSQL
- Tailwind CSS
- Stripe Ruby SDK
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
