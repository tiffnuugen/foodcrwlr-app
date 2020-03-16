class UsersController < ApplicationController
  before_action :set_user, only: :show

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
    render json: @user, status: 200
  end

  private
  def user_params
    params.require(:user).permit(:username)
  end

  def set_user
    @user = User.find(params[:id])
  end

end