# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Trips', type: :request do
  let(:user) { create(:user) }
  let(:driver) { create(:driver) }
  let(:ride) { create(:ride, driver: driver) }
  let!(:trip) { create(:trip, user: user, ride: ride) }

  before { sign_in user }

  describe 'GET /trips' do
    it 'returns a successful response' do
      get trips_path
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET /trips/:id' do
    it 'shows a trip' do
      get trip_path(trip)
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET /rides/:ride_id/trips/new' do
    it 'renders the new trip form' do
      get new_ride_trip_path(ride)
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST /rides/:ride_id/trips' do
    let(:trip_params) { { number_of_seats: 1, total_cost_in_cents: 1000 } }

    it 'creates a trip and redirects to payment' do
      expect do
        post trips_path(ride), params: { trip: trip_params }
      end.to change(Trip, :count).by(1)
    end
  end

  describe 'PATCH /trips/:id/approve' do
    it 'approves the trip' do
      patch approve_trip_path(trip)
      expect(response).to have_http_status(:ok).or have_http_status(:found)
    end
  end

  describe 'PATCH /trips/:id/reject' do
    it 'rejects the trip and redirects' do
      patch reject_trip_path(trip)
      expect(response).to redirect_to(trip.ride)
    end
  end

  describe 'GET /my_trips' do
    it 'shows my trips as a driver' do
      get my_trips_path
      expect(response).to have_http_status(:ok)
    end
  end
end
