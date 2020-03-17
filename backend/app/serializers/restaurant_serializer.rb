class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :reviews
  has_many :users
end
