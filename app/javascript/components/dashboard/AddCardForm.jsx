import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/CardActions';


class AddCardForm extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    fields: {
      title: '',
    }
  }

  componentDidUpdate() {
    this.refs.textarea.focus();
  }

  resetState() {
    this.setState({
      fields: {
        title: '',
      }
    });
    this.props.onAddCardForm(false);
  }

  handleCancelClick = (e) => {
    e.stopPropagation();

    this.resetState();
  }

  handleBlur = (e) => {
    if (e.target.id !== 'add') {
      this.props.onAddCardForm(false);
    }
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      title: e.target.value,
    });

    this.setState({ fields });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSubmit(e);
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const id = this.props.listId;
    const store = this.context.store;
    const title = this.state.fields.title;

    store.dispatch(actions.createCard(id, title));
    this.resetState();
  }

  render() {
    const title = this.state.fields.title;

    return (
      <div className="add-dropdown add-bottom active-card">
        <div className="card">
          <div className="card-info"></div>
          <textarea
            name="add-card"
            placeholder="Enter a title for this card..."
            ref='textarea'
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            value={title}
            onKeyPress={this.handleKeyPress}
          >
          </textarea>
          <div className="members"></div>
        </div>
        <a
          id="add"
          className="button"
          onMouseDown={this.handleSubmit}
        >
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
  }
}

export default AddCardForm;
