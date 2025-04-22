# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from User::NotAuthorized, with: :user_not_authorized

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[first_name last_name date_of_birth gender avatar])
    devise_parameter_sanitizer.permit(:account_update,
                                      keys: %i[first_name last_name date_of_birth gender avatar])
  end

  private

  def user_not_authorized
    render file: Rails.public_path.join('403.html'), status: :forbidden, layout: false
  end
end
