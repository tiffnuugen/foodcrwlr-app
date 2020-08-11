class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :reviews
  has_many :restaurants
  has_many :saved_restaurants
end
