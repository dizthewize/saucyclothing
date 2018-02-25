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
          <div className="nav-links">
            <ul className="nav-items right">
              <li className="nav-item right"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
              <li className="nav-item right"><NavLink to="/register" activeClassName="active">Register</NavLink></li>
            </ul>
          </div>
        );
      default:
        return (
          <div className="nav-links">
            <ul className="nav-items left">
              <li className="nav-item left"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
              <li className="nav-item left"><NavLink to="/about" activeClassName="active">About</NavLink></li>
              <li className="nav-item left"><NavLink to="/lookbook" activeClassName="active">LookBook</NavLink></li>
            </ul>

            <ul className="nav-items right">
              <li className="nav-item right"><p>Welcome <span>{this.props.user.firstName}</span></p></li>
              <li className="nav-item right cart"><i className="fas fa-cart-arrow-down"></i> <span className="circle">5</span></li>
              <li className="nav-item right"><a href="/api/logout">Logout</a></li>
            </ul>
          </div>
        );
    }
  }
  
  render() {
    return (
      <nav>
        <div id="nav-logo">
          <Link to="/" id="logo"><h2>Saucy Tees</h2></Link>
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
