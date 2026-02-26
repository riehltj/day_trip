# frozen_string_literal: true

module ApplicationHelper
  def destinations_for_select
    DestinationsLoader.all.map { |name| [name, name.parameterize] }
  end

  def format_ride_cost(money)
    money.to_i.zero? ? 'Free' : humanized_money_with_symbol(money)
  end
end
