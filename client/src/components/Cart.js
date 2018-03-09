import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import StripeCheckout from 'react-stripe-checkout';

class Cart extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      // products: props.items,
      total: 0,

    }
  }
  
  calculateTotal = () => {
    const { items } = this.props;
    let total = 0;
    this.setState({ total });
  }

  removeItem = id => {
    const { removeFromCart } = this.props;
    removeFromCart(id);
  }

  showCartItems = (items) => (
    items.length > 0 ?
      items.map(item => (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.size}</td>
          <td>${item.price}</td>
          <td><button onClick={() => this.removeItem(item.id)}>Remove</button></td>
        </tr>
      ))
      : null
  )

  processPayment = token => {
    let userCheckOut = {
			stripeToken: token,
			totalCost: this.calculateTotal(),
			cart: this.props.cart
    }
  }

  render () {
    const { items } = this.props;
    return (
      <div className="cart-container">
        {
          items.length === 0 ? 
            <div id="empty-cart">
              <h2 style={{textAlign: 'center'}}>Cart is Empty</h2>
            </div>
          : 
            <div id="cart">
              <h3 className="cart-intro">Your cart items:</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                    {this.showCartItems(items)}
                </tbody>
              </table>
              <div className="total">
                <h3>Total: ${this.state.total}</h3>
              </div>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({cart}) => {
  return { items: cart }
}

export default connect(mapStateToProps, actions)(Cart);