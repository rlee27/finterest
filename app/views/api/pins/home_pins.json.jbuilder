# topic_pins = []
#
# @user.follows.each do |follow|
#   topic_pins.concat(Pin.all.where(topic_id: follow.followable_id))
# end
#
# topic_pins = topic_pins.reject { |pin| pin.author_id == @user.id }

topic_pins = []

all_topics = Topic.find_by(name: "Everything")

if @user.follows.includes(all_topics)
  topic_pins.concat(Pin.all)
else
  @user.follows.each do |follow|
    topic_pins.concat(Pin.all.where(topic_id: follow.followable_id))
  end
end

topic_pins = topic_pins.reject { |pin| pin.author_id == @user.id }

json.pins do
  topic_pins.each do |pin|
    json.set! pin.id do
      json.extract! pin, :id, :pin_url, :board_id, :author_id, :topic_id
      json.image_url pin.image.url
    end
  end
end
