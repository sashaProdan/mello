import React from 'react';
import PropTypes from 'prop-types';

class AddCardForm extends React.Component {
  state = {
    clicked: false,
    fields: {
      title: '',
    }
  }

  componentDidUpdate() {
    this.refs.textarea.focus();
  }

  resetState() {
    this.setState({
      clicked: false,
      fields: {
        title: '',
      }
    });
  }

  handleCancelClick = (e) => {
    e.stopPropagation();

    this.resetState();
  }

  handleClick = (e) => {
    this.setState({ clicked: true });
  }

  handleBlur = (e) => {
    if (e.target.id !== 'add') {
      this.setState({ clicked: false });
    }
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      title: e.target.value,
    });

    this.setState({ fields });
  }

  render() {
    const clicked = this.state.clicked;
    const title = this.state.fields.title;

    if (clicked) {
      return (
        <div className="add-dropdown-active active-card">
          <div className="card">
            <div className="card-info"></div>
            <textarea
              name="add-card"
              placeholder="Enter a title for this card..."
              ref='textarea'
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              value={title}
            >
            </textarea>
            <div className="members"></div>
          </div>
          <a
            id="add"
            className="button">
            Add
          </a>
          <i
            className="x-icon icon"
            onMouseDown={this.handleCancelClick}
          >
          </i>
          <div className="add-options"><span>...</span>
          </div>
        </div>
      )
    } else {
      return (
        <div
          className="add-card-toggle"
          data-position="bottom"
          onClick={this.handleClick}
        >
          Add a card...
        </div>
      )
    }
  }
}

export default AddCardForm;
