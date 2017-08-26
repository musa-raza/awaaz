# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  User.destroy_all

  User.create!(username: 'Guest', password: '123456')
 user1 = User.create!(username: "mo", password: '123456')

  Song.destroy_all


  Song.create!(title: "pgirl", genre: "pop", description: "nice", user_id: user1.id, audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/promiscuous-girl.mp3")
