class CreateRides < ActiveRecord::Migration[7.1]
  def change
    create_table :rides do |t|
      t.references :driver, null: false, foreign_key: true
      t.date :leave_date
      t.time :leave_time
      t.string :meetup_location
      t.string :destination
      t.decimal :cost_per_rider
      t.integer :available_seats
      t.string :status

      t.timestamps
    end
  end
end
