import React from 'react';
import PropTypes from 'prop-types';
import ExistingLists from './ExistingLists';
import AddListForm from './AddListForm';

class ListContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

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
