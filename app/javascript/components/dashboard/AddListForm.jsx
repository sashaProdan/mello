import React from 'react';
import PropTypes from 'prop-types';
import * as actions from '../../actions/ListActions';

class AddListForm extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    clicked: false,
    fields: {
      title: '',
    },
  }

  componentDidUpdate() {
    this.refs.input.focus();
  }

  resetState() {
    this.setState({
      clicked: false,
      fields: {
        title: '',
      }
    });
  }

  handleBlur = (e) => {
    if (e.target.id !== 'save') {
      this.setState({ clicked: false });
    }
  }

  handleCancelClick = (e) => {
    e.stopPropagation();

    this.resetState();
  }

  handleClick = (e) => {
    this.setState({ clicked: true });
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    })

    this.setState({ fields });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const id = this.props.boardId;
    const store = this.context.store;
    const title = this.state.fields.title;

    store.dispatch(actions.createList(id, title));
    this.resetState();
  }

  render() {
    const focus = this.state.clicked ? 'selected' : '';

    return (
      <div
        id="new-list"
        className={"new-list " + focus}
        onClick={this.handleClick}
      >
          <span>Add a list...</span>
          <input
            ref='input'
            value={this.state.fields.title}
            type="text"
            name="title"
            placeholder="Add a list..."
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          <div>
              <input
                id='save'
                type="submit"
                className="button"
                value="Save"
                onMouseDown={this.handleSubmit}
              />
              <i
                className="x-icon icon"
                onMouseDown={this.handleCancelClick}
              >
              </i>
          </div>
      </div>
    )
  }
}

export default AddListForm;
