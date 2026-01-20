# frozen_string_literal: true

source 'https://rubygems.org'

ruby '3.3.5'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails', '~> 7.1.5', '>= 7.1.5.1'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'

# Use postgresql as the database for Active Record
gem 'pg', '~> 1.1'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma', '>= 5.0'

# Use JavaScript with ESM import maps [https://github.com/rails/importmap-rails]
gem 'importmap-rails'

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem 'turbo-rails'

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem 'stimulus-rails'

# Use Tailwind CSS [https://github.com/rails/tailwindcss-rails]
gem 'tailwindcss-rails'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
gem 'jbuilder'

# Use Redis adapter to run Action Cable in production
# gem "redis", ">= 4.0.1"

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt", "~> 3.1.7"

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[windows jruby]

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem "image_processing", "~> 1.2"

group :development, :test do
  gem 'debug', platforms: %i[mri windows]
end

group :development do
  gem 'web-console'
  gem 'dotenv-rails'
end

group :test do
  gem 'capybara'
  gem 'selenium-webdriver'
  gem 'rspec-rails', '~> 5.0' # Testing framework
  gem 'shoulda-matchers', '~> 6.0'
  gem 'simplecov', require: false # Test coverage
end

gem 'devise' # Authentication
gem 'rubocop', require: false
gem 'rubocop-rails', require: false
gem 'rubocop-rspec', require: false
gem 'factory_bot_rails', '~> 6.4' # Test data
gem 'faker', '~> 3.4', '>= 3.4.2' # Fake test data
gem 'money-rails', '~> 1.15' # Money handling
gem 'lucide-rails', '~> 0.4.0' # SVG icons
gem "view_component"

# gem "faker_active_record", path: "/Users/tylerriehl/faker_active_record" # Commented out - path doesn't exist

gem "sidekiq", "~> 7.3"
