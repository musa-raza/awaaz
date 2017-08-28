json.extract! song, :id, :title, :genre, :user_id, :description, :created_at
json.image_url asset_path(song.image.url)
json.audio_url asset_path(song.audio.url)
json.user_id song.user.id
json.user_avatar_url asset_path(song.user.avatar.url)
json.user_name song.user.username
