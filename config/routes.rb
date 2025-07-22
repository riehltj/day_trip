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

  # Drivers
  resources :drivers, except: %i[index] do
    resources :reviews, only: %i[new create index]
  end

  # Sidekiq
  mount Sidekiq::Web => '/sidekiq' # access it at http://localhost:3009/sidekiq

  # Health check
  get 'up' => 'rails/health#show', as: :rails_health_check
end
