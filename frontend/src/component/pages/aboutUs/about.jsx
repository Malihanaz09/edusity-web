// import React from 'react'
import Video from '../../../assets/images/about-video.png'

function AboutUs() {
  return (
   <div className="container about">
    <div className="about-video">
       <img src={Video} alt="" />
    </div>
    <div className="about-content">
      <h6>ABOUT UNIVERSITY</h6>
       <h1>Nurturing Tomorrow`s Leaders Today</h1>
       <p>Embark on a transformative educational journey with our university`s comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
        <br />
        <br />
        With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
        <br />
        <br />
        Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
       </p>
       <br />
    </div>
   </div>
  )
}

export default AboutUs
