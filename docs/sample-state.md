```js
{
  entities: {
    users: {
      1: {
        username: "musaraza",
        avatar: "/assets/avatar.png",
        bio: "Upcoming artist from Pakistan",
        followee_ids: [3, 4, 5],
        following_ids: [3, 4, 5],
        song_ids: [3],
      },
      2: {
        name: "areebaqazi",
        avatar: "/assets/some_image_on_aws.png",
        bio: "Just a small town girl",
        followee_ids: [5, 1, 7],
        following_ids: [1, 7, 8],
        song_ids: [4],
      },
      //... more users
    },
    songs: {
      3: {
        id: 3
        title: "Dil Dil Pakistan",
        genre: "Pop",
        song_url: "some_aws_link",
        song_art: "some_aws_link",
        user_id: 1,
        comment_ids: [2, 5, 7],
      ,
      },
      4: {
        id: 4
        title: "How We Do",
        genre: "Hip-Hop",
        song_url: "some_aws_link",
        song_art: "some_aws_link",
        user_id: 2,
        comment_ids: [4, 8, 9],
      },
      // ... more songs
    },
    comments: {
      1: {
        id: 1
        body: "What a song",
        user_id: 1,
        song_id: 1,
      },
      2: {
        id: 2
        body: "Love your work!",
        user_id: 1,
        song_id: 2,
      },
      //... more comments
    }
  }
  session: {
  currentUser: {
    id: 1,
    username: "musaraza"
  },
    errors: []
  }
}
```
