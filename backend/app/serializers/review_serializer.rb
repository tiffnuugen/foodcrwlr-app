class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :rating, :user_id
  belongs_to :user
  # belongs_to :restaurant
end
