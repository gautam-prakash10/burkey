import React from 'react';

const About = () => {
    return (
      <div className="bg-black">
        <div className="container mx-auto flex flex-row md:flex-col ml-10  justify-center py-10 px-4">
          <div className="flex-1 items-left md:w-1/2">
            <p className="text-5xl text-yellow-400 mb-5">About Burkey</p>
            <p className="text-xl text-white mb-5 mt-5">
              Burkey - Niwala Burkey delivers authentic and delectable North Indian and Mughali Cuisine. As the name symbolizes, our mouth-watering Punjabi Niwala will leave your taste buds craving for another Burkey. The true art of North Indian cooking lies in the subtle use and variation of spices which makes each dish different and exotic.
            </p>
            <button className="bg-white hover:bg-gray-200 text-black-500 py-2 px-4 rounded-3xl">
              Know More
            </button>
          </div>
  
          <div className="flex-1 md:w-1/2 mt-10 md:mt-0 items-right">
            <img
              src="https://burkey.in/wp-content/uploads/2023/06/Gif-Burkey-1.gif"
              alt="food-gif"
              className="w-full rounded"
            />
          </div>
        </div>
      </div>
    );
  };
    
    export default About
