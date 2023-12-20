import React from 'react'; 
import { Autoplay, Navigation, Scrollbar, A11y, FreeMode } from 'swiper/modules';
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
    date: `2023-06-04`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `The paneer in paneer tikka was very soft and flavorful.`
  },
  {
    name: `Adite Tripathi`,
    date: `2023-06-04`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Amazing taste good ......ans good quality....`
  },
  {
    name: `Sachin Kapoor`,
    date: `2023-05-31`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Great Food, special Chicken Barra is an amazing dish must try, also the packaging for take away is great.`
  },
  {
    name: `Ritu Ingle`,
    date: `2023-04-26`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `In gurgaon for a trip, a friend suggested this place. Totally worth it! Ordered Mushroom do pyaza and Dahi kebab.`
  },
  {
    name: `Priyanshu Gautam`,
    date: `2023-04-24`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Ordered a large variety of dishes. The food was fresh and flavoursome.`
  },
  {
    name: `POOJA AYADAV`,
    date: `2023-05-20`,
    stars: `⭐️⭐️⭐️⭐️⭐️`,
    review: `Awesome food,I stumbled upon this place while searching for a good place for salads, and what a good find.`
  },
  {
    name: `sunil rai`,
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
                  spaceBetween={10}
                  slidesPerView={3}
                  freeMode={true}
                  scrollbar={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}

                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 10,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    }
                  }}
                  >
                  {data.map((d) => {

                    return (
                      <SwiperSlide key={d.name}>
                      <Reviews name={d.name} date={d.date} stars={d.stars} review={d.review} />
                      </SwiperSlide>
                    )
                    })}
                    <div className="bg-black">
                        <button className='bg-white hover:bg-gray-200 text-black-500 mb-5 mt-10 py-2 px-4 rounded-3xl'>Review Us</button>
                      </div>
                    </Swiper>
  )
           
}
export default Sliding
