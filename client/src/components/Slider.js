import React, { Component } from 'react';
import RightArrow from './RightArrow';
import LeftArrow from './LeftArrow';
import SlideOne from './slides/SlideOne';
import SlideTwo from './slides/SlideTwo';
import SlideThree from './slides/SlideThree';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideCount: 1
    }

  }

  nextSlide = () => {
    this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousSlide = () => {
    this.setState({ slideCount: this.state.slideCount - 1 })
  }

  render() {

    return (
      <div className="slider">
    
        { this.state.slideCount === 1 ? <SlideOne /> : null }
        { this.state.slideCount === 2 ? <SlideTwo /> : null }
        { this.state.slideCount === 3 ? <SlideThree /> : null }

        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />

      </div>
    );
  }
}