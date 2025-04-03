# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users

  resources :rides do
    get 'my_rides', on: :collection
    resources :trips, only: %i[new create show]
  end
  post 'checkout', to: 'checkouts#create'
  get 'payment/success', to: 'payments#success', as: 'payment_success'
  get 'payment/cancel', to: 'payments#cancel', as: 'payment_cancel'
  resources :trips, only: %i[index]
  resources :payments, only: %i[new create]
  resources :drivers, only: %i[new create show]

  post 'webhooks/stripe', to: 'webhooks#stripe'

  root 'rides#index'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check
end
