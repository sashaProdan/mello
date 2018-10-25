import React from 'react';
import PropTypes from 'prop-types';
import ExistingLists from './ExistingLists';
import AddListForm from './AddListForm';

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

    return(
      <div id="list-container" className="list-container">
        <ExistingLists
          boardId={id}
        />
        <AddListForm />
      </div>
    )
  }
}

export default ListContainer;
