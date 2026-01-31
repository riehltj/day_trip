# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  subject { build(:user) }

  describe 'associations' do
    it { is_expected.to have_many(:reservations) }
    it { is_expected.to have_many(:rides).through(:reservations).dependent(:destroy) }
    it { is_expected.to have_one(:driver).dependent(:destroy) }
    it { is_expected.to have_one_attached(:avatar) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:first_name) }
    it { is_expected.to validate_presence_of(:last_name) }
  end

  describe 'instance methods' do
    let(:user) do
      create(:user, first_name: 'John', last_name: 'Doe', date_of_birth: Date.new(1990, 1, 1), gender: 'M')
    end

    describe '#age' do
      it 'calculates the correct age' do
        travel_to Time.zone.local(2025, 1, 1) do
          expect(user.age).to eq(35)
        end
      end

      it 'returns 99 if date_of_birth is nil' do
        user.date_of_birth = nil
        expect(user.age).to eq(99)
      end
    end

    describe '#full_name' do
      it 'returns the full name of the user' do
        expect(user.full_name).to eq('John Doe')
      end
    end

    describe '#gender_full' do
      it 'returns the full gender name' do
        expect(user.gender_full).to eq('Male')
      end

      it 'returns "Other" for an unknown gender code' do
        user.gender = 'X'
        expect(user.gender_full).to eq('Other')
      end
    end

    describe '#driver?' do
      it 'returns true if the user is a driver' do
        create(:driver, user: user)
        expect(user.driver?).to be true
      end

      it 'returns false if the user is not a driver' do
        expect(user.driver?).to be false
      end
    end

    describe '#driver_of?' do
      let(:driver) { create(:driver, user: user) }
      let(:ride) { create(:ride, driver: driver) }

      it 'returns true if the user is the driver of the ride' do
        expect(user.driver_of?(ride)).to be true
      end

      it 'returns false if the user is not the driver of the ride' do
        other_user = create(:user)
        expect(other_user.driver_of?(ride)).to be false
      end
    end
  end
end
