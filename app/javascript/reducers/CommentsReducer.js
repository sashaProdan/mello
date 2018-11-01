export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CARD_SUCCESS':
      const excludedComments = state.filter(comment => comment.card_id !== action.card.id);

      return [...excludedComments, ...action.card.comments];
    case 'CREATE_COMMENT_SUCCESS':
      const newComment = action.comment;
      newComment.id = Number(newComment.id);

      return [...state, newComment];
    default:
      return state;
  }
}
