board_ids = []

@user.boards.each do |board|
  board_ids << board.id
end

json.set! @user.id do
  json.partial! 'api/users/user', user: @user
  json.boardIds board_ids
end
