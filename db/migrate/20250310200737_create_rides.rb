# frozen_string_literal: true

class CreateRides < ActiveRecord::Migration[7.1]
  def change
    create_table :rides, id: :uuid do |t|
      t.references :driver, null: false, foreign_key: true, type: :uuid
      t.date :leave_date
      t.time :leave_time
      t.string :address_line1
      t.string :address_line2
      t.string :state
      t.string :zip_code
      t.string :city
      t.string :destination
      t.text :description
      t.integer :cost_per_rider_in_cents
      t.integer :available_seats
      t.string :status

      t.timestamps
    end
  end
end
