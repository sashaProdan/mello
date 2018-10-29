json.merge! @card.attributes
json.comments @card.comments do |comment|
  json.merge! comment.attributes
end
