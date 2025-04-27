# frozen_string_literal: true

module DriversHelper
  def driver_social_links(driver)
    DRIVER::SOCIALS.map do |platform, base_url|
      handle = driver.send(platform)
      next if handle.blank?

      url = handle.start_with?('http') ? handle : "#{base_url}#{handle.gsub('@', '')}"
      { url: url, icon: platform.to_s }
    end.compact
  end
end
