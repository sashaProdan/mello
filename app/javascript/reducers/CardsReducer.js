export default function cardsReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_BOARD_SUCCESS':
      const excludedCards = state.filter(card => card.board_id !== action.board.id);
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
      const updatedCard = Object.assign({}, card, {title: action.card.title});

      return state.map(card => {
        if (card.id === updatedCard.id) {
          return updatedCard;
        } else {
          return card;
        }
      });
    case 'FETCH_CARD_SUCCESS':
    if (state.length === 0) {
      return [...state, action.card]
    } else {
      return state.map(card => {
        if (card.id === action.card.id) {
          return action.card;
        } else {
          return card;
        }
      });
    }
    default:
      return state;
  }
}
