# frozen_string_literal: true

class PaymentMethod < ApplicationRecord
  has_and_belongs_to_many :drivers # rubocop:disable Rails/HasAndBelongsToMany
end
