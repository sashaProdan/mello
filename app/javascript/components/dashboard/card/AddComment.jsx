import React from 'react';
import PropTypes from 'prop-types';

class AddComment extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    fields: {
      text: '',
    }
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    });

    this.setState({ fields });
  }

  render() {
    const text = this.state.fields.text;

    return (
      <li className="comment-section">
        <h2 className="comment-icon icon">Add Comment</h2>
        <div>
          <div className="member-container">
            <div className="card-member">tT</div>
          </div>
          <div className="comment">
            <label>
              <textarea
                name="text"
                required=""
                rows="1"
                placeholder="Write a comment..."
                defaultValue={text}
                onChange={this.handleChange}
              >
              </textarea>
              <div>
                <a className="light-button card-icon sm-icon"></a>
                <a className="light-button smiley-icon sm-icon"></a>
                <a className="light-button email-icon sm-icon"></a>
                <a className="light-button attachment-icon sm-icon"></a>
              </div>
              <div>
                <input
                  type="submit"
                  className="button not-implemented"
                  value="Save"
                  onClick={this.handleClick}
                />
              </div>
            </label>
          </div>
        </div>
      </li>
    )
  }
}

export default AddComment;
