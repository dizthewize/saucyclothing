import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = (props) => {
  return (
    <section className="grid-container">
      <div className="image-grid">
        <Link to='/product/1'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/2'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/3'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/4'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/5'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/6'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/7'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/8'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/9'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/10'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/11'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
        <Link to='/product/12'>
          <img src="/img/london.png" alt="Laker t-shirt"/>
        </Link>
      </div>
    </section>
  )
}

export default ProductGrid;