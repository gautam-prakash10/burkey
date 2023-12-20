import React from 'react'; 
import { Autoplay, Navigation, Scrollbar,  FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';
import Reviews from "./Reviews";
import "./Reviews.css";


const data = [ 
  {
    name: `Harsh Vardhan`,
    img:`https://thumbs.dreamstime.com/b/icon-profile-color-red-not-shadow-icon-profile-color-red-circle-color-dark-red-background-color-white-194702104.jpg`,
    date: `2023-06-04`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `The paneer in paneer tikka was very soft and flavorful.`
  },
  {
    name: `Adite Tripathi`,
    img:`https://thumbs.dreamstime.com/b/icon-profile-color-red-not-shadow-icon-profile-color-red-circle-color-dark-red-background-color-white-194702104.jpg`,
    date: `2023-06-04`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Amazing taste good ......ans good quality....`
  },
  {
    name: `Sachin Kapoor`,
    img:`https://thumbs.dreamstime.com/b/icon-profile-color-red-not-shadow-icon-profile-color-red-circle-color-dark-red-background-color-white-194702104.jpg`,
    date: `2023-05-31`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Great Food, special Chicken Barra is an amazing dish must try, also the packaging for take away is great.`
  },
  {
    name: `Ritu Ingle`,
    img:`https://thumbs.dreamstime.com/b/icon-profile-color-red-not-shadow-icon-profile-color-red-circle-color-dark-red-background-color-white-194702104.jpg`,
    date: `2023-04-26`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `In gurgaon for a trip, a friend suggested this place. Totally worth it! Ordered Mushroom do pyaza and Dahi kebab.`
  },
  {
    name: `Priyanshu Gautam`,
    img:`https://thumbs.dreamstime.com/b/icon-profile-color-red-not-shadow-icon-profile-color-red-circle-color-dark-red-background-color-white-194702104.jpg`,
    date: `2023-04-24`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Ordered a large variety of dishes. The food was fresh and flavoursome.`
  },
  {
    name: `POOJA AYADAV`,
    img:`https://thumbs.dreamstime.com/b/icon-profile-color-red-not-shadow-icon-profile-color-red-circle-color-dark-red-background-color-white-194702104.jpg`,
    date: `2023-05-20`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Awesome food,I stumbled upon this place while searching for a good place for salads, and what a good find.`
  },
  {
    name: `sunil rai`,
    img:`https://thumbs.dreamstime.com/b/icon-profile-color-red-not-shadow-icon-profile-color-red-circle-color-dark-red-background-color-white-194702104.jpg`,
    date: `2023-04-23`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `It may look like your another average neighborhood cafe, but Burkey is anything but!
    I ordered Dahi Kebabs. The crust was crisp, flavorful, and chewy.`
  }

  
]


 const Sliding = () => {
  
       return (
                  <Swiper className=''
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                 
                  pagination={{
                    clickable: false,
                  }}
                  navigation={true}
                  modules={[Autoplay, Navigation, Scrollbar, FreeMode]}
                  spaceBetween={30}
                  slidesPerView={4}
                  freeMode={true}
                  scrollbar={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}

                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                    1440:{
                      slidesPerView:  4,
                      spaceBetween: 50,
                    }
                  }}
                  >
                  {data.map((d) => {

                    return (
                      <SwiperSlide key={d.name}>
                      <Reviews name={d.name} img={d.img} date={d.date} stars={d.stars} review={d.review} />
                      </SwiperSlide>
                    )
                    })}
                    <div className="bg-black ">
                        <button className=' font-semi-bold bg-white  hover:bg-gray-200 text-black-500 mb-5 mt-10 ml-5 py-2 px-6 rounded-3xl'>Review Us</button>
                      </div>
                    </Swiper>
  )
           
}
export default Sliding;
