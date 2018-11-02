import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/CommentActions';

import CardDetailsContainer from './CardDetailsContainer';
import AddComment from './AddComment';
import CommentsContainer from './CommentsContainer';

class CardMainContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  handleSubmit = (id, text) => {
    const store = this.context.store;

    store.dispatch(actions.createComment(id, text));
  }

  render() {
    const store = this.context.store;
    const card = this.props.card;
    const list = this.props.list;

    return (
      <section className="modal-main">
        <ul className="modal-outer-list">
          <CardDetailsContainer
            card={card}
            list={list}
          />
          <AddComment
            id={card.id}
            onSubmit={this.handleSubmit}
          />
          <CommentsContainer
            cardId={card.id}
          />
        </ul>
      </section>
    )
  }
}

export default CardMainContainer;
