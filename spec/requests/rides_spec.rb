# frozen_string_literal: true

require 'rails_helper'

CARD_ATTRIBUTES = [
  'destination',
  'leave_date_time',
  'meetup_location',
  'cost_per_rider',
  'available_seats',
  'driver.user.full_name',
  'driver.user.age',
  'driver.user.gender'
].freeze

def nested_value(obj, path)
  path.split('.').inject(obj) { |o, m| o.send(m) }
end

RSpec.describe 'Rides', type: :request do
  let(:user) { create(:user) }
  let!(:driver) { create(:driver, user: user) }
  let(:ride) { create(:ride, driver: driver) }
  let(:ride_attributes) { attributes_for(:ride).merge(driver_id: driver.id) }

  before { sign_in(user) }

  describe 'GET /rides' do
    it 'returns a successful response' do
      get rides_path
      expect(response).to have_http_status(:ok)
    end

    CARD_ATTRIBUTES.each do |attribute|
      it "returns ride #{attribute}" do
        get rides_path
        expect(response.body).to include(nested_value(ride, attribute).to_s)
      end
    end
  end

  describe 'GET /rides/:id' do
    it 'shows a ride' do
      get ride_path(ride)
      expect(response).to have_http_status(:ok)
    end

    CARD_ATTRIBUTES.each do |attribute|
      it "returns ride #{attribute}" do
        get rides_path(ride)
        expect(response.body).to include(nested_value(ride, attribute).to_s)
      end
    end
  end

  describe 'POST /rides' do
    it 'renders a new ride form' do
      get new_ride_path
      expect(response).to have_http_status(:ok)
    end

    it 'creates a ride' do
      expect do
        post rides_path, params: { ride: ride_attributes.merge(driver_id: driver.id) }
      end.to change(Ride, :count).by(1)
    end

    it 'flashes a success message' do
      post rides_path, params: { ride: ride_attributes.merge(driver_id: driver.id) }
      expect(flash[:notice]).to eq('Ride was successfully created.')
    end

    context 'when ride is invalid' do
      it 'does not create a ride' do
        expect do
          post rides_path, params: { ride: { destination: '', leave_date_time: '' } }
        end.not_to change(Ride, :count)
      end

      it 'flashes an error message' do
        post rides_path, params: { ride: { destination: '', leave_date_time: '' } }
        expect(flash[:alert]).to include('Destination can\'t be blank')
      end
    end
  end

  describe 'GET /my_rides' do
    it 'returns a successful response' do
      get my_rides_path
      expect(response).to have_http_status(:ok)
    end

    it 'renders the my_rides template' do
      get my_rides_path
      expect(response.body).to include(driver.user.full_name)
    end

    it 'shows no trips found when no rides exist' do
      get my_rides_path
      expect(response.body).to include('You have no trip offerings yet.')
    end

    it 'shows all my rides' do
      my_rides = create_list(:ride, 3, driver: driver)
      get my_rides_path

      my_rides.each do |ride|
        expect(response.body).to include(ride.destination.to_s)
      end
    end
  end

  describe 'PUT /rides/:id' do
    it 'updates a ride when owned' do
      put ride_path(ride), params: { ride: ride_attributes }
      expect(response.body).to redirect_to(my_rides_path)
    end

    it 'flashes a success message' do
      put ride_path(ride), params: { ride: ride_attributes }
      expect(flash[:notice]).to eq('Ride was successfully updated.')
    end

    context 'when ride is not editable' do # rubocop:disable RSpec/MultipleMemoizedHelpers
      let(:other_user) { create(:user) }
      let(:other_driver) { create(:driver, user: other_user) }
      let(:other_ride) { create(:ride, driver: other_driver) }

      it 'renders a forbidden page' do
        put ride_path(other_ride), params: { ride: ride_attributes }
        expect(response).to have_http_status(:forbidden)
      end

      it 'contains an error message' do
        put ride_path(other_ride), params: { ride: ride_attributes }
        expect(response.body).to include("Whoa there, partner! You don't have permission to access this page.")
      end
    end

    context 'when ride is invalid' do
      it 'does not update the ride' do
        put ride_path(ride), params: { ride: { destination: nil, leave_date_time: '' } }
        expect(response).to have_http_status(422)
      end

      it 'flashes an error message' do
        put ride_path(ride), params: { ride: { destination: '', leave_date_time: '' } }
        expect(flash[:alert]).to include('Destination can\'t be blank')
      end
    end
  end

  describe 'DELETE /rides/:id' do
    it 'deletes a ride' do
      ride_to_delete = create(:ride, driver: driver)
      expect do
        delete ride_path(ride_to_delete)
      end.to change(Ride, :count).by(-1)
    end
  end
end
