# frozen_string_literal: true

class PaymentsController < ApplicationController
  before_action :set_booking
  def new; end

  def create # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    customer = Stripe::Customer.create({
                                         email: params[:stripeEmail],
                                         source: params[:stripeToken]
                                       })

    # Use the actual booking amount from your booking
    Stripe::Charge.create({
                            customer: customer.id,
                            amount: @booking.total_cost_in_cents, # Use actual booking amount
                            description: "Day Trip to #{@booking.ride.destination} (#{@booking.number_of_seats} seats)",
                            currency: 'usd',
                            metadata: {
                              booking_id: @booking.id,
                              ride_id: @booking.ride_id,
                              user_id: current_user.id
                            }
                          })

    # Update payment status here, right after successful charge
    @booking.update!(payment_status: 'paid')

    # Redirect to success page
    redirect_to success_payment_path(booking_id: @booking.id)
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_payment_path(booking_id: @booking.id)
  end

  def success
    @booking.update!(payment_status: 'paid')
    redirect_to ride_booking_path(@booking, ride_id: @booking.ride_id), notice: 'Payment was successful.'
  rescue StandardError => e
    flash[:error] = "An error occurred: #{e.message}"
    redirect_to new_payment_path(booking_id: @booking.id)
  end

  def cancel
    @booking.update!(payment_status: 'canceled')
    redirect_to new_payment_path, notice: 'Payment was canceled.'
  end

  private

  def set_booking
    @booking = Booking.find(params[:booking_id])
  end
end
