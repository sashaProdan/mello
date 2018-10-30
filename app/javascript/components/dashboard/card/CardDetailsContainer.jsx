import React from 'react';
import PropTypes from 'prop-types';

import CardLabels from './CardLabels';
import moment from 'moment';

class CardDetailsContainer extends React.Component {
  render() {
    const store = this.context.store;
    const card = this.props.card;

    const date = card.due_date ? moment(card.due_date).format('MMM D') : null;
    let dueStatus;

    if (date) {
      const now = moment()
      const diff = now.diff(moment(card.due_date), 'days')

      if (diff < 0) {
        dueStatus = 'completed';
      } else if (diff > 0) {
        dueStatus = 'overdue';
      } else {
        dueStatus = 'due-soon';
      }
    }
    return (
      <li className="details-section">
        <ul className="modal-details-list">
          <CardLabels
            card={card}
          />
          <li className="due-date-section">
            <h3>Due Date</h3>
            <div id="dueDateDisplay" className="overdue completed">
              <input id="dueDateCheckbox" type="checkbox" className="checkbox" checked="" />Aug 4 at 10:42 AM <span>(past due)</span>
            </div>
          </li>
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
