import React, { Component } from 'react';
import ProductGrid from './ProductGrid';
import Carousel from './carousel/Carousel';

class Layout extends Component {
  
  render() {
    return (
      <div className="layout">
        <Carousel />
        <ProductGrid />
      </div>
    );
  }
}

export default Layout;
