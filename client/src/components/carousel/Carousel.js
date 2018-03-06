import React, { Component } from 'react';
import { connect } from 'react-redux';
import Arrow from './Arrows';
import ImageSlide from './ImageSlide';

class Carousel extends Component {
  constructor (props) {
		super(props);
		
		this.state = {
			currentImageIndex: 0
    };
	}
	

  previousSlide = () => {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
		
		this.setState({
			currentImageIndex: index
		});
  }
  
  nextSlide = () => {
		const lastIndex = imgUrls.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

		this.setState({
			currentImageIndex: index
		});
	}
	
	
  
  render () {
		const { images } = this.props;
		console.log(images);
    return (
			<div className="carousel-container">
				<h2 className="carousel-text">Saucy</h2>
				<div className="carousel">
					<Arrow direction="left" clickFunction={ this.previousSlide } glyph="&#9664;" />
					<ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
					<Arrow direction="right" clickFunction={ this.nextSlide } glyph="&#9654;" />
				</div>
			</div>
    )
  }
}

const imgUrls = [
	"/img/lakertee.png", 
	"/img/london.png",
	"/img/samplhornetspullover.png",
	"/img/samplbraves.png"
];

const mapStateToProps = ({ products }) => {
	return { images: products.images };
}


export default connect(mapStateToProps)(Carousel);