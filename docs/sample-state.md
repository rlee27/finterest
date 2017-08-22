```js
{
  entities: {
    users: {
      id: 1
      email: "guest@example.com",
      name: "Guest"
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
      pinIds: [1, 4, 7]
    }

    topics: {
      1: {
        name: "Animals",
        image_url: "http://www.imgur.com/animalsoftheworld"
      }
    }

    follows: {
      // need to edit this after figuring out how to make this polymorphic
      1: {
        user_id: 1,
        following_id: 2,
        board_id: 1,
        topic_id: 1,
      }
    }
  }

  session: {
    currentUser: {
      id: 1
      email: "guest@example.com",
      name: "Guest"
    }
    errors: []
  }

  forms: {
    // Maybe change this to ui? with a currentUser
    signup: {errors: []},
    login: {errors: []},
  }

  topicFilters: [1, 9, 10]
}
