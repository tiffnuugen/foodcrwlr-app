class SavedRestaurant < ApplicationRecord
  serialize :details
  belongs_to :user
end
