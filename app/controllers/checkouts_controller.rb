# frozen_string_literal: true

class CheckoutsController < ApplicationController
  def create # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    @ride = Ride.find(params[:ride_id])
    @trip = Trip.find(params[:trip_id])

    Rails.logger.debug { ">>> TOTAL COST?: #{@trip.total_cost_in_cents}" }

    # Create a Stripe checkout session
    session =
      Stripe::Checkout::Session.create({
                                         payment_method_types: ['card'],
                                         line_items: [{
                                           price_data: {
                                             currency: 'usd',
                                             product_data: {
                                               name: "Trip booking for #{@ride.destination}"
                                             },
                                             unit_amount: @trip.total_cost_in_cents
                                           },
                                           quantity: 1
                                         }],
                                         mode: 'payment',
                                         success_url:
                                          "#{success_url}?session_id={CHECKOUT_SESSION_ID}&trip_id=#{@trip.id}",
                                         cancel_url: cancel_url,
                                         metadata: {
                                           trip_id: @trip.id
                                         }
                                       })

    render json: { id: session.id }
  end

  private

  def success_url
    payment_success_url
  end

  def cancel_url
    payment_cancel_url
  end
end
