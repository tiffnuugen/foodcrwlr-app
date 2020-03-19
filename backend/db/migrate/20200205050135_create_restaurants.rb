class CreateRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.references :yelp, index: { unique: true }

      t.timestamps
    end
  end
end
