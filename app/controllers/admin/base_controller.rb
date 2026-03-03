# frozen_string_literal: true

module Admin
  class BaseController < ApplicationController
    before_action :authenticate_user!
    before_action :require_admin!

    private

    def require_admin!
      return if current_user.email == 'support@daytrip.live'

      render file: Rails.public_path.join('403.html'), status: :forbidden, layout: false
    end
  end
end
