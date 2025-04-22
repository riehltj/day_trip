# frozen_string_literal: true

class ChangeRideStatusToInt < ActiveRecord::Migration[7.1]
  def up
    change_table :rides, bulk: true do |t|
      t.remove :status, type: :string
      t.add :status, :integer, default: 0, null: false
    end
  end

  def down
    change_table :rides, bulk: true do |t|
      t.remove :status, type: :integer
      t.add :status, :string, default: 'open', null: false
    end
  end
end
