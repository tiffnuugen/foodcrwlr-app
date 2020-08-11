class RegistrationsController < ApplicationController
  def index
    users = User.all
    render json: {
      users: users
    }
  end

  def create
    user = User.create!(
      username: params['user']['username'],
      password: params['user']['password']
    )
    if user
      session[:user_id] = user.id
      render json: {
        status: :created,
        user: user
      }
    else
      render json: { status: 500 }
    end
  end
end