class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :text
      t.integer :rating
      t.references :user
      t.string :restaurant_id, index: true

      t.timestamps
    end
  end
end
