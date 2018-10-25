import React from 'react';
import PropTypes from 'prop-types';
import CardTile from './CardTile';

import * as actions from '../../actions/BoardActions';

class CardsContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  render() {
    const id = this.props.listId;
    const cards = this.context.store.getState().cards.filter(card => card.list_id === id);
    const cardComponents = cards.map(card => (
      <CardTile
        key={card.id}
        id={card.id}
      />
    ));

    return(
      <div id="cards-container" data-id="list-2-cards">
        {cardComponents}
      </div>
    )
  }
}

export default CardsContainer;
