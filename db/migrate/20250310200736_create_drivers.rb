# frozen_string_literal: true

class CreateDrivers < ActiveRecord::Migration[7.1]
  def change
    create_table :drivers do |t|
      t.references :user, null: false, foreign_key: true
      t.string :car_make
      t.string :car_model
      t.integer :car_year

      t.timestamps
    end
  end
end
