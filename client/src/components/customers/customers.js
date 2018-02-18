import React, { Component } from 'react';
import { connect } from 'react-redux'
import './customers.css'

class Customers extends Component {
  renderCustomers = (customerInfo) => {
    const customers = Object.values(customerInfo)
    return customers.map(customer => {
      return <li key={customer.id} className="customer">{ customer.firstName } { customer.lastName }</li>
    })
  }

  render() {
    return (
      <div className="customers">
        <h2>Customers</h2>
        <ul>
          {this.props.customers.map(this.renderCustomers)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

export default connect(mapStateToProps)(Customers);
