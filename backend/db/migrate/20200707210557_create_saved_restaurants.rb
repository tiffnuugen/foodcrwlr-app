class CreateSavedRestaurants < ActiveRecord::Migration[6.0]
  def change
    create_table :saved_restaurants do |t|
      t.text :details
      t.references :user

      t.timestamps
    end
  end
end
