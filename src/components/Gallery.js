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

// import "./Gallary.css";

const Gallary = () => {
  return(
   <div>
   <div className="flex justify-center items-center font-serif text-yellow-500 text-4xl p-5">
  Gallery
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      }}
    >
      <div className="flex flex-col mb-5  ">
        <div class=" flex-1">
          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Chicken-Biryani-with-bone-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Chicken-Biryani-with-bone-1024x1024.jpg"
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
              src="https://burkey.in/wp-content/uploads/2023/06/Chicken-Biryani-with-bone-1024x1024.jpg"
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 15,
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
              src="https://burkey.in/wp-content/uploads/2023/06/Chicken-Biryani-with-bone-1024x1024.jpg"
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
              src="https://burkey.in/wp-content/uploads/2023/06/Chicken-Biryani-with-bone-1024x1024.jpg"
            />
          </SwiperSlide>
        </div>
      </div>
    </Swiper> 
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 15,
        },
      }}
    >
      <div className=" mt-10">
        <div class=" mt-10">
          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Dal-Tadka-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Dal-Tadka-1024x1024.jpg"
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
              src="https://burkey.in/wp-content/uploads/2023/06/Dal-Tadka-1024x1024.jpg"
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
      spaceBetween={5}
      slidesPerView={6}
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
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1440: {
          slidesPerView: 6,
          spaceBetween: 15,
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
              src="https://burkey.in/wp-content/uploads/2023/06/Dal-Tadka-1024x1024.jpg"
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
              src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg"
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              alt="dish_image2"
              width={250}
              height={250}
              className="rounded-md"
              src="https://burkey.in/wp-content/uploads/2023/06/Dal-Tadka-1024x1024.jpg"
            />
          </SwiperSlide>
        </div>
      </div>
    </Swiper>
   </div>
  );
};
export default Gallary;
