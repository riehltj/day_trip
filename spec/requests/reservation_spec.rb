# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'reservations', type: :request do
  let(:user) { create(:user) }
  let(:driver) { create(:driver) }
  let(:ride) { create(:ride, driver: driver) }
  let!(:reservation) { create(:reservation, user: user, ride: ride) }

  before { sign_in user }

  describe 'GET /reservations' do
    it 'returns a successful response' do
      get reservations_path
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET /reservations/:id' do
    it 'shows a reservation' do
      get reservation_path(reservation)
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'GET /rides/:ride_id/reservations/new' do
    it 'renders the new reservation form' do
      get new_ride_reservation_path(ride)
      expect(response).to have_http_status(:ok)
    end
  end

  describe 'POST /rides/:ride_id/reservations' do
    let(:reservation_params) { { number_of_seats: 1, total_cost_in_cents: 1000 } }

    it 'creates a reservation' do
      expect do
        post ride_reservations_path(ride), params: { reservation: reservation_params }
      end.to change(Reservation, :count).by(1)
    end
  end

  describe 'PATCH /reservations/:id/accept' do
    it 'accepts the reservation' do
      patch accept_reservation_path(reservation, ride_id: ride.id)
      expect(response).to have_http_status(:ok).or have_http_status(:found)
    end
  end

  describe 'PATCH /reservations/:id/reject' do
    it 'rejects the reservation and redirects' do
      patch reject_reservation_path(reservation, ride_id: ride.id)
      expect(response).to redirect_to(my_rides_path)
    end
  end
end
