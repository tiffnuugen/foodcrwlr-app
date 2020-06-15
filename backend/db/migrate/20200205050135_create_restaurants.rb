class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.boolean :saved, default: false
      t.string :yelp_id, index: true

      t.timestamps
    end
  end
end
