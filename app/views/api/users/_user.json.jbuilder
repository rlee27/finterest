json.user do
  json.extract! user, :id, :email, :name
end
json.extract! user, :boards

json.pins do
  user.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin', pin: pin
    end
  end
end
