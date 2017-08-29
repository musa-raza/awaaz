class Comment < ApplicationRecord

  validates :user, :song, :body, presence: true

  belongs_to :user

  belongs_to :song

  
end
