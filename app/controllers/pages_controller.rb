# frozen_string_literal: true

class PagesController < ApplicationController
  skip_before_action :authenticate_user!, raise: false

  def how_it_works
  end

  def about
  end
end
