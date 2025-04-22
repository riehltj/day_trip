# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Trip do
  describe 'validations' do
    subject { build(:trip) }

    it { is_expected.to belong_to(:ride) }
    it { is_expected.to belong_to(:user) }
    it { is_expected.to validate_presence_of(:number_of_seats) }
    it { is_expected.to monetize(:total_cost_in_cents).as(:total_cost) }
    it { is_expected.to define_enum_for(:status).with_values(%i[pending approved rejected]) }
  end

  describe 'scopes' do
    describe '#pending' do
      it 'returns trips with pending status' do
        trip = create(:trip, status: :pending)
        expect(described_class.pending).to include(trip)
      end
    end

    describe '#approved' do
      it 'returns trips with approved status' do
        trip = create(:trip, status: :approved)
        expect(described_class.approved).to include(trip)
      end
    end

    describe '#rejected' do
      it 'returns trips with rejected status' do
        trip = create(:trip, status: :rejected)
        expect(described_class.rejected).to include(trip)
      end
    end

    describe '#for_user' do
      let(:user) { create(:user) }
      let(:ride) { create(:ride) }
      let!(:trip) { create(:trip, user: user, ride: ride) }

      it 'returns trips for the specified user' do
        expect(described_class.for_user(user)).to include(trip)
      end

      it 'does not return trips for other users' do
        other_user = create(:user)
        expect(described_class.for_user(other_user)).not_to include(trip)
      end

      it 'orders trips by leave_date of the associated ride' do
        ride2 = create(:ride, leave_date: 10.days.from_now)
        trip2 = create(:trip, user: user, ride: ride2)

        expect(described_class.for_user(user).map(&:id)).to eq([trip.id, trip2.id])
      end
    end
  end
end
