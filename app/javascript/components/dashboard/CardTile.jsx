import React from 'react';
import PropTypes from 'prop-types';

class CardTile extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  render() {
    const card = this.context.store.getState().cards.find(card => card.id === this.props.id);
    const labels = card.labels.map(label => (
      <div className={"card-label" + label + "colorblindable"}></div>
    ));

    return (
      <div className="card-background">
          <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
              <div className="card-info">
                  {card.labels.length > 0 ? labels : ''}
                  <p>{card.description}</p>
              </div>
              <div className="card-icons"><i className="clock-icon sm-icon overdue-recent completed">Aug 4</i><i className="description-icon sm-icon"></i><i className="comment-icon sm-icon"></i>
              </div>
          </div>
      </div>
    )
  }
}


export default CardTile;
