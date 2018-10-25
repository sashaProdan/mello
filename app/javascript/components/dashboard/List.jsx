import React from 'react';
import PropTypes from 'prop-types';
import CardsContainer from './CardsContainer';
import AddCardForm from './AddCardForm';

import * as actions from '../../actions/BoardActions';

class List extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  componentDidMount() {
    const store = this.context.store;
  }

  render() {
    const id = this.props.id;
    const list = this.context.store.getState().lists.find(list => list.id === id);

    return (
      <div className="list-wrapper">
        <div className="list-background">
          <div className="list">
            <a className="more-icon sm-icon" href=""></a>
            <div>
                <input type="text" className="list-title" value={list.title} autofocus="true" />
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
