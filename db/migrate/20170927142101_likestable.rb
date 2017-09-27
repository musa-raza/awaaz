class Likestable < ActiveRecord::Migration[5.1]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :song_id, null: false
      t.timestamps
    end
  end
end
