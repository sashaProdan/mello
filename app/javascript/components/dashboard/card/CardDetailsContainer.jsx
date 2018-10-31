import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/CardActions';

import CardLabels from './CardLabels';
import CardDueDate from './CardDueDate';
import CardDescription from './CardDescription';

class CardDetailsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  handleSubmit = (e, attr) => {
    e.preventDefault();

    const cardId = this.props.card.id;
    const listId = this.props.card.list_id;
    const store = this.context.store;

    store.dispatch(actions.editCard(cardId, listId, attr));
  }

  render() {
    const card = this.props.card;
    const list = this.props.list;

    return (
      <li className="details-section">
        <ul className="modal-details-list">
          <CardLabels
            card={card}
            list={list}
          />
          <CardDueDate
            card={card}
            list={list}
          />
        </ul>
          <CardDescription
            card={card}
            onSubmit={this.handleSubmit}
          />
      </li>
    )
  }
}

export default CardDetailsContainer;
