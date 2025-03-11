# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  resources :rides, only: %i[index show] do
    resources :bookings, only: %i[create destroy]
  end
  resources :drivers, only: %i[new create]
  root 'rides#index'

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get 'up' => 'rails/health#show', as: :rails_health_check
end
