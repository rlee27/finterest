json.user do
  json.extract! user, :id, :email, :name
  json.board_ids user.boards.pluck(:id)
  json.pin_ids user.pins.pluck(:id)
end

json.boards do
  user.boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board', board: board
    end
  end
end


json.pins do
  user.pins.each do |pin|
    json.set! pin.id do
      pin.fins.where(user_id: user.id)
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end
