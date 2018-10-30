import React from 'react';
import PropTypes from 'prop-types';

import CardDetailsContainer from './CardDetailsContainer';
import AddComment from './AddComment';
import CommentsContainer from './CommentsContainer';

class CardMainContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

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
          />
          <CommentsContainer
            cardId={card.id}
            comCount={card.comments_count}
          />
        </ul>
      </section>
    )
  }
}

export default CardMainContainer;
