# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create!(email: "password", password: "password", name: "Main Test Dummy")
user2 = User.create!(email: "example@example.com", password: "password", name: "Example Doe")
user3 = User.create!(email: "john@example.com", password: "password", name: "John Smith")
user4 = User.create!(email: "jane@example.com", password: "password", name: "Jane Doe")

Board.destroy_all
board1 = Board.create!(title: "ExampleBoard1", author_id: user1.id)
board2 = Board.create!(title: "ExampleBoard1", author_id: user2.id)
board3 = Board.create!(title: "ExampleBoard1", author_id: user3.id)
