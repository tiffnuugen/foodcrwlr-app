class SavedRestaurant < ApplicationRecord
  serialize :details, Hash
  belongs_to :user
end
