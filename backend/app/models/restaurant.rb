class Restaurant < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  validates :yelp_id, presence: true
  validates :yelp_id, uniqueness: true
  has_many :users, through: :reviews
end
