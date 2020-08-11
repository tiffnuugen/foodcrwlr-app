class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.text :text
      t.integer :rating
      t.boolean :edited, default: false
      t.references :user
      t.string :restaurant_id, index: true

      t.timestamps
    end
  end
end
