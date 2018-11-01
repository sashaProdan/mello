import React from 'react';
import PropTypes from 'prop-types';

import Comment from './Comment'

class CommentsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  handleSubmit = (e) => {

  }

  render() {
    const id = this.props.cardId;
    const store = this.context.store;
    const comments = store.getState().comments.filter(comment => comment.card_id === id);
    const commentComponents = comments.map((comment, i) => (
      <Comment
        key={i}
        comment={comment}
        onSubmit={this.handleSubmit}
      />
    ));
    return (
      <li className="activity-section">
        <h2 className="activity-icon icon">Activity</h2>
        <ul className="horiz-list">
          <li className="not-implemented">Show Details</li>
        </ul>
        <ul className="modal-activity-list">
          {this.props.comCount > 0 ? commentComponents : ''}
        </ul>
      </li>
    )
  }
}

export default CommentsContainer;
