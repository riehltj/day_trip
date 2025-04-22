# frozen_string_literal: true

class CheckoutsController < ApplicationController
  def create # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    @ride = Ride.find(params[:ride_id])
    @trip = Trip.find(params[:trip_id])
    user = @ride.driver.user

    if user.stripe_account_id.blank?
      render json: { error: 'Driver is not onboarded with Stripe.' }, status: :unprocessable_entity
      return
    end

    # Create Stripe Checkout Session for a destination charge
    session = Stripe::Checkout::Session
              .create({
                        payment_method_types: ['card'],
                        line_items: [{
                          price_data: {
                            currency: 'usd',
                            product_data: {
                              name: "Booking a Trip to #{@ride.destination}"
                            },
                            unit_amount: @trip.total_cost_in_cents
                          },
                          quantity: 1
                        }, {
                          price_data: {
                            currency: 'usd',
                            product_data: {
                              name: 'Transaction Fee'
                            },
                            unit_amount: 100
                          },
                          quantity: 1
                        }],
                        mode: 'payment',
                        payment_intent_data: {
                          application_fee_amount: 100,
                          transfer_data: {
                            destination: user.stripe_account_id
                          }
                        },
                        success_url: "#{success_url}?session_id={CHECKOUT_SESSION_ID}&trip_id=#{@trip.id}",
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
