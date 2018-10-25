import React from 'react';
import PropTypes from 'prop-types';

import * as actions from '../../actions/BoardActions';

class CardsContainer extends React.Component {
  render() {
    return(
      <div id="cards-container" data-id="list-2-cards">
        <div className="card-background">
            <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
                <div className="cover-image"></div>
                <div className="card-info">
                    <p>Add members to a board (via the sidebar to collaborate, share and discuss.</p>
                </div>
                <div className="card-icons"><i className="clock-icon sm-icon due-soon ">Sep 5</i>
                </div>
            </div>
        </div>
        <div className="card-background">
            <div className="card "><i className="edit-toggle edit-icon sm-icon"></i>
                <div className="cover-image"></div>
                <div className="card-info">
                    <p>You can also change the background and more.</p>
                </div>
                <div className="card-icons"></div>
            </div>
        </div>
      </div>
    )
  }
}

export default CardsContainer;
