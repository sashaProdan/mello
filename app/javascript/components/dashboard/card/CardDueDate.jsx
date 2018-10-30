import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class CardDueDate extends React.Component {
  render() {
    const card = this.props.card;
    const date = card.due_date ? moment(card.due_date).format('MMM D [at] hh:mm A') : null;
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

    if (date) {
      return (
        <li className="due-date-section">
          <h3>Due Date</h3>
          <div id="dueDateDisplay" className={`${dueStatus}`}>
            <input id="dueDateCheckbox" type="checkbox" className="checkbox" checked="" />{date} {dueStatus === 'overdue' ? <span>(past due)</span> : ''}
          </div>
        </li>
      )
    } else {
      return (null);
    }

  }
}

export default CardDueDate;
