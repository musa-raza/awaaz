class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :song_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false
      t.timestamps
    end
    add_index :comments, :song_id
    add_index :comments, :user_id
  end
end
