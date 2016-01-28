class Api::SigningsController < ApplicationController
  def index
    signings = Signing.all
    render json: {signings: signings}
  end

  def create
    new_signing = Signing.create( signing_params )
    render json: new_signing
  end

  private

  def delete
  end

  def signing_params
    params.require(:signing).permit(:first_name, :last_name, :email, :address, :city, :state, :zip)
  end
end
