# frozen_string_literal: true

# This is the StripeCheckoutservice
# It creates a asession for the Stripe Service
class StripeCheckoutService
  class << self
    def create_session(ride:, trip:) # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
      user = ride.driver.user
      raise 'Driver is not onboarded with Stripe.' if user.stripe_account_id.blank?

      Stripe::Checkout::Session.create(
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: { name: "Booking a Trip to #{ride.destination}" },
              unit_amount: trip.total_cost_in_cents
            },
            quantity: 1
          },
          {
            price_data: {
              currency: 'usd',
              product_data: { name: 'Transaction Fee' },
              unit_amount: 100
            },
            quantity: 1
          }
        ],
        mode: 'payment',
        payment_intent_data: {
          application_fee_amount: 100,
          transfer_data: { destination: user.stripe_account_id }
        },
        success_url: Rails.application.routes.url_helpers.payment_success_url(host: Rails.application.routes.default_url_options[:host]) + "?trip_id=#{trip.id}", # rubocop:disable Layout/LineLength
        cancel_url: Rails.application.routes.url_helpers.payment_cancel_url,
        metadata: { trip_id: trip.id }
      )
    end
  end
end
