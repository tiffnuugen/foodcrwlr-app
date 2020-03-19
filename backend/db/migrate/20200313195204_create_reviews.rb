class CreateReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :reviews do |t|
      t.string :text
      t.integer :rating
      t.references :user, foreign_key: true, index: { unique: true }
      t.references :restaurant, foreign_key: true, index: { unique: true }

      t.timestamps
    end
  end
end
