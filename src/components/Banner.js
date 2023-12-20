import React from 'react';

const Banner = () => {
  return (
    <div className='flex flex-col md:max-w-screen-2xl mt-10 p-10 mx-auto md:mt-0 sm:flex-row bg-black'>
      
      {/* Left Section (Image) */}
      <div className='sm:flex-1 pl-4 mt-20 sm:pl-20 pr-4 sm:pr-20'>
        <img className='w-full' src='https://burkey.in/wp-content/uploads/2023/06/Gif-Burkey-2.gif' alt='Banner' />
      </div>

      {/* Right Section (Text and Buttons) */}
      <div className='flex flex-col justify-center items-center sm:flex-1 mt-5 sm:mt-0'>
        <p className='text-3xl sm:text-5xl lg:text-7xl mt-5 sm:mt-10 font-serif text-yellow-500 text-center sm:text-left'>
          Welcome to Burkey
        </p>
        <p className='text-base sm:text-xl lg:text-2xl md:text-xs ml-4 xl:text-3xl mt-4 sm:ml-20 font-sans text-white text-center sm:text-left'>
          Delivering Happiness to your Doorstep
        </p>
        <div className='flex flex-row justify-center  sm:justify-start mt-6'>
          <button className='rounded-full bg-white w-16 xl:w-36 xl:h-10  sm:w-16 h-8 sm:h-10 mx-2'>
            <img className='p-1  sm:p-2' src='https://burkey.in/wp-content/uploads/2023/06/swig.png' alt='Swiggy' />
          </button>
          <button className='rounded-full bg-white   mx-2 sm:ml-5 w-16 xl:w-36 xl:h-10 sm:w-16 h-8 sm:h-10'>
            <img className='p-1  sm:p-2 sm:pl-3' src='https://burkey.in/wp-content/uploads/2023/06/zom.png' alt='Zomato' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
