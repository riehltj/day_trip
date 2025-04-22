# frozen_string_literal: true

class StripeController < ApplicationController
  def onboarding # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
    # Create or fetch the connected account
    account = if current_user.stripe_account_id.present?
                Stripe::Account.retrieve(current_user.stripe_account_id)
              else
                acct = Stripe::Account.create({
                                                type: 'express',
                                                country: 'US',
                                                email: current_user.email,
                                                capabilities: {
                                                  transfers: { requested: true }
                                                }
                                              })
                current_user.update!(stripe_account_id: acct.id)
                acct
              end

    # Generate onboarding link
    account_link = Stripe::AccountLink.create({
                                                account: account.id,
                                                refresh_url: onboarding_refresh_url,
                                                return_url: onboarding_return_url,
                                                type: 'account_onboarding'
                                              })
    # Redirect to the Stripe onboarding page
    redirect_to account_link.url, allow_other_host: true
  end

  class StripeController < ApplicationController
    def dashboard
      driver_account = current_user.stripe_account_id

      unless driver_account
        flash[:alert] = 'You need to connect your Stripe account first.'
        redirect_to account_settings_path
        return
      end

      # Create a Stripe Account Link to direct the driver to the Stripe Dashboard
      account_link = Stripe::AccountLink.create({
                                                  account: driver_account,
                                                  refresh_url: onboarding_refresh_url,
                                                  return_url: dashboard_return_url,
                                                  type: 'account_update'
                                                })

      # Redirect driver to their Stripe Dashboard link
      redirect_to account_link.url
    end

    def dashboard_return
      # Redirect back to your app or a confirmation page after Stripe updates are done
      flash[:notice] = 'You are now back from your Stripe dashboard.'
      redirect_to account_settings_path
    end

    def dashboard_refresh
      flash[:alert] = 'Please finish updating your Stripe account.'
      redirect_to account_settings_path
    end
  end

  def onboarding_return
    flash[:notice] = 'Your Stripe account is connected.'
    redirect_to new_driver_path
  end

  def onboarding_refresh
    flash[:alert] = 'Please finish connecting your Stripe account.'
    redirect_to new_driver_path
  end
end
