import React, { Component } from 'react';

const LeftArrow = (props) => {
  return (
    <div onClick={props.previousSlide} className="backArrow">
      <i class="fas fa-chevron-left"></i>
    </div>
  );
}

export default LeftArrow;