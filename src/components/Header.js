import React from 'react';

const Header = () => {
  return (
    <div className='bg-black fixed w-full top-0 z-50'>
      <div className='pt-6 flex justify-center'>
        <img
          src='https://burkey.in/wp-content/uploads/2023/06/burkey-logo.png'
          className='mx-auto'
          alt='header'
        />
      </div>
    </div>
  );
};

export default Header;
