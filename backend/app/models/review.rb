class Review < ApplicationRecord
  belongs_to :user
  belongs_to :restaurant, primary_key: 'yelp_id'
  after_destroy :destroy_orphaned_restaurant

  def destroy_orphaned_restaurant
    restaurant.destroy if restaurant.reviews.empty?
  end
end
