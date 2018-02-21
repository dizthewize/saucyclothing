import React, { Component } from 'react';

const RightArrow = (props) => {
  return (
    <div onClick={props.nextSlide} className="nextArrow">
      <i class="fas fa-chevron-right"></i>
    </div>
  );
}

export default RightArrow;