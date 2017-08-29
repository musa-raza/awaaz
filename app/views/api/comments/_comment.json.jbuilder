json.extract! comment, :id, :body, :user_id, :song_id, :created_at
json.user_pic comment.user.avatar.url
json.user_name comment.user.username
