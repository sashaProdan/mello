import React from 'react';
import PropTypes from 'prop-types';

class CopyCard extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    board: '',
    card: {
      title: this.props.card.title,
      comments_count: this.props.card.comments_count,
    }
  }

  componentDidMount() {
    const board = this.getBoard(this.props.card.board_id);
    console.log(board);

    this.setState({ board })
  }

  getBoard = (id) => {
    const store = this.context.store;

    return store.getState().boards.filter(board => board.id === id);
  }

  handleCloseClick = (e) => {
    e.preventDefault();

    this.props.onCloseClick();
  }

  render () {
    const card = this.state.card;
    // const board = this.state.board;

    return (
      <div>
        <header>
          <span>Copy Card</span>
          <a
            href="#"
            className="icon-sm icon-close"
            onClick={this.handleCloseClick}
          >
          </a>
        </header>
        <div className="content">
          <label>Title</label>
          <textarea
            name="name"
            style={{marginBottom: 12}}
            value={card.title}
          >
          </textarea>
          <label>Keep…</label>
          <div className="check-div clearfix">
            <input id="keep-comments" type="checkbox" name="comments" checked="checked" />
            <label for="keep-comments">
              Comments <span className="quiet">({card.comments_count})</span>
            </label>
          </div>
          <br />
          <label>Copy to…</label>
          <div className="button-link setting board">
            <span className="label">Board</span>
            <span className="value js-board-value">First Board</span>
            <label>Board</label>
            <select>
              <option value="1" selected>First Board (current)</option>
              <option value="2">Second Board</option>
              <option value="3">Third Board</option>
              <option value="4">Fourth Board</option>
              <option value="5">Fifth Board</option>
            </select>
          </div>
          <div>
            <div className="button-link setting list">
              <span className="label">List</span>
              <span className="value js-list-value">Intermediate</span>
              <label>List</label>
              <select>
                <option value="1">Basics</option>
                <option value="2" selected="selected">Intermediate (current)</option>
                <option value="3">Advanced</option>
              </select>
            </div>
            <div className="button-link setting position">
              <span className="label">Position</span>
              <span className="value">1</span>
              <label>Position</label>
              <select>
                <option value="top" selected="selected">1 (current)</option>
                <option value="98303">2</option>
                <option value="163839">3</option>
                <option value="212991">4</option>
                <option value="245759">5</option>
                <option value="278527">6</option>
                <option value="311295">7</option>
                <option value="bottom">8</option>
              </select>
            </div>
          </div>

          <button className="button" type="submit">Create Card</button>
        </div>
      </div>
    )
  }
}

export default CopyCard;
