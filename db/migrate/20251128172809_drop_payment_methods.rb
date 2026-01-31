# frozen_string_literal: true

class DropPaymentMethods < ActiveRecord::Migration[7.1]
  def up
    drop_table :payment_methods
  end

  def down
    create_table :payment_methods do |t|
      t.string :name
      t.string :card_type
      t.string :card_number
      t.date :expiration_date
      t.timestamps
    end
  end
end
