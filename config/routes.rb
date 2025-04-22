# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  root 'rides#index'

  # Rides and nested trips
  resources :rides do
    get 'my_rides', on: :collection
    resources :trips, only: %i[new create show]
  end

  # Standalone trips actions
  resources :trips, only: [] do
    patch :approve, on: :member
    patch :reject, on: :member
  end

  # Payments
  resources :payments, only: %i[new create]
  post 'checkout', to: 'checkouts#create'
  get 'payment/success', to: 'payments#success', as: 'payment_success'
  get 'payment/cancel', to: 'payments#cancel', as: 'payment_cancel'

  # Stripe onboarding & dashboard
  namespace :stripe do
    post :onboarding
    get :onboarding_return, path: 'return'
    get :onboarding_refresh, path: 'refresh'
    get :dashboard
    get :dashboard_return, path: 'return'
    get :dashboard_refresh, path: 'refresh'
  end

  # Drivers
  resources :drivers, only: %i[new create show]

  # Stripe webhooks
  post 'webhooks/stripe', to: 'webhooks#stripe'

  # Health check
  get 'up' => 'rails/health#show', as: :rails_health_check
end
