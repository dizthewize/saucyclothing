import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  renderHeader = () => {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <ul id="nav-items">
            <li className="nav-item nav-link"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            <li className="nav-item nav-link"><NavLink to="/register" activeClassName="active">Register</NavLink></li>
          </ul> 
        );
      default:
        return (
          <ul id="nav-items">
            <li className="nav-item">Welcome {this.props.user.firstName}</li>
            <li className="nav-item nav-link"><a href="/api/logout">Logout</a></li>
          </ul>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="logo">
          <Link to="/" className="nav-link"><h2>Hello</h2></Link>
        </div>
        {this.renderHeader()}
      </nav>
    )
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
}

export default connect(mapStateToProps)(NavBar)
