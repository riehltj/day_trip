# frozen_string_literal: true

class CreateTrips < ActiveRecord::Migration[7.1]
  def change
    create_table :trips, id: :uuid  do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.references :ride, null: false, foreign_key: true, type: :uuid

      t.integer :number_of_seats
      t.integer :total_cost_in_cents
      t.string :payment_status

      t.timestamps
    end
  end
end
