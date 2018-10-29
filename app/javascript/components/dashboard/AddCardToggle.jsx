import React from 'react';

class AddCardToggle extends React.Component {
  handleClick = (e) => {
    this.props.onAddCardForm(true);
  }
  
  render() {
    return (
      <div
        className="add-card-toggle"
        data-position="bottom"
        onClick={this.handleClick}
      >
        Add a card...
      </div>
    )
  }
}

export default AddCardToggle;
