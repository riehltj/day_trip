# frozen_string_literal: true

class AddStripeAccountIdToUser < ActiveRecord::Migration[7.1]
  def change
    add_column :users, :stripe_account_id, :string
    remove_column :drivers, :stripe_account_id, :string
  end
end
