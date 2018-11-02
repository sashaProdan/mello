json.merge! @card.attributes
json.comments_count @card.comments_count
json.board_id @card.board_id

json.comments @card.comments.sort_by(&:created_at).reverse do |comment|
  json.merge! comment.attributes
end
