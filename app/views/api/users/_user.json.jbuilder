json.extract! user, :id, :username, :bio
json.avatar_url asset_path(user.avatar.url)
