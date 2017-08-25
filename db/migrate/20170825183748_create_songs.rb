class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :genre, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
