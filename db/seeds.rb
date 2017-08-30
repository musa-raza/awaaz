# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  User.destroy_all

  User.create!(username: 'Guest', password: '123456')
 user1 = User.create!(username: "alpha", password: '123456')
 user2 = User.create!(username: "bravo", password: '123456')

  Song.destroy_all


song1 = Song.create!(
  title: "cow moo",
  genre: "animal",
  description: "nice",
  user_id: user1.id,
  audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/Cow+moo+sound+effect.mp3"
)


  song2 = Song.create!(title: "cat meow",
   genre: "animal",
   description: "nice",
   user_id: user1.id,
   audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/Cat+Meowing+-+Sound+Effect+-+Download.mp3"
   )
#
#
  song3 = Song.create!(title: "dog barking",
  genre: "animal",
  description: "nice",
  user_id: user2.id,
  audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/Large+Dog+Barking+-+Sound+Effect.mp3"
  )
