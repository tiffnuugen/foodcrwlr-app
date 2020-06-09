class Review < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :restaurant, optional: true, primary_key: 'yelp_id'
  after_destroy :destroy_orphaned_restaurant

  def destroy_orphaned_restaurant
    restaurant.destroy if restaurant.reviews.empty?
  end
end
