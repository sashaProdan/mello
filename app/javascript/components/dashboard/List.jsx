import React from 'react';
import PropTypes from 'prop-types';
import CardsContainer from './CardsContainer';
import AddCardForm from './AddCardForm';
import * as actions from '../../actions/ListActions';

class List extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    fields: {
      "title": this.context.store.getState().lists.find(list => list.id === this.props.id).title,
    }
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    });

    this.setState({ fields });
  }

  handleBlur = (e) => {
    const id = this.props.id;
    const store = this.context.store;
    const title = this.state.fields.title;

    store.dispatch(actions.editList(id, title));
  }

  render() {
    const id = this.props.id;
    const {title} = this.state.fields

    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
                <input
                  type="text"
                  name="title"
                  className="list-title"
                  value={title}
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                />
            </div>
            <div className="add-dropdown add-top">
                <div className="card"></div><a className="button">Add</a><i className="x-icon icon"></i>
                <div className="add-options"><span>...</span>
                </div>
            </div>
            <CardsContainer
              listId={id}
            />
            <div className="add-dropdown add-bottom">
                <div className="card"><div className="card-info"></div><textarea name="add-card"></textarea><div className="members"></div></div>
                <a className="button">Add</a><i className="x-icon icon"></i>
                <div className="add-options"><span>...</span>
                </div>
            </div>
            <AddCardForm />
          </div>
        </div>
      </div>
    )
  }
}

export default List;
