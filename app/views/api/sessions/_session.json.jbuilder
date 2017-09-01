json.extract! user, :id, :name, :email

json.avatar_url user.avatar.url

json.board_ids user.boards.pluck(:id)
