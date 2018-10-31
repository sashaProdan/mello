import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../../actions/CardActions';

import CardHeader from './CardHeader';
import CardMainContainer from './CardMainContainer';
import CardSidebarContainer from './CardSidebarContainer';

class CardContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    const store = this.context.store;

    store.dispatch(actions.fetchCard(id));
  }

  handleCloseClick = (e) => {
    this.props.history.goBack();
  }

  handleSubmit = (e, attr) => {
    e.preventDefault();

    const store = this.context.store;
    const id = Number(this.props.match.params.id);
    const card = store.getState().cards.find(card => card.id === id);
    const cardId = card.id;
    const listId = card.list_id;

    store.dispatch(actions.editCard(cardId, listId, attr));
  }

  render() {
    const store = this.context.store;
    const id = Number(this.props.match.params.id);
    const card = store.getState().cards.find(card => card.id === id);
    const list = store.getState().lists.find(list => list.id === card.list_id);

    if (card && list) {
      return (
        <div id="modal-container">
          <div
            className="screen"
            onClick={this.handleCloseClick}
          >
          </div>
          <div id="modal">
            <i
              className="x-icon icon close-modal"
              onClick={this.handleCloseClick}
            ></i>
            <CardHeader
              card={card}
              listTitle={list.title}
              onSubmit={this.handleSubmit}
            />
            <CardMainContainer
              card={card}
            />
            <CardSidebarContainer
              card={card}
            />
          </div>
        </div>

      )
    } else {
      return (null)
    }
  }
}

export default CardContainer;
