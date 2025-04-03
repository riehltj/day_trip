# frozen_string_literal: true

class UpdateForeignKeyConstraintsForDeleteCascade < ActiveRecord::Migration[7.1]
  def change
    # Fix the constraint between users and drivers
    remove_foreign_key :drivers, :users
    add_foreign_key :drivers, :users, on_delete: :cascade

    # Fix the constraint between drivers and rides
    remove_foreign_key :rides, :drivers
    add_foreign_key :rides, :drivers, on_delete: :cascade

    # Fix the constraint between rides and trips
    remove_foreign_key :trips, :rides if foreign_key_exists?(:trips, :rides)
    add_foreign_key :trips, :rides, on_delete: :cascade

    # Fix the constraint between users and trips
    remove_foreign_key :trips, :users if foreign_key_exists?(:trips, :users)
    add_foreign_key :trips, :users, on_delete: :cascade
  end

  def foreign_key_exists?(table, reference)
    foreign_keys = connection.foreign_keys(table.to_s)
    foreign_keys.any? { |fk| fk.to_table.to_s == reference.to_s }
  end
end
