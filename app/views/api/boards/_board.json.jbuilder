pin_id_list = board.pins.pluck(:id).concat(board.fins.pluck(:pin_id)).uniq

json.board do
  json.extract! board, :id, :title, :author_id,
    :topic_id, :description, :cover_id

  json.pin_ids pin_id_list
end

json.pins do
  pin_id_list.each do |id|
    json.set! id do
      json.partial! 'api/pins/pin', pin: Pin.find(id)
    end
  end
end
