import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom';



class Header extends Component {
  constructor() {
    super()
  }
  render() {
  return(
    <header className="Header">
      <nav id="navbar" className="navbar">
        <NavLink to='/' className="navbar-brand">Home</NavLink>
          {/*<NavLink to='/scorecard' className="navbar-brand">Scorecard</NavLink>*/}
          {!this.props.logged_in &&
          <NavLink to='/login' className="navbar-brand">Login</NavLink>
        }
          {this.props.logged_in &&
          <NavLink to='/' className="navbar-brand" onClick={this.props.handleLogout}>Logout</NavLink>
        }
          {!this.props.logged_in &&
          <NavLink to='/register' className="navbar-brand">Register</NavLink>
        }
          {this.props.logged_in &&
          <NavLink to='/profile' className="navbar-brand">Profile</NavLink>
        }
      </nav>
    </header>
    );
  }
};

export default Header;
