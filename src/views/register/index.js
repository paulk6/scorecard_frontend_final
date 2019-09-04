import React, { Component } from 'react';
import './index.css';

class Register extends Component {
  render() {
    return (
      <div>
        <h1>Register</h1>
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <form onSubmit={this.props.handleRegister}>
              <input className="register-form form-control" type="text" name="email" placeholder="Email..." />
              <input className="register-form form-control" type="password" name="pass" placeholder="Password..." />
              <input className="register-form form-control" type="text" name="first_name" placeholder="First Name..." />
              <input className="register-form form-control" type="text" name="last_name" placeholder="Last Name..." />
              <input className="register-form form-control" type="text" name="phone_number" placeholder="Phone Number..." />
              <input className="register-form form-control" type="text" name="nickname" placeholder="Nickname..." />
              <input className="register-form form-control" type="text" name="handicap" placeholder="Handicap..." />
              <input type="submit" className="register-btn btn btn-primary" value="Register" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
