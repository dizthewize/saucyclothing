import React, { Component } from 'react';
import { Player } from 'video-react';

class VideoPromo extends Component {
  
  render () {
    return (
      <section id="video-container">
        <div className="video-layer">
          <Player
            src="../../vid/video-promo.mp4"
           />
        </div>
        <div>
          <h2>Coming soon...</h2>
        </div>
      </section>
    )
  }
}

export default VideoPromo