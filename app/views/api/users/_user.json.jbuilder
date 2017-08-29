json.user do
  json.extract! user, :id, :email, :name
end
json.extract! user, :boards, :pins
