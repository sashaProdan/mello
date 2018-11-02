import React from 'react';
import PropTypes from 'prop-types';

class PopOver extends React.Component {

  render() {
    const pos = this.props.pos;
    if (this.props.visible) {
      return (
        <div className={`popover ${this.props.type}`} style={{top: pos.top, left: pos.left}}>
          {this.props.children}
        </div>
      )
    } else {
      return (null)
    }
  }
}

export default PopOver;
