import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class CardTile extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  render() {
    const card = this.context.store.getState().cards.find(card => card.id === this.props.id);
    const labels = card.labels.map((label, i) => (
      <div key={i} className={"card-label " + label + " colorblindable"}></div>
    ));
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
      <div className="card-background">
        <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
          <div className="card-info">
              {labels}
              <p>{card.title}</p>
          </div>
          <div className="card-icons">
            {date ? <i className={"clock-icon sm-icon overdue-recent " + dueStatus}>{date}</i> : ''}
            {card.description ? <i className="description-icon sm-icon"></i> : ''}
            {card.comments_count > 0 ? <i className="comment-icon sm-icon"></i> : ''}
          </div>
        </div>
      </div>
    )
  }
}

export default CardTile;
