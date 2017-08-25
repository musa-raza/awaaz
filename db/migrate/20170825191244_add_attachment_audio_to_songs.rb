class AddAttachmentAudioToSongs < ActiveRecord::Migration[5.1]
  def self.up
    change_table :songs do |t|
      t.attachment :audio
    end
  end

  def self.down
    remove_attachment :songs, :audio
  end
end
