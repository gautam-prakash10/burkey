import React from "react";
import { Space } from "antd";

import {
  Autoplay,
  Navigation,
  Scrollbar,
  A11y,
  FreeMode,
  Grid,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

import "./Gallery.css";

const Gallery = () => {
  return(
   <div>
     <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      grid={{
          rows: 2,
        }}
      navigation={false}
      modules={[Autoplay, Navigation, FreeMode]}
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      scrollbar={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 2,

          spaceBetween: 10,
        },
        480: {
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
        },
      }}
    >
      <div className="">
        <div class="">
          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl94XFPlhk79IY1nteJCmLa_JzgA_2foNBLA&usqp=CAU"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Amritsari-Kulcha-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5e947b4fcacc7e7db1265d15b2d62a1f.jpg?fit=around|960:500&crop=960:500;*,*"
            />
          </SwiperSlide>
        </div>
        <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      grid={{
          rows: 2,
        }}
      navigation={false}
      modules={[Autoplay, Navigation, FreeMode]}
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      scrollbar={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 2,

          spaceBetween: 10,
        },
        480: {
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
        },
      }}
    ></Swiper>
        <div class="">
          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/6/20005096/94f360183bb780be2c3a10329de75616.jpg?fit=around|960:500&crop=960:500;*,*"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*"
            />
          </SwiperSlide>
        </div>
      </div>
    </Swiper> <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      grid={{
          rows: 2,
        }}
      navigation={false}
      modules={[Autoplay, Navigation, FreeMode]}
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      scrollbar={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 2,

          spaceBetween: 10,
        },
        480: {
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
        },
      }}
    >
      <div className="">
        <div class="">
          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl94XFPlhk79IY1nteJCmLa_JzgA_2foNBLA&usqp=CAU"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Amritsari-Kulcha-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5e947b4fcacc7e7db1265d15b2d62a1f.jpg?fit=around|960:500&crop=960:500;*,*"
            />
          </SwiperSlide>
        </div>
        <Swiper
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      grid={{
          rows: 2,
        }}
      navigation={false}
      modules={[Autoplay, Navigation, FreeMode]}
      spaceBetween={10}
      slidesPerView={3}
      freeMode={true}
      scrollbar={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      breakpoints={{
        0: {
          slidesPerView: 2,

          spaceBetween: 10,
        },
        480: {
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
        },
      }}
    ></Swiper>
        <div class="">
          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/6/20005096/94f360183bb780be2c3a10329de75616.jpg?fit=around|960:500&crop=960:500;*,*"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*"
            />
          </SwiperSlide>
        </div>
      </div>
    </Swiper>
   </div>
  );
};
export default Gallery;
