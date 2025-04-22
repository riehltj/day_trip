# frozen_string_literal: true

module ApplicationHelper
  def destinations_for_select
    DestinationsLoader.all.map { |name| [name, name.parameterize] }
  end
end
