import React, { Component } from 'react';

const SlideOne = (props) => {

  let background = {
    backgroundImage: "url('../../img/lakertee.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return <div style={background} className="slide"></div>
}

export default SlideOne;