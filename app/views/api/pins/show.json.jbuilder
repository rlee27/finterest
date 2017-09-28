json.partial! '/api/pins/pin', pin: @pin

json.author_avatar @author.avatar.url
json.author_name @author.name
