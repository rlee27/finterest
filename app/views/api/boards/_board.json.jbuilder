json.extract! board, :id, :title, :author_id,
  :topic_id, :description, :cover_id

json.pin_ids board.pins.pluck(:id)
