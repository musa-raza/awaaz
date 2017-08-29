json.extract! song, :id, :title, :genre, :user_id, :description, :created_at
json.image_url asset_path(song.image.url)
json.audio_url asset_path(song.audio.url)
json.user_id song.user.id
json.user_avatar_url asset_path(song.user.avatar.url)
json.user_name song.user.username
json.comment_ids @song.comments.order(created_at: :desc).map(&:id)

json.comments do
  @song.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id, :song_id, :created_at
      json.user_pic comment.user.avatar.url
      json.user_name comment.user.username
    end
  end
end



# comment_ds = [1,2,3]
# comments = commend_ids.map((id) => {
#   <li>this.props.comments[id].body</li>
#   } )
#
#   { comments }
