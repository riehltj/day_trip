# frozen_string_literal: true

class RenameTripsToReservations < ActiveRecord::Migration[7.1]
  def change
    rename_table :trips, :reservations
  end
end
