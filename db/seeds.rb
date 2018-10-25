# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Board.destroy_all

now = Time.zone.now

board = Board.create({
  title: "My Todos"
})
board.save

list1 = board.lists.create({
  title: "List 1"
})
list1.save

list2 = board.lists.create({
  title: "List 2"
})
list2.save

list1.cards.create({
  title: "Card 1",
  description: "This is a description",
  labels: ['yellow', 'red'],
  due_date: 2.days.ago
}).save
list1.cards.create({
  title: "Card 2",
  description: "Welcome to Capstone",
  labels: ['purple', 'yellow', 'red', 'blue']
}).save

list2.cards.create({
  title: "Card 1",
  description: 'Yet another card',
  due_date: now
}).save
list2.cards.create({
  title: "Card 2",
  labels: ['blue', 'red', 'green']
}).save
list2.cards.create({
  title: "Card 3",
  description: 'teamToo()',
  labels: ['blue', 'purple'],
  due_date: now + 5.day
}).save
