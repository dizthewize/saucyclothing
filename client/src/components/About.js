import React from 'react'

const About = () => {
  return (
    <div className="layout">
      <div className="about">
        <div className="intro">
          <div className="intro-text">
            <h2>We make products for all customers, thoughtfully.</h2>
            <p>We believe that you shouldn’t have to compromise when it comes to the products you use, so ours are designed to be effective and to provide a great experience.</p>
          </div>
        </div>
        <div className="description">
          <div>
            <img src="/img/about-image.jpg" alt=""/>
          </div>
          <div className="desc-text">
            <p>
            The collection reflects the enduring appeal of easy, effortless American style and reimagines it for a new generation. No more endless browsing and no more boxes full of random items that don't fit your style</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;