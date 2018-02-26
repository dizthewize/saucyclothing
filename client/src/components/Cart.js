import React, { Component } from 'react'

class Cart extends Component {

  showCartItems = (items) => (
    items.length > 0 ?
      items.map(item => (
        <tr key={item.id}>
          <td>Name</td>
          <td>Size</td>
          <td>Price</td>
        </tr>
      ))
      : null
  )

  render () {
    return (
      <div className="cart-container">
        <h3>Your cart items:</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hello</td>
              <td>My</td>
              <td>Price</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Cart;