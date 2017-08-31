pin_list = @board.pins.pluck(:id).concat(@board.fins.pluck(:pin_id)).uniq

json.board do
  json.partial! '/api/boards/board', board: @board
end

json.pins do
  pin_list.each do |id|
    json.set! id do
      json.partial! 'api/pins/pin', pin: Pin.find(id)
    end
  end
end
