import './style.css'
import React, { useRef,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonial = (props) => {
    const {testimoni} = props;

    const sliderRef = useRef(null);
    useEffect(() => {
      // console.log('sliderRef', sliderRef.current);
    }, []);

    const settings = {
        ref: sliderRef,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 512,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return ( 
        <div className="testimonial" id='testimonial'>
            <h2>Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
            <Slider {...settings}>
              {testimoni.map((item) => (
                  <div  className="card">
                      <div className="testimonial-left">
                          <img src={item.profile} alt="profile pict"/>
                      </div>
                      <div className="testimonial-right">
                          <img src={item.rate} alt="rate"/>
                              <p>{item.comment}</p>
                          <p>{item.username}</p>
                      </div>
                  </div>
              ))}
            </Slider>
            <div className='button-container'>
              <span className="dot-left" onClick={() => sliderRef.current.slickPrev()}><i className="arrow left"></i></span>
              <span className="dot-right" onClick={() => sliderRef.current.slickNext()}><i className="arrow right"></i></span>
            </div>
        </div>
     );
}
 
export default Testimonial;