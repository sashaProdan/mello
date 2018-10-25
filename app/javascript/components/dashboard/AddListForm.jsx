import React from 'react';
import PropTypes from 'prop-types';


import * as actions from '../../actions/BoardActions';

class AddListForm extends React.Component {
  render() {
    return (
      <div id="new-list" className="new-list"><span>Add a list...</span>
          <input type="text" placeholder="Add a list..." />
          <div>
              <input type="submit" className="button" value="Save" /><i className="x-icon icon"></i>
          </div>
      </div>
    )
  }
}

export default AddListForm;
