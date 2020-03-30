class Restaurant < ApplicationRecord
  validates :name, :yelp_id, presence: true, uniqueness: true
  has_many :reviews, primary_key: 'yelp_id'
  has_many :users, through: :reviews
end
