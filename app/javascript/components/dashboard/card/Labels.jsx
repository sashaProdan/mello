import React from 'react';
import PropTypes from 'prop-types';

class Labels extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    labels: this.props.labels,
  }

  handleCloseClick = (e) => {
    e.preventDefault();

    this.props.onCloseClick();
  }

  handleLabelToggle = (e) => {
    const color = e.target.dataset.color;
    const currLabels = this.state.labels;
    let labels;

    if (!currLabels.includes(color)) {
      labels = [...currLabels, color];
    } else {
      labels = currLabels.filter(label => label !== color);
    }

    this.setState({ labels });
    this.props.onLabelsSubmit(e, { labels });
  }

  render() {
    const store = this.context.store;
    const allColors = ['green', 'yellow', 'orange', 'red', 'purple', 'blue'];
    const selectedLabels = this.state.labels;
    const labels = allColors.map((color, i) => {
      const included = selectedLabels.includes(color);

      return (
        <li
          key={i}
        >
          <div
            className={`${color} colorblindable`}
            data-id="1"
            data-color={color}
            onClick={this.handleLabelToggle}
          >
            <i className={(included ? 'check-icon' : '') + ' sm-icon'}></i>
          </div>
          <div className={`label-background ${color}`}></div>
          <div className="label-background-overlay"></div><i className="edit-icon icon not-implemented"></i></li>
      )
    });

    return (
      <div id="add-options-labels-dropdown">
        <header>
          <span>Labels</span>
          <a
            href="#"
            className="icon-sm icon-close"
            onClick={this.handleCloseClick}
          >
          </a>
        </header>
        <div className="content">
          <input className="dropdown-input" placeholder="Search labels..." type="text" />
          <div className="labels-search-results">
            <ul className="label-list">
              {labels}
            </ul>
            <ul className="light-list">
              <li className="not-implemented">Create a new label</li>
              <hr />
              <li className="toggleColorblind">Enable color blind friendly mode.</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Labels;
