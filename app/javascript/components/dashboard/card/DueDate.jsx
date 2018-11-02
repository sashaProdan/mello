import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Pikaday from 'pikaday';

class DueDate extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
  };

  state = {
    fields: {
      date: this.props.dueDate,
      time: '',
    }
  }

  componentDidMount() {
    this.picker = new Pikaday({
      field: this.refs.dateInput,
      bound: false,
      container: this.refs.calendarWidget,
      firstDay: 1,
      yearRange: 10,
      defaultDate: moment(this.state.fields.date).toDate(),
      setDefaultDate: true,
      format: 'M/D/YYYY',
      i18n: {
        previousMonth : 'Prev',
        nextMonth     : 'Next',
        months        : ['January','February','March','April','May','June','July','August','September','October','November','December'],
        weekdays      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        weekdaysShort : ['Su','Mo','Tu','We','Th','Fr','Sa']
      },
      toString(date, format) {
        return moment(date).format(format);
      }
    });
    const time = this.getDefaultTime(this.props.dueDate);
    const fields = Object.assign({}, this.state.fields, { time });

    this.setState({ fields })
    this.picker.show();
  }

  getDefaultTime = (date) => {
    return date ? moment(date).format('hh:mm A') : '';
  }

  handleCloseClick = (e) => {
    e.preventDefault();

    this.props.onCloseClick();
  }

  handleChange = (e) => {
    const fields = Object.assign({}, this.state.fields, {
      [e.target.name]: e.target.value,
    });

    this.setState({ fields })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const date = this.picker.getDate();
    const fields = Object.assign({}, this.state.fields, { date });

    this.props.onDateSubmit(e, { due_date: date });
  }

  render() {
    // console.log(this.state.fields.time);
    const time = this.state.fields.time;

    return (
      <div>
        <header>
          <span>Change due date</span>
          <a
            href="#"
            className="icon-sm icon-close"
            onClick={this.handleCloseClick}
          >
          </a>
        </header>
        <div className="content">
          <form>
            <div className="datepicker-select">
              <div className="datepicker-select-date">
                <label>
                  Date
                  <input ref='dateInput' type="text" placeholder="Enter date" autofocus />
                </label>
              </div>
              <div className="datepicker-select-time">
                <label>
                  Time
                  <input
                    name='time'
                    type="text"
                    placeholder="Enter time"
                    value={time}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div ref='calendarWidget' id="calendar-widget"></div>
            </div>
            <button
              className="button"
              type="submit"
              onClick={this.handleSubmit}
            >
              Save
            </button>
            <button className="button red-button" type="reset">Remove</button>
          </form>
        </div>
      </div>
    )
  }
}

export default DueDate;
