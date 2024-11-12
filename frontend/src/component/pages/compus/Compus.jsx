// import React from 'react'
import Campus1 from '../../../assets/images/cpmpus-photo-1.png'
import Campus2 from '../../../assets/images/cpmpus-photo-2.png'
import Campus3 from '../../../assets/images/cpmpus-photo-3.png'
import Campus4 from '../../../assets/images/cpmpus-photo-4.png'

function Compus() {
  return (
    <div className="container compus">
      <h6>Gallery</h6>
      <h1>Campus Photos</h1>
      <div className="compus-img">
           <img className='compus-img' src={Campus1} alt="" />
           <img className='compus-img' src={Campus2} alt="" />
           <img className='compus-img' src={Campus3} alt="" />
           <img className='compus-img' src={Campus4} alt="" />

      </div>
      <button>See more here</button>
    </div>
  )
}

export default Compus
