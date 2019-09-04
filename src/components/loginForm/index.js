import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <header>
              <p>
                Please enter your email and password.
              </p>
            </header>
          </div>
        </div> {/* end of first row */}
        <div className="row">
          <div className="login-form-container">
            <form className="login-form">
              <input type="text" className="email" placeholder="Email..." />
              <input type="text" className="password" placeholder="Password..." />
              <button type="submit" className="submit-button">Login</button>
            </form>
          </div>
        </div> {/* end of second row */}
      </div> // end of container
    );
  }
}

export default LoginForm;
