import React from 'react';
import PropTypes from 'prop-types';

class Comment extends React.Component {
  render() {
    return (
      <li>
        <div className="member-container">
          <div className="card-member">TP</div>
        </div>
        <h3>Taylor Peat</h3>
        <div className="comment static-comment"><span>The activities are not functional.</span>
        </div>
        <small>22 minutes ago - <span className="link">Edit</span> - <span className="link">Delete</span></small>
        <div className="comment">
          <label>
            <textarea required="" rows="1">The activities have not been implemented yet.</textarea>
            <div>
              <a className="light-button card-icon sm-icon"></a>
              <a className="light-button smiley-icon sm-icon"></a>
              <a className="light-button email-icon sm-icon"></a>
            </div>
            <div>
              <p>You haven't typed anything!</p>
              <input type="submit" className="button not-implemented" value="Save" /><i className="x-icon icon"></i>
            </div>
          </label>
        </div>
      </li>
    )
  }
}

export default Comment;
