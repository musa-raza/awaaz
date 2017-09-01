# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


  User.destroy_all

  User.create!(username: 'Guest', password: 'password')

  junoon = User.create!(
  username: "Junoon",
  password: 'password',
  avatar: "https://s3.us-east-2.amazonaws.com/awaaz-dev/junoon+avatar.jpg"
  )

  kygo = User.create!(
  username: "Kygo",
  password: 'password',
  avatar: "https://s3.us-east-2.amazonaws.com/awaaz-dev/kygo+avatar.png"
  )

  klangkarusell = User.create!(
  username: "Klangkarussell",
  password: 'password',
  avatar: "https://s3.us-east-2.amazonaws.com/awaaz-dev/klangkarussell+avatar.jpg"
  )

  gryffin = User.create!(
  username: "Gryffin",
  password: 'password',
  avatar: "https://s3.us-east-2.amazonaws.com/awaaz-dev/gryffin+avatar.jpg"
  )

  matoma = User.create!(
  username: "Matoma",
  password: 'password',
  avatar: "https://s3.us-east-2.amazonaws.com/awaaz-dev/matoma+avatar.jpg"
  )

  m83 = User.create!(
  username: "M83",
  password: 'password',
  avatar: "https://s3.us-east-2.amazonaws.com/awaaz-dev/m83+avatar.jpg")

  klingande = User.create!(
  username: "Klingande",
  password: 'password',
  avatar: "https://s3.us-east-2.amazonaws.com/awaaz-dev/klingande+avatar.jpg"
  )


  Song.destroy_all


 song1 = Song.create!(
  title: "Lal Meri Pat",
  genre: "Sufi Rock",
  description: "Fusion of sufi and rock music",
  user_id: junoon.id,
  audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/junoon+lal+meri.mp3",
  image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/junoon-logo-primary.jpg"
)


song2 = Song.create!(
 title: "Sayonee",
 genre: "Sufi Rock",
 description: "Fusion of sufi and rock music",
 user_id: junoon.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/junoon+sayonee.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/junoon-logo-primary.jpg"
)

song3 = Song.create!(
 title: "Often",
 genre: "Tropical House",
 description: "Remix of Often by the Weeknd",
 user_id: kygo.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/often+kygo.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/The-Weeknd-Often-Kygo-Remix.jpg"
)

song4 = Song.create!(
 title: "No Diggity",
 genre: "Tropical House",
 description: "Remix feat. Ed Sheeran",
 user_id: kygo.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/no+diggity+kygo.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/kygo-no-diggity.jpg"
)

song5 =  Song.create!(
 title: "Midnight Life",
 genre: "Deep House",
 description: "Remix feat. Kanye West",
 user_id: m83.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/m83+midnight+life.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/m83.jpg"
)

song6 =  Song.create!(
 title: "Sonnentanz",
 genre: "Saxophone Melody",
 description: "Saxophone for days",
 user_id: klangkarusell.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/sonnentanz+klangkarussell.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/klangkarusell.jpg"
)

song7 =  Song.create!(
 title: "Sonnentanz",
 genre: "Deep House",
 description: "Saxophone for days",
 user_id: klangkarusell.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/sonnentanz+klangkarussell.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/netzwerk.jpg"
)

song8 =  Song.create!(
 title: "Old Thing Back",
 genre: "Hip House",
 description: "Remix feat. Notorious BIG",
 user_id: matoma.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/matoma+old+thing+back.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/matoma+.jpg"
)

song9 =  Song.create!(
 title: "Yeah x Mo Money",
 genre: "Hip House",
 description: "Remix feat. Notorious BIG",
 user_id: matoma.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/matoma+yeah.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/yeah+matoma+mo+money.jpg"
)

song10 = Song.create!(
 title: "Jubel",
 genre: "Tropical house",
 description: "Melodic House",
 user_id: klingande.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/jubel+klingande.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/klingande.jpg"
)

song11 = Song.create!(
 title: "Punga",
 genre: "House",
 description: "Saxophone Vibes",
 user_id: klingande.id,
 audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/jubel+klingande.mp3",
 image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/punga+jpg.jpg"
)

song12 = Song.create!(
title: "Burn",
genre: "Deep House",
description: "Remix feat. Ellie Goulding",
user_id: gryffin.id,
audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/Burn+gryffin.mp3",
image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/burn+cover.jpg"
)

song13 = Song.create!(
title: "First Time",
genre: "Deep House",
description: "Remix feat. Ellie Goulding",
user_id: gryffin.id,
audio: "https://s3.us-east-2.amazonaws.com/awaaz-dev/First+time+gryffin.mp3",
image: "https://s3.us-east-2.amazonaws.com/awaaz-dev/first+time+.jpg"
)
