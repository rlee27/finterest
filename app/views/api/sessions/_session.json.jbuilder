json.extract! user, :id, :name, :email

json.board_ids user.boards.pluck(:id)
