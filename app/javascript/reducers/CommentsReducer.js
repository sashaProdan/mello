export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_CARD_SUCCESS':
      return [...state, ...action.card.comments];
    default:
      return state;
  }
}
