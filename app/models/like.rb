class Like < ApplicationRecord
  validates :user, :song, presence: true

  belongs_to :user

  belongs_to :song

  validates :user, uniqueness: { scope: :song }
end
