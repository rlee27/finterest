# API Endpoints

## HTML API

### Root

- `GET /`

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Pins

- `GET /api/notes`
  + Not sure about using this, a user's home feed is based on topics user chooses to follow
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Boards

- `GET /api/users/:id/boards`
- `POST /api/users/:id/boards`
- `GET /api/users/:id/boards/:id`
- `PATCH /api/users/:id/boards/:id`
- `DELETE /api/users/:id/boards/:id`

### Follows

- `GET /api/users/:id/follows`
- `POST /api/users/:id/follows`
- `DELETE /api/users/:id/follows`


### Topics

- `GET /api/topics`
- `POST /api/topics/:topic_name`
