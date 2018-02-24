import React, { Component } from 'react';
import ProductGrid from './ProductGrid';
import Carousel from './carousel/Carousel';
import VideoPromo from './VideoPromo';

class Layout extends Component {
  constructor(props){
    super(props);
    this.state={
      video: {
        opacity: 0,
        left: 105
      }
    };
  }

  onScroll = () => {
    // const jordanShoe = document.getElementsByClassName('airjordan');
		// if (jordanShoe[0].offsetTop / 2 < window.scrollY) {
		// 	this.setState(() => {
		// 		return {
		// 			jordan: {
		// 				opactiy: 1,
		// 				right: -20,
		// 				left: 0
		// 			}
		// 		}
		// 	});
		// }
  }

  componentDidMount(){
      window.addEventListener('scroll',this.onScroll);
  }

  componentWillUnmount(){
       window.removeEventListener('scroll',this.onScroll);
  }
  
  render() {
    return (
      <div className="layout">
        <Carousel />
        <ProductGrid />
        <VideoPromo />
      </div>
    );
  }
}

export default Layout;
