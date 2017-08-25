json.extract! song, :id, :title, :genre, :user_id, :description
json.image_url asset_path(song.image.url)
json.audio_url asset_path(song.audio.url)

json.user do
  json.avatar_url asset_path(song.user.avatar.url)
  json.artist song.user.username
end
