import React, { Component } from 'react';
import { Player } from 'video-react';

class VideoPromo extends Component {
  
  render () {
    return (
      <section id="video-container">
        <div className="content">
          <div className="video-layer">
            <Player
              src="../../vid/video-promo.mp4"
            />
          </div>
          <div>
            <h2 className="promo-text">Coming soon...</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default VideoPromo