import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import "./Reviews.css";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';

  
const Reviews = () => {
  //  const settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 50,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //  };
      
    return (
      <div className="flex bg-black">
      <div className="flex flex-col w-full md:w-3/4 mx-auto mt-5">
        <h2 className="text-4xl text-yellow-400 mb-10 text-center">Google Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex-container">
              {data.map((d) => {
               
                return (
                  <div key={d.name} className="bg-white text black rounded-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">

                   <div className="flex flex-col justify-center items-center gap-4 p-4">
                  <p className="flex font-bold">{d.name}</p>
                  <p className="flex-1">{d.date}</p>
                  <p>{d.stars}</p>
                  <p className="flex-1 font semi-bold text-center">{d.review}</p>
                   </div>
                </div>
                )
              })}
              </div>
              </div>
              <div className="container">
           <button className='bg-white hover:bg-gray-200 text-black-500 mb-5 mt-10 py-2 px-2 rounded-3xl'>Review Us</button>
            </div>
            </div>
            </div>
      
        )
           
   }
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
    
    export default Reviews
