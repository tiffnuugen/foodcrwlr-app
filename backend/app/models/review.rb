class Review < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :restaurant, optional: true, primary_key: 'yelp_id'
end
