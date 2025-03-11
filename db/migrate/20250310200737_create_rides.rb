# frozen_string_literal: true

class CreateRides < ActiveRecord::Migration[7.1]
  def change
    create_table :rides do |t|
      t.references :driver, null: false, foreign_key: true
      t.datetime :leave_date
      t.string :address_line1
      t.string :address_line2
      t.string :state
      t.string :zip_code
      t.string :city
      t.string :destination
      t.integer :cost_per_rider_in_cents
      t.integer :available_seats
      t.string :status

      t.timestamps
    end
  end
end
