@songs.each do |song|
  json.set! song.id do
    json.extract! song, :id, :title, :genre
    json.image_url asset_path(song.image.url)
    json.audio_url asset_path(song.audio.url)
    json.user do
      json.avatar_url asset_path(song.user.avatar.url)
      json.user song.user.username
    end
  end
end
