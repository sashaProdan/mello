import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';
import List from './List';
import ListContainer from './ListContainer';
import BoardHeader from './BoardHeader';
import CardContainer from './card/CardContainer';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    isFetching: false,
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const store = this.context.store;
    const isCardShowing = this.props.match.url.split('/')[1] === 'cards';

    if (isCardShowing) {
      // store.subscribe(this.fetchBoard);
      const card = store.getState().cards.find(card => card.id === id);

      if (card) {
        store.dispatch(actions.fetchBoard(card.board_id));
      }
    } else {
      store.dispatch(actions.fetchBoard(id));
    }
  }

  fetchBoard = () => {
    const store = this.context.store;

    this.setState({ isFetching: true });
  }

  render() {
    const isCardShowing = this.props.match.url.split('/')[1] === 'cards';
    const id = Number(this.props.match.params.id);
    const store = this.context.store;
    let board;

    if (isCardShowing) {
      const card = store.getState().cards.find(card => card.id === id);
      board = store.getState().boards.find(board => board.id === card.board_id);
    } else {
      board = store.getState().boards.find(board => board.id === id);
    }

    if (board) {
      return (
        <div>
          <BoardHeader
            title={board.title}
          />
          <main>
            <ListContainer
              boardId={board.id}
            />
          </main>
        </div>
      )
    } else {
      return (null)
    }
  }
}

export default BoardContainer;
