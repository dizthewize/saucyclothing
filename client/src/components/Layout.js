import React, { Component } from 'react';
import '../App.css';
import Customers from './customers/customers'

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <Customers />
      </div>
    );
  }
}

export default Layout;