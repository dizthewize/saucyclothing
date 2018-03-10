import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProduct, addToCart } from '../actions';

class Product extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      shirt: props.product,
      sizes: ['sm','md','lg','xl'],
      sizeError: '',
      cartError: ''
    }
  }

  componentDidMount() {
    const { getProduct } = this.props;
    getProduct(this.props.match.params.id);
  }

  change = (e) => {
    let name = e.target.name
    let value = (e.target.type === "checkbox") ? e.target.checked : e.target.value

    this.setState({
      [name]: value
    })
  }

  sizes = () => {
    const { sizes } = this.state;
    return sizes.map(item => (
      <option key={item} value={item}>{item}</option>
    ));
  }

  addProductToCart = (e) => {
    const { sizes, shirt } = this.state;
    const { product, addToCart, history, cart, user } = this.props;

    if (!user) {
      history.push('/')
    } else {
      let isError = false
      let errors = {};

      if (!this.state.size || this.state.size === '') {
        isError = true;
        errors.sizeError = 'You must first select a size';
      }

      if (isError) {
        this.setState({
          ...this.state,
          ...errors
        })
      } else {
        isError = false;
        this.setState({ sizeError: ''})

        let item = {};

        item.id = product._id;
        item.name = product.name;
        item.size = this.state.size;
        item.price = product.price;
        addToCart(item);
        history.push('/cart');
      }
    }
  }

  render () {
    const { product, cart } = this.props;
    console.log(this.state.shirt);
    return (
      <div id="product">
        <div className="product-container">
          <div className="image"><img src={product.imgPath} /></div>
          <div className="description">
            <h2 className="product-name">{product.name}</h2>
            <div className="product-description">{product.description}</div>
          </div>
          <div className="buttons">
            {this.state.cartError && <p>{this.state.cartError}</p>}
            {this.state.sizeError && <p>{this.state.sizeError}</p>}
            <ul className="btn-list">
              <li className="list-item"><select name="size" className="size-btn" onChange={this.change}>
              <option value="">Size</option>
              {this.sizes()}
            </select></li>
              <li className="list-item">
                <button type="submit" className="cart-btn" onClick={this.addProductToCart}>${product.price}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({products, cart, user}) => ({
  product: products.product,
  cart,
  user
})

const mapDispatchToProps = {
  getProduct,
  addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
