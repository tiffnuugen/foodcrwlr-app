class SavedRestaurantSerializer < ActiveModel::Serializer
  attributes :id, :details, :user_id
  belongs_to :user
end
