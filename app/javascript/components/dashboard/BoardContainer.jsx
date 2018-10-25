import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';
import List from './List';
import ListContainer from './ListContainer';

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
          <header>
            <ul>
              <li id="title">{board.title}</li>
              <li className="star-icon icon"></li>
              <li className="private private-icon icon">Private</li>
            </ul>
            <div className="menu">
              <i className="more-icon sm-icon"></i>Show Menu</div>
            <div className="subscribed">
              <i className="sub-icon sm-icon"></i>Subscribed</div>
          </header>
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
