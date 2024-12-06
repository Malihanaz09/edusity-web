// import React from 'react'
import MyForm from "../../Form"  
import './contactus.css'
import Msge from '../../../assets/images/msg-icon-ClKDHhj8.png'
import Email from '../../../assets/images/email.png'
import Phone from '../../../assets/images/phone.png'
import Location from '../../../assets/images/Untitled.png'

function Contactus() {
  return (
    <>
    <div id="contact"></div>
     <br />     
      <h6>Contact Us</h6>
      <h1>Get in Touch</h1>
      
      <div className="contact-container">  
     <div className="contact-left">
      <div className="contact-icon">
       <h3>Send us a message</h3>
       <img style={{width:'10%', borderRadius:"none"}} src={Msge} alt="" />
       </div>
       
       <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
      
       <div className="contact-icon">
       <img style={{width:'25px', borderRadius:"none"}}  src={Email} alt="" />
       <h5>Contact@GreatStack.dev</h5>
       </div>

       <div className="contact-icon">
       <img style={{width:'20px'}} src={Phone} alt="" />
       <h5>+1 123-456-7890</h5>
       </div>

       <div className="contact-icon">
       <img style={{width:'20px'}} src={Location} alt="" />
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
