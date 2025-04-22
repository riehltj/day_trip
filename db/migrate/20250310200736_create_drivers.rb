# frozen_string_literal: true

class CreateDrivers < ActiveRecord::Migration[7.1]
  def change
    create_table :drivers, id: :uuid do |t|
      t.references :user, null: false, foreign_key: true, type: :uuid
      t.string :car_make
      t.string :car_model
      t.integer :car_year
      t.string :stripe_account_id
      t.text :description
      t.string :twitter
      t.string :instagram
      t.string :facebook

      t.timestamps
    end
  end
end
