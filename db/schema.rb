# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

# rubocop:disable Metrics/BlockLength
ActiveRecord::Schema[7.1].define(version: 20_250_310_201_931) do
  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'active_storage_attachments', force: :cascade do |t|
    t.string 'name', null: false
    t.string 'record_type', null: false
    t.bigint 'record_id', null: false
    t.bigint 'blob_id', null: false
    t.datetime 'created_at', null: false
    t.index ['blob_id'], name: 'index_active_storage_attachments_on_blob_id'
    t.index %w[record_type record_id name blob_id], name: 'index_active_storage_attachments_uniqueness',
                                                    unique: true
  end

  create_table 'active_storage_blobs', force: :cascade do |t|
    t.string 'key', null: false
    t.string 'filename', null: false
    t.string 'content_type'
    t.text 'metadata'
    t.string 'service_name', null: false
    t.bigint 'byte_size', null: false
    t.string 'checksum'
    t.datetime 'created_at', null: false
    t.index ['key'], name: 'index_active_storage_blobs_on_key', unique: true
  end

  create_table 'active_storage_variant_records', force: :cascade do |t|
    t.bigint 'blob_id', null: false
    t.string 'variation_digest', null: false
    t.index %w[blob_id variation_digest], name: 'index_active_storage_variant_records_uniqueness', unique: true
  end

  create_table 'bookings', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.bigint 'ride_id', null: false
    t.integer 'number_of_seats'
    t.decimal 'total_cost'
    t.string 'payment_status'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['ride_id'], name: 'index_bookings_on_ride_id'
    t.index ['user_id'], name: 'index_bookings_on_user_id'
  end

  create_table 'drivers', force: :cascade do |t|
    t.bigint 'user_id', null: false
    t.string 'car_make'
    t.string 'car_model'
    t.integer 'car_year'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['user_id'], name: 'index_drivers_on_user_id'
  end

  create_table 'rides', force: :cascade do |t|
    t.bigint 'driver_id', null: false
    t.datetime 'date'
    t.string 'address_line_1'
    t.string 'address_line_2'
    t.string 'state'
    t.string 'zip_code'
    t.string 'city'
    t.string 'destination'
    t.decimal 'cost_per_rider'
    t.integer 'available_seats'
    t.string 'status'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['driver_id'], name: 'index_rides_on_driver_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.datetime 'created_at', null: false
    t.datetime 'updated_at', null: false
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end

  add_foreign_key 'active_storage_attachments', 'active_storage_blobs', column: 'blob_id'
  add_foreign_key 'active_storage_variant_records', 'active_storage_blobs', column: 'blob_id'
  add_foreign_key 'bookings', 'rides'
  add_foreign_key 'bookings', 'users'
  add_foreign_key 'drivers', 'users'
  add_foreign_key 'rides', 'drivers'
end
# rubocop:enable Metrics/BlockLength
