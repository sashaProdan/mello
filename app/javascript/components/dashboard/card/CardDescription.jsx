import React from 'react';
import PropTypes from 'prop-types';

class CardDescription extends React.Component {
  state = {
    editing: false,
    description: this.props.card.description,
    fields: {
      description: this.props.card.description,
    }
  }

  handleEditClick = (e) => {
    this.setState({ editing: true });
  }

  handleCancelClick = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      description: this.state.description,
    });

    this.setState({
      editing: false,
      fields,
    });
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    });

    this.setState({ fields });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const description = this.state.fields.description;

    this.props.onSubmit(e, {description})
    this.setState({ editing: false });
  }

  render() {
    const card = this.props.card;
    const fieldDesc = this.state.fields.description

    if (this.state.editing) {
      return (
        <form
          className="description"
        >
          <p>Description</p>
          <textarea
            name="description"
            className="textarea-toggle"
            rows="1"
            value={fieldDesc}
            onChange={this.handleChange}
            autofocus
          >
          </textarea>
          <div>
            <div
              className="button"
              value="Save"
              onClick={this.handleSubmit}
              >
                Save
              </div>
            <i
              className="x-icon icon"
              onClick={this.handleCancelClick}
            >
            </i>
          </div>
        </form>
      )
    } else {
      return (
        <form className="description">
          <p>Description</p>
          <span
            id="description-edit"
            className="link"
            onClick={this.handleEditClick}
          >
            Edit
          </span>
          <p className="textarea-overlay">{card.description}</p>
          <p id="description-edit-options" className="hidden">You have unsaved edits on this field. <span className="link">View edits</span> - <span className="link">Discard</span>
          </p>
        </form>
      )
    }
  }
}

export default CardDescription;
