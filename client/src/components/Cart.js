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

  componentWillMount() {
		window.scrollTo(0, 0);
	}
  
  calculateTotal = (cart) => {
    return cart.reduce((total, item) => {
      total += item.price;
      return total
    }, 0)
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
    const { stripePayment, user, history } = this.props
    let userCheckOut = {
			stripeToken: token,
			totalCost: this.calculateTotal(this.props.items),
      cart: this.props.items,
      email: user.email
    }

    stripePayment(userCheckOut)
    history.push('/')
  }

  render () {
    const { items } = this.props;
    return (
      <div>
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
                <h3>Total: ${this.calculateTotal(items)}</h3>
                <StripeCheckout
                  amount={this.calculateTotal(items) * 100}
                  token={token => this.processPayment(token)}
                  stripeKey={process.env.REACT_APP_STRIPE_KEY}
                />
              </div>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = ({cart, user}) => ({
   items: cart,
  user
})

export default connect(mapStateToProps, actions)(Cart);