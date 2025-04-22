# frozen_string_literal: true

# This loads the destinations from a YAML file located at config/data/destinations.yml
# and makes them available through the `DestinationsLoader` module.
# Make updates tot he YAML file to add or remove destinations.
module DestinationsLoader
  class << self
    def all
      @all ||= YAML.load_file(Rails.root.join('config/data/destinations.yml'))['destinations']
    end
  end
end
