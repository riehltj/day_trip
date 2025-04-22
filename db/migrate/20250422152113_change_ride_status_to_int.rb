# frozen_string_literal: true

class ChangeRideStatusToInt < ActiveRecord::Migration[7.1]
  def up
    change_column :rides, :status, :integer, using: 'status::integer', default: 0
  end

  def down
    change_table :rides, bulk: true do |t|
      t.remove :status, type: :integer
      t.column :status, :string
    end
  end
end
