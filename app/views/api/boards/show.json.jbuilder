json.merge! @board.attributes
json.lists @board.lists do |list|
  json.merge! list.attributes

  json.cards list.cards do |card|
    json.merge! card.attributes
    json.board_id card.board_id
  end
end
