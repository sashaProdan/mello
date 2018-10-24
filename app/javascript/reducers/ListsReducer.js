export default function listsReducer(state = [], action) {
  if (action.type === 'FETCH_BOARD_SUCCESS') {
    const excludedLists = state.filter(list => list.board_id !== action.board.id);
    const newListWithoutCards = action.board.lists.map( list => {
      const { cards, ...noCards } = list;
      return noCards;
    })

    return excludedLists.concat(newListWithoutCards);
  }
}