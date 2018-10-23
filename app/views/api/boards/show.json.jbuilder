json.merge! @board.attributes
json.lists @board.lists do |list|
  json.merge! list.attributes

  json.cards list.cards do |card|
    json.merge! card.attributes
  end
end


=begin
{
  "id": 1,
  "title": "Web dev",
  "created_at": "2017-10-04T05:57:02.777Z",
  "updated_at": "2017-10-04T05:57:02.777Z",
  "lists": [
    {
      "id": 3,
      "title": "CSS",
      "board_id": 1,
      "created_at": "2017-10-04T06:53:39.302Z",
      "updated_at": "2017-10-04T06:53:39.302Z",
      "position": 65535.0,
      "cards": [
        {
          "id": 7,
          "title": "1",
          "due_date": null,
          "labels": [
            "red",
            "purple"
          ],
          "description": "Selectors",
          "list_id": 3,
          "board_id": 1,
          "position": 65535.0,
          "comments_count": 0
        }
      ]
    }
  ]
}
=end
