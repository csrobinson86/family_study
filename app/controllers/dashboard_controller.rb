class DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    # Add any dashboard-specific logic here
  end
end
