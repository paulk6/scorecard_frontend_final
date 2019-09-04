import React, { Component } from 'react';
import './index.css';
import ManualCard from '../../components/manualCard';
import PlayerInfoForm from '../../components/playerInfoForm'
import { SECRET_KEY } from '../../config.js';
import { Redirect, withRouter } from 'react-router-dom'

let jwt = require('jsonwebtoken');


class FrontPage extends Component {
  constructor() {
    super();

    this.state = {
      'data' : [],
      'state' : '',
      'name': '',
      'city': '',
      'courses': [],
    }
  }

  getCourses = async(e) => {
    // e.preventDefault();

    const URL = 'http://localhost:5000/api/retrieve/course';

    let response = await fetch(URL);

    let data = await response.json();
    let courses = Object.keys(data.info);
    // for (let i = 1; i < course_id_list.length; i++) {
    //   courses.unshift(data.info[i].name)
    // }
    console.log(data.info);
    console.log(courses);
    this.setState({
      data,
      courses
     });

  }

  saveCourseInfo = async(e) => {
    e.preventDefault();

      let state = e.target.elements[0].value;
      let city = e.target.elements[1].value;
      let name = e.target.elements[2].value;

      if (state && city && name) {
        this.setState({
          name,
          state,
          city
        })

      console.log(state);

      const URL = 'http://localhost:5000/api/save/course';

      let token = jwt.sign(
        {'name': name, 'state': state, 'city': city },
        SECRET_KEY,
        { expiresIn: '1h' } // expires in 1 hour
      );

      // send the token to register the user
      let response = await fetch(URL, {
        headers: {
          'Content-Type': 'application/json',
          'token': token,
        }
      });

      let data = await response.json();

      const { history } = this.props;

      // setup message saying registered or error
      if (data.message === 'success') {
        alert('The course has been saved')
        history.push({
          pathname: "/scorecard",
          state: {
            state : state,
            name : name,
            city: city,
          }
        });
        console.log(state);
        console.log(name);
        console.log(city);
      } else {
        alert(data.message);
        history.push({
          pathname: "/scorecard",
          state: {
            state : state,
            name : name,
            city: city,
          }
      });
    }
  } else {
    alert('You must input something in all fields.')
  }
}

  render() {
    return (
      <div className="row">
          <PlayerInfoForm saveCourseInfo={this.saveCourseInfo} getCourses={this.getCourses} courses={this.state.courses} data={this.state.data.info}/>
      </div>
    );
  }
}

export default withRouter(FrontPage);
