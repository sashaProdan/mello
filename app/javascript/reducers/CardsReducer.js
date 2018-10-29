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
    default:
      return state;
  }
}
