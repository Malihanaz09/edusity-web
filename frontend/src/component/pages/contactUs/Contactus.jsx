// import React from 'react'
import MyForm from "../../Form"  
import './contactus.css'
// import msg-icon from '../../../assets/images/msg-icon-ClKDHhj8.png'
// import Email-img from '../../../assets/images/email.png'
// import Phone-img from '../../../assets/images/phone.png'
// import Location-img from '../../../assets/images/Untitled.png'

function Contactus() {
  return (
    <>
      <h6>Contact Us</h6>
      <h1>Get in Touch</h1>
      
      <div className="about-container">  
     <div className="contact-left">
      <div>
       <h3>Send us a message</h3>
       <img src='' alt="" />
       </div>
       
       <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
      
       <div>
       <img src="" alt="" />
       <h5>Contact@GreatStack.dev</h5>
       </div>

       <div>
       <img src="" alt="" />
       <h5>+1 123-456-7890</h5>
       </div>

       <div>
       <img src="" alt="" />
       <h5>77 Massachusetts Ave, Cambridge MA 02139, United States</h5>
       </div>
    </div>  
<div className="contact-right">
    <MyForm/>
</div>

      </div>
    

    </>
  )
}

export default Contactus
