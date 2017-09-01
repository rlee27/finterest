json.user do
  json.extract! user, :id, :email, :name
  json.board_ids user.boards.pluck(:id)
  json.pin_ids user.pins.pluck(:id).concat(user.pinned.pluck(:pin_id)).uniq
  json.image_url user.image.url
  json.follow_ids user.follows.pluck(followable_id)
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
      json.partial! 'api/pins/pin', pin: pin
    end
  end
  user.pinned.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end
