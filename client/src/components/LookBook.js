import React from 'react';
import Lightbox from 'react-images';

const LookBook = () => {
  return (
    <div>
      <div className="grid-container">
        <div className="lookbook-grid">
          <div>
            <img src="/img/about-image.jpg" alt=""/>
          </div>
          <div>
            <img src="/img/about-image2.jpg" alt=""/>
          </div>
          <div>
            <img src="/img/about-image3.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LookBook;