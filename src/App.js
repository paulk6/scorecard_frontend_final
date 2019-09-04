import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import './App.css';
import ScoreCard from './views/scoreCard'
import FrontPage from './views/frontPage'
import Header from './components/header'
import Login from './views/login';
import Register from './views/register';
import Profile from './views/profile'
import { SECRET_KEY } from './config.js';
let jwt = require('jsonwebtoken');

class App extends Component {
  constructor() {
    super();

    this.state = {
      logged_in: false,
      // redirect: false
    }
  }

  handleLogin = async(e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.pass.value;

    const URL = 'http://localhost:5000/api/login';

    // encrypt a token with the proper payload info to send to our api
    let token = jwt.sign(
      { 'email': email, 'password': password },
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

    // setup message saying registered or error
    if (data.message === 'success' && this.state.logged_in == false) {
      this.setState({ logged_in: true });

      // set the token we receive into local storage
      localStorage.setItem('token', data.token);

      alert('You are now logged in!');
      // this.setState({ redirect: true })
      // history.push('/')
    } else if (this.state.logged_in == true) {
      alert('You are already logged in.')
    } else {
      alert(data.message);
    }
  }

  handleLogout = () => {
    this.setState({ logged_in: false });
    localStorage.setItem('token', '');
    alert('You have been logged out.')
  }

  handleRegister = async(e) => {
    e.preventDefault();

    let email = e.target.elements.email.value;
    let password = e.target.elements.pass.value;
    let first_name = e.target.elements.first_name.value;
    let last_name = e.target.elements.last_name.value;
    let phone_number = e.target.elements.phone_number.value;
    let nickname = e.target.elements.nickname.value;
    let handicap = e.target.elements.handicap.value;


    const URL = 'http://localhost:5000/api/register';

    // encrypt a token with the proper payload info to send to our api
    let token = jwt.sign(
      { 'email': email, 'password': password, 'first_name': first_name, 'last_name': last_name, 'phone_number': phone_number, 'nickname': nickname, 'handicap': handicap },
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

    // setup message saying registered or error
    if (data.message === 'success') {
      alert('You are now registered!')
    } else {
      alert(data.message);
    }
  }


  render() {
    return (
      <div className="app">
        <Header logged_in={this.state.logged_in} handleLogout={this.handleLogout}/>
        <Switch>
          <Route exact path='/' render={() => <FrontPage />} />
          <Route exact path='/profile' render={() => <Profile />} />
          <Route exact path='/scorecard' render={() => <ScoreCard logged_in={this.state.logged_in}/>} />
          <Route exact path='/login' render={() => <Login handleLogin={this.handleLogin}/>} />
          <Route exact path='/logout' render={() => <Login handleLogout={this.handleLogout}/>} />
          <Route exact path='/register' render={() => <Register handleRegister={this.handleRegister}/>} />
        </Switch>
      </div>
  )};
}

export default withRouter(App);
