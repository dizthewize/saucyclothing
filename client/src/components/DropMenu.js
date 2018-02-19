import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class DropMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  toggleClass = () => {
    const currState = this.state.active;
    this.setState({ active: !currState });
  }

  renderDropDown = () => {
    switch (this.props.user) {
      case null:
        return;
      case false:
        return (
          <Fragment>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </Fragment>
        );
      default:
        return (
          <Fragment>
            <a href="/api/logout">Logout</a>
          </Fragment>
        );
    }
  }

  render() {
    return (
      <div id="drop-menu" className={this.state.active ? 'visible' : null }>
        <div id="menu-btn" onClick={this.toggleClass}>
          <span></span>
          <span></span>
          <span></span>
        </div>

         {this.renderDropDown()}
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => {
  return { user };
}

export default connect(mapStateToProps)(DropMenu);