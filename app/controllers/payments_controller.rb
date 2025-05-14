# frozen_string_literal: true

class PaymentsController < ApplicationController
  before_action :set_trip
  def new
    @ride = @trip.ride

    # Create Stripe Checkout Session
    session = StripeCheckoutService.create_session(ride: @ride, trip: @trip)
    redirect_to session.url, allow_other_host: true
  end

  def create # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    customer = Stripe::Customer.create({
                                         email: params[:stripeEmail],
                                         source: params[:stripeToken]
                                       })

    # Use the actual trip amount from your trip
    Stripe::Charge.create({
                            customer: customer.id,
                            amount: @trip.total_cost_in_cents, # Use actual trip amount
                            description: "Day Trip to #{@trip.ride.destination} (#{@trip.number_of_seats} seats)",
                            currency: 'usd',
                            metadata: {
                              trip_id: @trip.id,
                              ride_id: @trip.ride_id,
                              user_id: current_user.id
                            }
                          })

    # Update payment status here, right after successful charge
    @trip.update!(payment_status: 'paid')

    # Redirect to success page
    redirect_to success_payment_path(trip_id: @trip.id)
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_payment_path(trip_id: @trip.id)
  end

  def success
    @trip.update!(payment_status: 'paid')
    redirect_to trip_path(@trip, ride_id: @trip.ride_id), notice: 'Payment was successful.'
  rescue StandardError => e
    flash[:error] = "An error occurred: #{e.message}"
    redirect_to new_payment_path(trip_id: @trip.id)
  end

  def cancel
    @trip.update!(payment_status: 'canceled')
    redirect_to new_payment_path, notice: 'Payment was canceled.'
  end

  private

  def set_trip
    @trip = Trip.find(params[:trip_id])
  end
end
