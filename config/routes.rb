# frozen_string_literal: true

require 'sidekiq/web' # require the web UI

Rails.application.routes.draw do
  devise_for :users

  root 'rides#index'
  # Rides
  get 'my-rides', to: 'rides#my_rides', as: :my_rides
  resources :rides do
    # Create reservations from Rides
    resources :reservations, only: %i[new create]
  end

  # Reservations (reservations)
  resources :reservations, only: %i[show index destroy] do
    member do
      patch 'accept', to: 'reservations#accept'
      patch 'reject', to: 'reservations#reject'
      patch 'complete', to: 'reservations#complete'
    end
  end

  # Drivers
  resources :drivers, except: %i[index] do
    resources :reviews, only: %i[new create index]
  end

  # Sidekiq
  mount Sidekiq::Web => '/sidekiq' # access it at http://localhost:3009/sidekiq

  # Health check
  get 'up' => 'rails/health#show', as: :rails_health_check
end
