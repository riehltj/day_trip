# frozen_string_literal: true

class CreateBookings < ActiveRecord::Migration[7.1]
  def change
    create_table :bookings do |t|
      t.references :user, null: false, foreign_key: true
      t.references :ride, null: false, foreign_key: true

      t.integer :number_of_seats
      t.decimal :total_cost
      t.string :payment_status

      t.timestamps
    end
  end
end
