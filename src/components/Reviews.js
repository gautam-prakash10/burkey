import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import "./Reviews.css";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// Import Swiper React components


// Import Swiper styles


  
const Reviews = ({ name, img, date, stars, review }) => {
      return (
                <div className="flex bg-black">
                
                  <div className="flex flex-col mx-auto mt-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                      
                      
                              <div className="flex-container">
                                  <div key={name} className="bg-white text-black rounded-l transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-200 ...">
                                    <div className="card flex flex-col justify-center items-center gap-1 p-5 rounded-xl">
                                      <img className="images w-20 h-20 mt-n10 rounded-full justify-center " src={img} alt="" />
                                      <p className="font-bold ">{name}</p>
                                      <p className="">{date}</p>
                                      <p className="">{stars}</p>
                                      <p className="flex-1 font semi-bold text-center ">{review}</p>
                                  </div>
                                </div>
                              </div>
                      
                   </div>
                  </div>
                </div>
  )
}
    export default Reviews

