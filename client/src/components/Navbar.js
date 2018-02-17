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
          <ul>
            <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
            <li><NavLink to="/register" activeClassName="active">Register</NavLink></li>
          </ul> 
        );
      default:
        return (
          <ul>
            <li><a href="/api/logout">Logout</a></li>
          </ul>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="logo">
          <Link to="/"><h2>Hello</h2></Link>
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
