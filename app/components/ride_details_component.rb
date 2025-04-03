# frozen_string_literal: true

# This is a details component for displaying ride information.
# It is used in the booking show page to display details about the ride.
# The component takes a title, info, and an optional link.
# The title and info are displayed in a card format, and the link is optional.
#
# Example usage:
#
#   <%= render(RideDetailsComponent.new(title: "Ride Title", info: "Ride Info", link: "https://example.com")) %>
#
class RideDetailsComponent < ViewComponent::Base
  def initialize(title:, info:, link: nil)
    super()
    @info = info
    @title = title
    @link = link
  end
end
