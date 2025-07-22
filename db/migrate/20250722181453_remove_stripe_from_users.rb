# frozen_string_literal: true

class RemoveStripeFromUsers < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :stripe_account_id, :string
  end
end
