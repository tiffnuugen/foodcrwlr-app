class RestaurantsController < ApplicationController
  before_action :set_restaurant, only: [:show, :destroy, :update]

  def index
    restaurants = Restaurant.all
    render json: restaurants, status: 200
  end

  def show
    render json: @restaurant, status: 200
  end
  
  def create
    restaurant = Restaurant.create(restaurant_params)
    render json: restaurant, status: 201
  end

  private
  def restaurant_params
    params.require(:restaurant).permit(:name, :yelp_id)
  end

  def set_restaurant
    @restaurant = Restaurant.find_by(yelp_id: params[:id])
  end
  
end