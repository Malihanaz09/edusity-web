// import React from 'react'
import Program1 from '../../../assets/images/program-1-DA_EvTPy.png'
import Program2 from '../../../assets/images/program-2-DRqwF0EM.png'
import Program3 from '../../../assets/images/program-3-C0g4YULi.png'
import hover1 from '../../../assets/images/hoverimg.png'
import hover2 from '../../../assets/images/hoverimg2.png'
import hover3 from '../../../assets/images/hoverimge3.png'

import './program.css'

function Program() {

  const images = [
    { id: 1, defaultSrc: Program1, hoverSrc: hover1, heading: "Heading 1" },
    { id: 2, defaultSrc: Program2, hoverSrc: hover2, heading: "Heading 2" },
    { id: 3, defaultSrc: Program3, hoverSrc: hover3, heading: "Heading 3" },
  ];

  return (
    <div className='program-container' id='program'>
      <h6>Our PROGRAM</h6>
      <h1>What We Offer</h1>
<div className="hover-container">
      {images.map((image) => (
        <div key={image.id} className="hover-card">
          <img
            className="background-image"
            src={image.defaultSrc}
            alt={`Image ${image.id}`}
          />
          <div className="overlay">
            <img className="hover-image" src={image.hoverSrc} alt="Hover" />
            <h2 className="overlay-heading">{image.heading}</h2>
          </div>
        </div>
      ))}
    </div>

    </div>

    
  )
}

export default Program

