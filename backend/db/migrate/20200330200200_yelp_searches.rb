class YelpSearches < ActiveRecord::Migration[6.0]
  def change
    create_table :yelp_searches do |t|
      t.string :term
      t.string :location

      t.timestamps
    end
  end
end
