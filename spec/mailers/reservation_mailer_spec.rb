# frozen_string_literal: true

require 'rails_helper'

RSpec.describe ReservationMailer do
  let(:passenger) { create(:user, email: Faker::Internet.unique.email) }
  let(:driver_user) { create(:user, email: Faker::Internet.unique.email) }
  let(:driver) { create(:driver, user: driver_user) }
  let(:ride) { create(:ride, driver: driver) }
  let(:reservation) { create(:reservation, user: passenger, ride: ride) }

  describe '#reservation_accepted' do
    let(:mail) { described_class.reservation_accepted(reservation).deliver_now }

    it 'sends to the correct user' do
      expect(mail.to).to eq([passenger.email])
    end

    it 'has the correct subject' do
      expect(mail.subject).to eq('Your reservation has been accepted')
    end
  end

  describe '#reservation_rejected' do
    let(:mail) { described_class.reservation_rejected(reservation).deliver_now }

    it 'sends to the correct user' do
      expect(mail.to).to eq([passenger.email])
    end

    it 'has the correct subject' do
      expect(mail.subject).to eq('Your reservation has been rejected')
    end
  end

  describe '#reservation_completed' do
    let(:mail) { described_class.reservation_completed(reservation).deliver_now }

    it 'sends to the correct user' do
      expect(mail.to).to eq([passenger.email])
    end

    it 'has the correct subject' do
      expect(mail.subject).to eq('Your reservation has been completed')
    end
  end

  describe '#reservation_passenger_request' do
    let(:mail) { described_class.reservation_passenger_request(reservation).deliver_now }

    it 'sends to the driver' do
      expect(mail.to).to eq([driver_user.email])
    end

    it 'has the correct subject' do
      expect(mail.subject).to eq('New passenger request for your ride')
    end
  end
end
