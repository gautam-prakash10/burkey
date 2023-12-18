import React from 'react';

import React from 'react';
import "./About.css"

const About = () => {
  return (
      <div className="flex bg-black ">
          <div className="flex flex-row">
          <div className="flex flex-column">
          <div className='flex-1 ml-10 mt-10 items-left'>
          <p className='text-5xl text-yellow-400 mb-5'>About Burkey</p>
          <p className='text-xl text-white mb-5 mt-5'>Burkey - Niwala Burkey delivers authentic and Delectable North Indian and Mughali Cuisine.
           As the name symbolises, our mouth watering Punjabi Niwala will leave your taste buds carving for another Burkey. 
          The true art of North Indian cooking lies in the subtle use and variation of spices which makes each dish different and exotic
          </p>
          <button className='bg-white hover:bg-gray-200 text-black-500 py-2 px-4 rounded-3xl'>Know More</button>
          </div>

          <div className="flex-1 mt-10 ml-10 items-right">
        <img src="https://burkey.in/wp-content/uploads/2023/06/Gif-Burkey-1.gif" alt="food-gif" />
      </div>
          </div>
          </div>
      </div>
      )
  }
    
    export default About
  };
    
    export default About
