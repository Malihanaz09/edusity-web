import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import User1 from '../../assets/images/user-1-dp2DpvM_.png'
import User2 from '../../assets/images/user-2-UK2CIdqi.png'
import User3 from '../../assets/images/user-3-BHRQSl0V.png'
import User4 from '../../assets/images/user-4-njZdDe5j.png'

import './slider.css'

function MySlider() {

        const settings = {
          dots: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 1000,
        };
  return (
    <>
<div className="slider-main">
        <div className="slider-container">
        <Slider {...settings}>
         {data.map((d, index) => (
            <div className="slider-content" key={index}>
              <div className="slider-title"> 

                <img src={d.img} alt={`${d.name}'s picture`} />
            
              <div className="slider-heading">
                <h3>{d.name}</h3>
                <p>{d.about}</p>
                </div>
              </div>
              <div>
                <p>{d.review}</p>
              </div>
              </div>
          ))}
          </Slider>
        </div>
      </div>

   </>
  );
}
const data = [
    {
     img: User1,
     name: 'Emily Williams',
     about: 'Edusity, USA',
     review: 'Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    },
    {
        img: User2,
        name: 'William Jackson',
        about: 'Edusity, USA',
        review: 'Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    },
    {
        img: User3,
        name: 'Emily Williams',
        about: 'Edusity, USA',
        review: 'Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    },
    {
        img: User4,
        name: 'William jackson',
        about: 'Edusity, USA',
        review: 'Choosing to pursue my degree at Edusity was one of the best decisions I`ve ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.'
    }
]

export default MySlider
