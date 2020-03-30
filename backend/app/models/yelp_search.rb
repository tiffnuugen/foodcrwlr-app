class YelpSearch < ApplicationRecord
  validates :term, :location, presence: true, uniqueness: true
end