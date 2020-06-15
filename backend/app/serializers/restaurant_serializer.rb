class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :saved, :yelp_id
  has_many :reviews
  has_many :users
end
