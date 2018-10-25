import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';
import List from './List'

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
    const lists = store.getState().lists.filter(list => list.board_id === id);
    const listComponents = lists.map(list => (
      <List
        key={list.id}
        id={list.id}
        boardId={list.board_id}
      />
  ));
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
            <div id="list-container" className="list-container">
              <div id="existing-lists" className="existing-lists">
                {listComponents}
              </div>
            </div>
          </main>
        </div>
      )
    } else {
      return (null)
    }
  }
}

export default BoardContainer;
