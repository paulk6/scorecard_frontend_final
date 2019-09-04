import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import './index.css';

// {} in import is for non-default imports



class PlayerInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = async(e) => {
    e.preventDefault();

    let value = this.state.value

    const { history } = this.props;

    if (value) {
    history.push({
      pathname: "/scorecard",
      state: {
        state : this.props.data[value].state,
        name : this.props.data[value].name,
        city: this.props.data[value].city,
      }
    });
  } else {
    alert('You must choose a course, or enter one manually.')
  }
  }

  componentWillMount() {
    this.props.getCourses()
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <header>
              <h2 className="ready-text">Ready to golf?</h2>
              <p>
                Choose a saved course from the drop down menu, or enter information for a new course.
              </p>
              <p className="subtext">
                You will have to log in if you wish to save your scorecard.
              </p>
            </header>
          </div>
        </div> {/* end of first row */}
        <div className="row">
          <div className="player-info-div col-md-6">
            <form className="player-info-form" onSubmit={this.props.saveCourseInfo}>
              <input type="text" className="table-form state" onfocus="this.placeholder=''" placeholder="State..." />
              <input type="text" className="table-form city" onfocus="this.placeholder=''" placeholder="City..." />
              <input type="text" className="table-form course" onfocus="this.placeholder=''" placeholder="Course..."  />
              <input className="submit" type="submit"/>
            </form>
          </div>
        </div> {/* end of second row */}
        <div className="row">
          <form id="saved-course-form" onSubmit={this.handleSubmit}>
            <label>
              Pick a saved course:
              <select value={this.state.value} onChange={this.handleChange} id="pick-course">
                <option value="Select a course">Select a Course</option>

                {
                  this.props.courses &&
                  this.props.courses.map( (course) =>
                  <option value={course}>{course}</option>
                )
                }
              </select>
            </label>
            <input className="submit" type="submit" value="Golf!" />
          </form>
        </div> {/* end of fourth row */}
      </div> // end of container
    );
  }
}


export default withRouter(PlayerInfoForm);
