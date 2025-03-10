class CreateDrivers < ActiveRecord::Migration[7.1]
  def change
    create_table :drivers do |t|
      t.references :user, null: false, foreign_key: true
      t.string :car_make_model
      t.string :photo_of_car
      t.string :drivers_license

      t.timestamps
    end
  end
end
