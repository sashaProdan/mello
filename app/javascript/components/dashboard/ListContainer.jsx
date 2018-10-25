import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

import * as actions from '../../actions/BoardActions';

class ListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    const store = this.context.store;
  }

  render() {
    const id = this.props.boardId;
    const store = this.context.store;
    const lists = store.getState().lists.filter(list => list.board_id === id);
    const listComponents = lists.map(list => (
      <List
        key={list.id}
        id={list.id}
        boardId={list.board_id}
      />
    ));

    return(
      <div id="list-container" className="list-container">
        <div id="existing-lists" className="existing-lists">
          {listComponents}
        </div>
      </div>
    )
  }
}

export default ListContainer;
