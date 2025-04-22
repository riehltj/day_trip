# frozen_string_literal: true

class AddIndexToRideModel < ActiveRecord::Migration[7.1]
  def change
    add_index :rides, :leave_date
    add_index :rides, :status
  end
end
