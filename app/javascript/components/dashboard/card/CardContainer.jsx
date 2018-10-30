import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import * as actions from '../../../actions/CardActions';

import CardHeader from './CardHeader';
import CardMainContainer from './CardMainContainer';

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
              list={list}
            />
            <CardMainContainer
              card={card}
            />
            <aside className="modal-buttons">
              <h2>Add</h2>
              <ul>
                <li className="member-button"><i className="person-icon sm-icon"></i>Members</li>
                <li className="label-button"><i className="label-icon sm-icon"></i>Labels</li>
                <li className="checklist-button"><i className="checklist-icon sm-icon"></i>Checklist</li>
                <li className="date-button not-implemented"><i className="clock-icon sm-icon"></i>Due Date</li>
                <li className="attachment-button not-implemented"><i className="attachment-icon sm-icon"></i>Attachment</li>
              </ul>
              <h2>Actions</h2>
              <ul>
                <li className="move-button"><i className="forward-icon sm-icon"></i>Move</li>
                <li className="copy-button"><i className="card-icon sm-icon"></i>Copy</li>
                <li className="subscribe-button"><i className="sub-icon sm-icon"></i>Subscribe<i className="check-icon sm-icon"></i>
                </li>
                <hr />
                <li className="archive-button"><i className="file-icon sm-icon "></i>Archive</li>
              </ul>
              <ul className="light-list">
                <li className="not-implemented">Share and more...</li>
              </ul>
            </aside>
          </div>
        </div>

      )
    } else {
      return (null)
    }
  }
}

export default CardContainer;
