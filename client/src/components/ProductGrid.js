import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const ProductGrid = (props) => {
  const Product = () => {
    const { products } = props;
    return products.map(product => (
      <Link key={product._id} to={`/product/${product._id}`}>
        <img src={product.imgPath}/>
      </Link>
    ))
  }
  
  return (
    <section className="grid-container">
      <div className="image-grid">
        {Product()}
      </div>
    </section>
  )
}

const mapStateToProps = ({products}) => {
  return { products: products.products };
}


export default connect(mapStateToProps)(ProductGrid);