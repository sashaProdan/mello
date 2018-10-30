import React from 'react';
import PropTypes from 'prop-types';

import CardLabels from './CardLabels';
import CardDueDate from './CardDueDate';

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
        <form className="description">
          <p>Description</p>
          <span id="description-edit" className="link">Edit</span>
          <p className="textarea-overlay">{card.description}</p>
          <p id="description-edit-options" className="hidden">You have unsaved edits on this field. <span className="link">View edits</span> - <span className="link">Discard</span>
          </p>
        </form>
      </li>
    )
  }
}

export default CardDetailsContainer;
