json.extract! pin, :id, :pin_url, :board_id, :author_id,
  :topic_id

if pin.fins.where(board_id: pin.board_id)[0]
  pin_info = pin.fins.where(board_id: pin.board_id)[0].pin_description
else
  pin_info = pin.description
end

json.description pin_info

json.image_url pin.image.url
