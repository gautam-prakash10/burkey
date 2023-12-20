import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="flex flex-col items-center bg-fuchsia-950">
      <div className="flex flex-col-reverse md:flex-row w-full max-w-screen-xl">
        {/* Left Section (Text) */}
        <div className="flex-1 p-5 md:p-10 items-center justify-center">
          <p className="text-4xl text-yellow-400 mb-5  font-serif mt-10 md:mt-0">About Burkey</p>
          <p className="font-sans text-lg md:text-xl text-white mb-5 mt-5">
            Burkey - Niwala Burkey delivers authentic and delectable North Indian and Mughali Cuisine. As the name symbolizes, our mouth-watering Punjabi Niwala will leave your taste buds craving for another Burkey. The true art of North Indian cooking lies in the subtle use and variation of spices which makes each dish different and exotic.
          </p>
          <button className="bg-white hover:bg-gray-200 text-black-500 py-2 px-4 rounded-3xl">Know More</button>
        </div>

        {/* Right Section (Image) */}
        <div className="flex-1 mt-10 md:mt-0 md:ml-10">
          <img src="https://burkey.in/wp-content/uploads/2023/06/Gif-Burkey-1.gif" alt="food-gif" className="w-full h-auto md:h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
