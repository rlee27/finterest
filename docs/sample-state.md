```js
{
  currentUser: {
    id: 1
    username: "guestuser",
    name: "Guest"
  }

  forms: {
    signup: {errors: []},
    login: {errors: []},
  }

  pins: {
    1: {
      description: "A little kitten",
      image_url: "http://www.imgur.com/kitten1",
      pin_origin: "http://www.imgur.com/kitten1",
      author_id: 1,
      board_id: 1,
    }
  }

  boards: {
    1: {
      title: "Cats",
      author_id: 1,
      collaborator_id: 2,
      category_id: 1,
      cover_id: 1,
      description: "Breeds I'm thinking about adopting",
    }
  }

  topics: {
    1: {
      name: "Animals",
      image_url: "http://www.imgur.com/animalsoftheworld"
    }
  }

  follows: {
    1: {
      user_id: 1,
      following_id: 2,
      board_id: 1,
      topic_id: 1,
    }
  }

  topicFilters: [1, 9 , 10]
}
