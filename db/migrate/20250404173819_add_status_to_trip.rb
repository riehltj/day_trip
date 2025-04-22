# frozen_string_literal: true

class AddStatusToTrip < ActiveRecord::Migration[7.1]
  def change
    add_column :trips, :status, :integer, default: 0, null: false
  end
end
