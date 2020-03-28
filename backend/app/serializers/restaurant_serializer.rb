class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :yelp_id
  has_many :reviews
  has_many :users
end
