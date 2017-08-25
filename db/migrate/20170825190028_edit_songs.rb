class EditSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :description, :text
    add_index :songs, :user_id
  end
end
