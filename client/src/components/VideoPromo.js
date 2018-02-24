import React, { Component } from 'react';
import { Player } from 'video-react';

class VideoPromo extends Component {
  
  render () {
    return (
      <section id="video-container">
        <img className="drip-bg" src="../../img/drip.png" />
        <h2 className="saucy">Saucy</h2>
        <div className="video-layer">
          <Player
            src="../../vid/video-promo.mp4"
           />
        </div>
      </section>
    )
  }
}

export default VideoPromo