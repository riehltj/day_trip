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

  describe '#full_car_details' do
    let(:driver) { create(:driver, car_make: 'Toyota', car_model: 'Camry', car_year: 2020) }

    it 'returns the full car details' do
      expect(driver.full_car_details).to eq('Toyota Camry 2020')
    end
  end

  describe '#rides_completed' do
    let(:driver) { create(:driver) }
    let!(:completed_ride) { create(:ride, driver: driver, status: 'closed') } # rubocop:disable RSpec/LetSetup
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

  describe '#average_rating' do
    let(:driver) { create(:driver) }
    let!(:four_star_review) { create(:review, driver: driver, rating: 4) } # rubocop:disable RSpec/LetSetup
    let!(:five_star_review) { create(:review, driver: driver, rating: 5) } # rubocop:disable RSpec/LetSetup

    it 'returns the average rating' do
      expect(driver.average_rating).to eq(4.5)
    end

    it 'returns 0 if there are no reviews' do
      driver.reviews.destroy_all
      expect(driver.average_rating).to eq(0)
    end
  end
end
