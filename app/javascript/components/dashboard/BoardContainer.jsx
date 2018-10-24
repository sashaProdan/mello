import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';

class BoardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    const id = props.match.params.id
    const store = context.store

    store.dispatch(actions.fetchBoard(id));
  }

  render() {
    return (
      <p>{id}</p>
    )
  }
}

export default BoardContainer;
