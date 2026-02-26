# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  def update
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)

    if update_resource(resource, account_update_params)
      bypass_sign_in resource, scope: resource_name
      set_flash_message :notice, :updated
      redirect_to after_update_path_for(resource)
    else
      clean_up_passwords resource
      set_minimum_password_length
      render :edit, status: :unprocessable_entity
    end
  end

  protected

  def after_update_path_for(_resource)
    edit_user_registration_path
  end
end
