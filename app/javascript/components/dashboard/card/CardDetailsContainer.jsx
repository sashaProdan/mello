import React from 'react';
import PropTypes from 'prop-types';

import CardLabels from './CardLabels';
import CardDueDate from './CardDueDate';
import CardDescription from './CardDescription';

class CardDetailsContainer extends React.Component {
  render() {
    const card = this.props.card;

    return (
      <li className="details-section">
        <ul className="modal-details-list">
          <CardLabels
            card={card}
          />
          <CardDueDate
            card={card}
          />
        </ul>
          <CardDescription
            card={card}
          />
      </li>
    )
  }
}

export default CardDetailsContainer;
