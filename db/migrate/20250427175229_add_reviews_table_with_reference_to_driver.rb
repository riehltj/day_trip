# frozen_string_literal: true

class AddReviewsTableWithReferenceToDriver < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews, id: :uuid do |t|
      t.references :driver, null: false, type: :uuid, foreign_key: true
      t.references :user, null: false, type: :uuid, foreign_key: true
      t.references :ride, null: false, type: :uuid, foreign_key: true
      t.integer :rating, null: false
      t.text :comment

      t.timestamps
    end

    add_index :reviews, %i[driver_id user_id ride_id], unique: true
  end
end
