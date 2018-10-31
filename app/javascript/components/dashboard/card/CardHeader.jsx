import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../../actions/CardActions';


class CardHeader extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    title: this.props.card.title,
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const cardId = this.props.card.id;
    const listId = this.props.list.id;
    const store = this.context.store;
    const title = this.state.title;

    store.dispatch(actions.editCard(cardId, listId, {title}));
    this.refs.textarea.blur();
  }

  render() {
    const card = this.props.card;
    const list = this.props.list;

    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          className="list-title"
          style={{height: '45px'}}
          value={this.state.title}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          ref='textarea'
        >
        </textarea>
        <p>in list <a className="link">{list.title}</a><i className="sub-icon sm-icon"></i>
        </p>
      </header>
    )
  }
}

export default CardHeader;
