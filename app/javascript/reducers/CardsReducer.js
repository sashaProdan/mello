export default function cardsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedLists = state.filter(card => card.board_id !== action.board.id);
    const newListWithoutCards = action.board.lists.map( list => {
      const { cards, ...noCards } = list;
      return cards;
    })

    return excludedLists.concat(...newListWithoutCards);
  }
}
