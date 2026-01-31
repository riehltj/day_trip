# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Reservation do
  describe 'validations' do
    subject { build(:reservation) }

    it { is_expected.to belong_to(:ride) }
    it { is_expected.to belong_to(:user) }
    it { is_expected.to validate_presence_of(:number_of_seats) }
    it { is_expected.to monetize(:total_cost_in_cents).as(:total_cost) }
    it { is_expected.to define_enum_for(:status).with_values(%i[pending accepted rejected completed]) }
  end

  describe 'scopes' do
    describe '#pending' do
      it 'returns reservations with pending status' do
        reservation = create(:reservation, status: :pending)
        expect(described_class.pending).to include(reservation)
      end
    end

    describe '#accepted' do
      it 'returns reservations with accepted status' do
        reservation = create(:reservation, status: :accepted)
        expect(described_class.accepted).to include(reservation)
      end
    end

    describe '#rejected' do
      it 'returns reservations with rejected status' do
        reservation = create(:reservation, status: :rejected)
        expect(described_class.rejected).to include(reservation)
      end
    end

    describe '#completed' do
      it 'returns reservations with completed status' do
        reservation = create(:reservation, status: :completed)
        expect(described_class.completed).to include(reservation)
      end
    end

    describe '#for_user' do
      let(:user) { create(:user) }
      let(:ride) { create(:ride) }
      let!(:reservation) { create(:reservation, user: user, ride: ride) }

      it 'returns reservations for the specified user' do
        expect(described_class.for_user(user)).to include(reservation)
      end

      it 'does not return reservations for other users' do
        other_user = create(:user)
        expect(described_class.for_user(other_user)).not_to include(reservation)
      end

      it 'orders reservations by leave_date of the associated ride' do
        ride2 = create(:ride, leave_date: 10.days.from_now)
        reservation2 = create(:reservation, user: user, ride: ride2)

        expect(described_class.for_user(user).map(&:id)).to eq([reservation.id, reservation2.id])
      end
    end
  end

  describe '#driving' do
    it 'returns reservations for rides driven by the current user' do
      driver = create(:driver)
      ride = create(:ride, driver: driver)
      reservation = create(:reservation, ride: ride, number_of_seats: 1)

      expect(reservation.driving).to include(reservation)
    end
  end

  describe '#reserve and restore seats' do
    let(:ride) { create(:ride, available_seats: 5) }
    let(:reservation) { create(:reservation, ride: ride, number_of_seats: 2) }

    it 'reduces available seats on create' do
      expect { reservation }.to change { ride.reload.available_seats }.by(-2)
    end

    it 'restores available seats on destroy' do
      reservation # create the reservation first
      expect { reservation.destroy }.to change { ride.reload.available_seats }.by(2)
    end
  end

  describe '#reservation completed' do
    it 'completes the reservation' do
      driver = create(:driver)
      ride = create(:ride, driver: driver)
      reservation = create(:reservation, ride: ride, number_of_seats: 1)

      reservation.update!(status: 'completed')

      expect(reservation.status).to eq('completed')
    end
  end
end
