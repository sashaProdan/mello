import React from 'react';
import PropTypes from 'prop-types';

class CardHeader extends React.Component {
  state = {
    title: this.props.card.title,
  }

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const title = this.state.title;
      this.props.onSubmit(e, { title });
      this.refs.textarea.blur();
    }
  }

  render() {
    const card = this.props.card;

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
        <p>in list <a className="link">{this.props.listTitle}</a><i className="sub-icon sm-icon"></i>
        </p>
      </header>
    )
  }
}

export default CardHeader;
