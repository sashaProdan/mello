import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';
import List from './List';
import ListContainer from './ListContainer';
import BoardHeader from './BoardHeader';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const store = this.context.store;

    store.dispatch(actions.fetchBoard(id));
  }

  render() {
    const id = Number(this.props.match.params.id);
    const store = this.context.store;
    const board = store.getState().boards.find(board => board.id === id);

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
