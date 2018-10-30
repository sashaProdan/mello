import React from 'react';
import PropTypes from 'prop-types';


class CardHeader extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  render() {
    const store = this.context.store
    const card = store.getState().cards.find(card => card.id === this.props.id);
    const list = store.getState().lists.find(list => list.id === card.list_id);

    return (
      <header>
        <i className="card-icon icon .close-modal"></i>
        <textarea
          className="list-title"
          style={{height: '45px'}}
          value={card.title}
        >
        </textarea>
        <p>in list <a className="link">{list.title}</a><i className="sub-icon sm-icon"></i>
        </p>
      </header>
    )
  }
}

export default CardHeader;
