export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      let excludedCards = state.filter(card => card.board_id !== action.board.id);
      const newListWithoutCards = action.board.lists.map( list => {
        const { cards, ...noCards } = list;
        return cards;
      });

      return excludedCards.concat(...newListWithoutCards);
    case 'CREATE_CARD_SUCCESS':
      const newCard = action.card;
      newCard.id = Number(newCard.id);

      return state.concat(newCard);
    case 'EDIT_CARD_SUCCESS':
      const card = state.find(card => card.id === action.card.id);
      const updatedCard = Object.assign({}, card, action.card);

      return state.map(card => {
        if (card.id === updatedCard.id) {
          return updatedCard;
        } else {
          return card;
        }
      });
    case 'FETCH_CARD_SUCCESS':
      excludedCards = state.filter(card => card.id !== action.card.id);
      const {comments, ...cardWithoutComments} = action.card;

      return [...state, cardWithoutComments];
    default:
      return state;
  }
}
