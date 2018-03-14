import React, { Component } from 'react';
import axios from 'axios'
import { NavLink, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeUser, logout } from '../actions';

class NavBar extends Component {
  handleLogout = (e) => {
    const { removeUser, history } = this.props;
    localStorage.removeItem('jwtToken')
    removeUser();
    history.push('/');
  }

  renderHeader = () => {

    return this.props.token === '' ? 
    <div className="nav-links">
      <ul className="nav-items left">
        <li className="nav-item left"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li className="nav-item left"><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li className="nav-item left"><NavLink to="/lookbook" activeClassName="active">LookBook</NavLink></li>
      </ul>
      
      <ul className="nav-items right">
        <li className="nav-item right"><NavLink to="/login" activeClassName="active">Login</NavLink></li>
        <li className="nav-item right"><NavLink to="/register" activeClassName="active">Register</NavLink></li>
      </ul>
    </div>
    : <div className="nav-links">
        <ul className="nav-items left">
          <li className="nav-item left"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li className="nav-item left"><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li className="nav-item left"><NavLink to="/lookbook" activeClassName="active">LookBook</NavLink></li>
        </ul>

        <ul className="nav-items right">
          <li className="nav-item right cart"><Link to="/cart">
          <i className="fas fa-cart-arrow-down"></i> <span className="circle">{
            this.props.cart.length === undefined ? 0 : 
            this.props.cart.length
            // Object.keys(this.props.cart).length
          }</span>
          </Link></li>
          <li className="nav-item right"><Link to="/" onClick={this.handleLogout}>Logout</Link></li>
        </ul>
      </div>
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

const mapStateToProps = (state) => {
  return {
    token: state.token,
    cart: state.cart,
    user: state.user
  }
}

const mapDispatchToProps = {
  removeUser,
  logout
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar))
