import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import $ from 'jquery';
import * as actions from '../../../actions/CardActions';

class CardSidebarContainer extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
    history: PropTypes.object,
  };

  state = {
    popOverVisible: false,
  }

  handleDeleteClick = (e) => {
    const { history: { push } } = this.props;
    const store = this.context.store;
    const id = this.props.card.id;
    const boardId = this.props.card.board_id;

    store.dispatch(actions.deleteCard(id));
    push(`/boards/${boardId}`);
  }

  handleCopyClick = (e) => {
    const type = 'copy-card';
    const $target = $(e.target);
    let pos = $target.offset();
    pos = Object.assign({}, pos, {
      top: pos.top - 408
    })

    this.setState({popOverVisible: true});
    this.props.onActionClick({type, pos, visible: this.state.popOverVisible});
  }

  handleDateClick = (e) => {
    const type = 'due-date';
    const $target = $(e.target);
    let pos = $target.offset();
    pos = Object.assign({}, pos, {
      top: pos.top + 33
    })

    this.setState({popOverVisible: true});
    this.props.onActionClick({type, pos, visible: this.state.popOverVisible});
  }

  handleLabelsClick = (e) => {
    const type = 'labels';
    const $target = $(e.target);
    let pos = $target.offset();
    pos = Object.assign({}, pos, {
      top: pos.top + 33
    })

    this.setState({popOverVisible: true});
    this.props.onActionClick({type, pos, visible: this.state.popOverVisible});
  }

  render() {
    return (
      <aside className="modal-buttons">
        <h2>Add</h2>
        <ul>
          <li className="member-button"><i className="person-icon sm-icon"></i>Members</li>
          <li
            className="label-button"
            onClick={this.handleLabelsClick}
          >
            <i className="label-icon sm-icon"></i>
            Labels
          </li>
          <li className="checklist-button"><i className="checklist-icon sm-icon"></i>Checklist</li>
          <li
            className="date-button"
            onClick={this.handleDateClick}
          >
            <i className="clock-icon sm-icon"></i>
            Due Date
          </li>
          <li className="attachment-button not-implemented"><i className="attachment-icon sm-icon"></i>Attachment</li>
        </ul>
        <div>
          <h2>Actions</h2>
          <ul>
            <li className="move-button"><i className="forward-icon sm-icon"></i>Move</li>
            <li
              className="copy-button"
              onClick={this.handleCopyClick}
            >
              <i className="card-icon sm-icon"></i>Copy
            </li>
            <li className="subscribe-button"><i className="sub-icon sm-icon"></i>Subscribe<i className="check-icon sm-icon"></i>
            </li>
            <hr />
            <li
              className="archive-button"
              onClick={this.handleDeleteClick}
            >
              <i className="file-icon sm-icon "></i>Archive
            </li>
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Share and more...</li>
          </ul>
        </div>
      </aside>
    )
  }
}

export default withRouter(CardSidebarContainer);
