# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Ride do
  describe 'validations' do
    subject { build(:ride) }

    it { is_expected.to belong_to(:driver) }
    it { is_expected.to have_many(:trips).dependent(:destroy) }
    it { is_expected.to monetize(:cost_per_rider_in_cents).as(:cost_per_rider) }
    it { is_expected.to validate_presence_of(:address_line1) }
    it { is_expected.to validate_presence_of(:city) }
    it { is_expected.to validate_presence_of(:state) }
    it { is_expected.to validate_presence_of(:zip_code) }
    it { is_expected.to validate_presence_of(:leave_date) }
    it { is_expected.to validate_presence_of(:leave_time) }
    it { is_expected.to validate_presence_of(:destination) }
    it { is_expected.to validate_presence_of(:available_seats) }
    it { is_expected.to validate_numericality_of(:available_seats).is_greater_than_or_equal_to(0) }
    it { is_expected.to validate_numericality_of(:cost_per_rider).is_greater_than_or_equal_to(0) }
    it { is_expected.to define_enum_for(:status).with_values(%i[filled open pending canceled]) }
  end

  describe '#other_open_rides' do # rubocop:disable RSpec/MultipleMemoizedHelpers
    let(:driver) { create(:driver) }

    let(:users_ride) { create(:ride, driver: driver) }
    let(:other_ride) { create(:ride) }
    let(:filled_ride) { create(:ride, status: :filled) }
    let(:canceled_ride) { create(:ride, status: :canceled) }
    let(:pending_ride) { create(:ride, status: :pending) }
    let(:past_ride) { create(:ride, leave_date: 1.day.ago) }

    it 'returns the other open ride that is not the current_users' do
      expect(described_class.other_open_rides(driver.id)).to include(other_ride)
    end

    it 'does not return rides that are in the past' do
      expect(described_class.other_open_rides(driver.id)).not_to include(past_ride)
    end

    it 'does not return filled rides' do
      expect(described_class.other_open_rides(driver.id)).not_to include(filled_ride)
    end

    it 'does not return canceled rides' do
      expect(described_class.other_open_rides(driver.id)).not_to include(canceled_ride)
    end

    it 'does not return pending rides' do
      expect(described_class.other_open_rides(driver.id)).not_to include(pending_ride)
    end

    it 'does not return the current_users ride' do
      expect(described_class.other_open_rides(driver.id)).not_to include(users_ride)
    end
  end

  describe '#meetup_location' do
    let(:ride) { create(:ride) }

    it 'returns the formatted meetup location' do
      expect(ride.meetup_location).to match(
        /\A#{ride.address_line1} #{ride.address_line2}\s*<br>\s*#{ride.city}, #{ride.state} #{ride.zip_code}\z/
      )
    end
  end

  describe '#can_edit?' do
    let(:ride) { create(:ride) }

    context 'when the ride is open' do
      it 'returns true' do
        ride.status = :open
        expect(ride.can_edit?).to be true
      end
    end

    context 'when the ride is pending' do
      it 'returns true' do
        ride.status = :pending
        expect(ride.can_edit?).to be true
      end
    end

    context 'when the ride is filled' do
      it 'returns false' do
        ride.status = :filled
        expect(ride.can_edit?).to be false
      end
    end

    context 'when the ride is canceled' do
      it 'returns false' do
        ride.status = :canceled
        expect(ride.can_edit?).to be false
      end
    end
  end

  describe '#passengers' do
    let(:ride) { create(:ride) }
    let(:user) { create(:user) }
    let!(:trip) { create(:trip, ride: ride, user: user) } # rubocop:disable RSpec/LetSetup

    it 'returns the passengers of the ride' do
      expect(ride.passengers).to include(user)
    end

    it 'does not return users who are not passengers' do
      other_user = create(:user)
      expect(ride.passengers).not_to include(other_user)
    end
  end

  describe '#trip_payment_status' do
    let(:ride) { create(:ride) }
    let(:user) { create(:user) }
    let!(:trip) { create(:trip, ride: ride, user: user, payment_status: 'paid') } # rubocop:disable RSpec/LetSetup

    it 'returns the payment status of the trip for the given user' do
      expect(ride.trip_payment_status(user)).to eq('paid')
    end

    it 'returns nil if the user is not a passenger' do
      other_user = create(:user)
      expect(ride.trip_payment_status(other_user)).to be_nil
    end
  end

  describe '#leave_date_time' do
    let(:ride) { create(:ride, leave_date: Time.zone.parse('2025-08-27'), leave_time: Time.zone.parse('08:00')) }

    it 'returns the formatted leave date and time' do
      expect(ride.leave_date_time).to eq('Aug 27, 2025 @  8:00 AM')
    end
  end
end
