# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
    subject { build(:user) }

    it { is_expected.to have_many(:trips).dependent(:destroy) }
    it { is_expected.to have_many(:rides).dependent(:destroy) }
    it { is_expected.to have_one(:driver).dependent(:destroy) }
    it { is_expected.to have_one_attached(:avatar) }
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:password) }
    it { is_expected.to validate_presence_of(:date_of_birth) }
    it { is_expected.to validate_presence_of(:gender) }
  end

  describe '#age' do
    let(:user) { create(:user, date_of_birth: 20.years.ago) }

    it 'calculates the correct age' do
      expect(user.age).to eq(20)
    end

    it 'returns 0 if the user is less than a year old' do
      user.update(date_of_birth: 6.months.ago)
      expect(user.age).to eq(0)
    end
  end

  describe '#full_name' do
    let(:user) { create(:user, first_name: 'John', last_name: 'Doe') }

    it 'returns the full name' do
      expect(user.full_name).to eq('John Doe')
    end
  end

  describe '#gender_full' do
    let(:user) { create(:user, gender: 'M') }

    it 'returns the full gender name' do
      expect(user.gender_full).to eq('Male')
    end
  end

  describe '#driver_of?' do
    let(:user) { create(:user) }
    let(:driver) { create(:driver, user: user) }
    let(:ride) { create(:ride, driver: driver) }

    it 'returns true if the user is the driver of the ride' do
      expect(user.driver_of?(ride)).to be true
    end

    it 'returns false if the user is not the driver of the ride' do
      other_user = create(:user)
      expect(user.driver_of?(other_user.rides.first)).to be false
    end
  end
end
