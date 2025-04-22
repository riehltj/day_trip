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
    it { is_expected.to validate_presence_of(:cost_per_rider_in_cents) }
    it { is_expected.to validate_numericality_of(:available_seats).is_greater_than_or_equal_to(0) }
    it { is_expected.to validate_numericality_of(:cost_per_rider).is_greater_than_or_equal_to(0) }
    it { is_expected.to define_enum_for(:status).with_values(%i[filled open pending canceled]) }
  end
end
