# frozen_string_literal: true

require 'sidekiq/web' # require the web UI

Rails.application.routes.draw do
  devise_for :users

  root 'rides#index'
  # Rides
  resources :rides do
    resources :trips, only: %i[new create]
  end
  get 'my_rides', to: 'rides#my_rides', as: :my_rides

  # Trips
  resources :trips, only: %i[show index] do
    member do
      patch 'accept', to: 'trips#accept'
      patch 'reject', to: 'trips#reject'
      patch 'complete', to: 'trips#complete'
    end
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
  resources :drivers, except: %i[index]

  # Stripe webhooks
  post 'webhooks/stripe', to: 'webhooks#stripe'

  # Sidekiq
  mount Sidekiq::Web => '/sidekiq' # access it at http://localhost:3009/sidekiq

  # Health check
  get 'up' => 'rails/health#show', as: :rails_health_check
end
