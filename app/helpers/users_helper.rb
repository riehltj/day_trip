# frozen_string_literal: true

module UsersHelper
  def user_avatar(user, options = {})
    size = options[:size] || 40
    classes = options[:class] || 'rounded-full shrink-0'

    if user.avatar.attached?
      image_tag user.avatar.variant(resize_to_limit: [size * 2, size * 2]),
                class: "#{classes} object-cover",
                style: "width: #{size}px; height: #{size}px;"
    else
      content_tag :div, user.first_name[0],
                  class: "#{classes} bg-primary text-primary-content flex items-center justify-center font-medium",
                  style: "width: #{size}px; height: #{size}px;"
    end
  end
end
