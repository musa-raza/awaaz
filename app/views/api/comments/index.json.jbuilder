@comments.each do |comment|
 json.set! comment.id do
   json.extract! comment, :id, :body, :user_id, :song_id, :created_at
   json.user_name comment.user.username
   json.song_title comment.song.title
 end
end
