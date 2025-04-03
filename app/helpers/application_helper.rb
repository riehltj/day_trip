# frozen_string_literal: true

module ApplicationHelper
  def destinations_for_select
    @destinations_for_select ||= begin
      yaml_path = Rails.root.join('config/data/destinations.yml')
      yaml_data = YAML.load_file(yaml_path)
      yaml_data['destinations'].map { |dest| [dest['name'], dest['name']] }
    end
  end
end
