class SavedRestaurantsController < ApplicationController
  before_action :set_saved_restaurant, only: [:show, :destroy]

  def index
    saved_restaurants = SavedRestaurant.all
    render json: saved_restaurants, status: 200
  end

  def show
    render json: @saved_restaurant, status: 200
  end
  
  def create
    saved_restaurant = SavedRestaurant.create(saved_restaurant_params)
    render json: saved_restaurant, status: 201
  end

  def destroy
    @saved_restaurant.destroy
    render json: {message: "restaurant unsaved", id: @saved_restaurant.id}
  end

  private
  def saved_restaurant_params
    params.require(:saved_restaurant).permit({
      details: [:id, :image_url, :name, :price, :rating, :display_phone, location: {display_address: []}, categories: [:alias, :title]]
    }, :user_id)
  end


  def set_saved_restaurant
    @saved_restaurant = SavedRestaurant.find(params[:id])
  end
end
