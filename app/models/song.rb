class Song < ApplicationRecord

  validates :title, :genre, :user, :description, presence: true


  belongs_to :user


  has_attached_file :image, default_url: "https://s3.us-east-2.amazonaws.com/awaaz-dev/default-audio-art.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  has_attached_file :audio,  default_url: "app/assets/tracks/promiscuous-girl.mp3"
 validates_attachment_content_type :track, :content_type => /\Aaudio\/.*\z/

end
