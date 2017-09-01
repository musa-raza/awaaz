# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  User.destroy_all

  User.create!(username: 'Guest', password: '123456')
  junoon = User.create!(username: "Junoon", password: 'password')
  kygo = User.create!(username: "Kygo", password: 'password')
  klangkarusell = User.create!(username: "Klangkarussell", password: 'password')
  gryffin = User.create!(username: "Gryffin", password: 'password')
  matoma = User.create!(username: "Matoma", password: 'password')
  m83 = User.create!(username: "M83", password: 'password')
  klingande = User.create!(username: "Klingande", password: 'password')
  

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
