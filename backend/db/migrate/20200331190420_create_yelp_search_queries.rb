class CreateYelpSearchQueries < ActiveRecord::Migration[6.0]
  def change
    create_table :yelp_search_queries do |t|
      t.string :term
      t.string :location

      t.timestamps
    end
  end
end
