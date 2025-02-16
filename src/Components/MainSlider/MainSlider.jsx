import React from 'react'
import style from "./MainSlider.module.css"
import Slide1 from "../../assets/slider-image-1.jpeg"
import Slide2 from "../../assets/slider-image-2.jpeg"
import Slide3 from "../../assets/slider-image-3.jpeg"
import Slide4 from "../../assets/slider-2.jpeg"
import slide5 from "../../assets/grocery-banner-2.jpeg"
import Slider from 'react-slick'


export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true ,
    autoplaySpeed:1000
  };
  return (
 <>
 
 <div className="row">
 
      <div className="w-3/4">
      <Slider {...settings}> 
      <img src={Slide1} className=' w-full h-[400px] object-cover' alt="" />
      <img src={Slide4} className=' w-full h-[400px] object-cover' alt="" />
      <img src={slide5} className=' w-full h-[400px] object-cover' alt="" />
 </Slider>
    
      </div>
      <div className="w-1/4">
      <img src={Slide2}  className=' w-full  h-[200px] object-cover' alt="" />
      <img src={Slide3}className=' w-full  h-[200px] object-cover' alt="" />
      </div>
    </div>
  {/* <Slider {...settings}>

  </Slider> */}

 </>
  )
}
