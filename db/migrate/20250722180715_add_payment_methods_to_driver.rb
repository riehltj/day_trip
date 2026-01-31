# frozen_string_literal: true

class AddPaymentMethodsToDriver < ActiveRecord::Migration[7.1]
  def change
    add_column :drivers, :payment_methods, :jsonb, default: [], null: false
  end
end
