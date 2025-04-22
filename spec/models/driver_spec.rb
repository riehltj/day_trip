# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Driver do
  describe 'validations' do
    subject { build(:driver) }

    it { is_expected.to belong_to(:user) }
    it { is_expected.to have_many(:rides).dependent(:destroy) }
    it { is_expected.to have_one_attached(:car_photo) }
    it { is_expected.to have_one_attached(:license_plate_photo) }
    it { is_expected.to validate_presence_of(:car_make) }
    it { is_expected.to validate_presence_of(:car_model) }
    it { is_expected.to validate_presence_of(:car_year) }
    it { is_expected.to validate_numericality_of(:car_year).only_integer }
    it { is_expected.to validate_presence_of(:car_photo) }
  end

  describe '#delete_stripe_account' do
    let(:user) { create(:user, stripe_account_id: 'acct_123') }
    let(:driver) { create(:driver, user: user) }

    before do
      allow(driver.user).to receive(:update!)
    end

    it 'updates the user with nil' do
      driver.delete_stripe_account
      expect(driver.user).to have_received(:update!).with(nil)
    end

    it 'does not update the user if stripe_account_id is blank' do
      driver.user.update(stripe_account_id: nil)
      driver.delete_stripe_account
      expect(driver.user).not_to have_received(:update!)
    end
  end

  describe '#full_car_details' do
    let(:driver) { create(:driver, car_make: 'Toyota', car_model: 'Camry', car_year: 2020) }

    it 'returns the full car details' do
      expect(driver.full_car_details).to eq('Toyota Camry 2020')
    end
  end

  describe '#rides_completed' do
    let(:driver) { create(:driver) }
    let!(:completed_ride) { create(:ride, driver: driver, status: 'filled') } # rubocop:disable RSpec/LetSetup
    let!(:other_ride) { create(:ride, driver: driver, status: 'open') } # rubocop:disable RSpec/LetSetup

    it 'returns the count of completed rides' do
      expect(driver.rides_completed).to eq(1)
    end

    it 'does not count rides that are not filled' do
      expect(driver.rides_completed).not_to eq(2)
    end

    it 'does not count rides that are not associated with the driver' do
      other_driver = create(:driver)
      create(:ride, driver: other_driver, status: 'filled')
      expect(driver.rides_completed).not_to eq(2)
    end
  end
end
