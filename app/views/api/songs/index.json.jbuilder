  json.songs do
   @songs.reverse.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title, :genre, :description, :created_at
      json.image_url asset_path(song.image.url)
      json.audio_url asset_path(song.audio.url)
      json.user_id song.user.id
      json.user_avatar_url asset_path(song.user.avatar.url)
      json.user_name song.user.username
      json.comment_ids song.comments.order(created_at: :desc).map(&:id)
      json.like_ids song.likes.map(&:user_id)
    end
  end
end

json.comments do
  @songs.each do |song|
    song.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :user_id, :song_id, :created_at
      end
    end
  end
end
