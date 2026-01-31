# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Drivers', type: :request do
  let(:user) { create(:user) }
  let!(:driver) { create(:driver, user: user) }

  describe 'GET /drivers/:id' do
    it 'returns a successful response' do
      get driver_path(driver)
      expect(response).to have_http_status(:ok)
    end

    it 'renders the drivers car_make' do
      get driver_path(driver)
      expect(response.body).to include(driver.car_make)
    end
  end

  describe 'GET /drivers/new' do
    context 'when not signed in' do
      it 'redirects to sign in' do
        get new_driver_path
        expect(response).to redirect_to(new_user_session_path)
      end
    end

    context 'when signed in' do
      before { sign_in user }

      it 'renders the new template' do
        get new_driver_path
        expect(response).to have_http_status(:ok)
      end
    end
  end

  describe 'POST /drivers' do
    let(:driver_params) do
      {
        car_make: 'Toyota',
        car_model: 'Camry',
        car_year: 2020,
        car_photo: fixture_file_upload('test/assets/images/car_1.jpg', 'image/jpeg'),
        license_plate_photo: fixture_file_upload('test/assets/images/car_1.jpg', 'image/jpeg'),
        description: 'Experienced driver with a clean record.'
      }
    end

    let(:driver_params_without_photo) do
      {
        car_make: 'Toyota',
        car_model: 'Camry',
        car_year: 2020
      }
    end

    context 'when not signed in' do
      it 'does not create a driver and redirects to sign in' do
        expect do
          post drivers_path, params: { driver: driver_params }
        end.not_to change(Driver, :count)
      end

      it 'redirects to sign in' do
        post drivers_path, params: { driver: driver_params }
        expect(response).to redirect_to(new_user_session_path)
      end
    end

    context 'when signed in' do
      before { sign_in user }

      it 'creates a driver and redirects to root' do
        expect do
          post drivers_path, params: { driver: driver_params }
        end.to change(Driver, :count).by(1)
      end

      it 'flashes a success message' do
        post drivers_path, params: { driver: driver_params }
        expect(flash[:notice]).to eq('Driver profile created successfully')
      end

      it 'redirects to driver path' do
        post drivers_path, params: { driver: driver_params }
        expect(response).to redirect_to(driver_path(Driver.find_by(car_make: driver_params[:car_make])))
      end

      it 'does not create a driver with invalid params' do
        expect do
          post drivers_path, params: { driver: driver_params_without_photo }
        end.not_to change(Driver, :count)
      end

      it 'flashes an error message when creation fails' do
        post drivers_path(driver: driver_params_without_photo)
        expect(response.body).to include("Car photo can't be blank")
      end
    end
  end
end
