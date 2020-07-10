class SavedRestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :yelp_id, :user_id
  belongs_to :user
end
