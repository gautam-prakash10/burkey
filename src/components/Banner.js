import React from 'react';
//import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="flex bg-black ">

      <div className="flex flex-row">
        <div className="flex-1 mt-10 ml-10">
          <img src="https://burkey.in/wp-content/uploads/2023/06/Gif-Burkey-2.gif" alt="Banner" />
        </div>

        <div className='flex-1 ml-10 mt-10 justify-items-center'>
           <p className='text-6xl text-yellow-500 '> Welcome to Burkey</p>
           <p className='text-3xl text-white '>Delivering Happiness to your Doorstep</p>
           <button className='rounded-3xl bg-white w-24 h-10 '>
            <img className='p-2' src='https://burkey.in/wp-content/uploads/2023/06/swig.png '></img>
           </button>
           <button className='rounded-3xl bg-white ml-10 w-24 h-10 '> 
            <img className='p-2' src='https://burkey.in/wp-content/uploads/2023/06/zom.png'></img>
           </button>
        </div>

      </div>

      
      </div>
  );
};

export default Banner;
