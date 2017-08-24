json.set! @user.id do
  json.partial! 'api/users/user', user: @user
  json.set! board_ids do
    json.array! @user.boards
  end
end
