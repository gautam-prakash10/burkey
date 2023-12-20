
import React from 'react';

const Menu = () => {
  return (
    <div className='bg-black  pb-10 pt-10'>
      <div className='flex flex-col md:flex-row'>
        <div className='md:w-1/2'>
          <h2 className='font-serif text-yellow-400 ml-2 md:ml-12 text-5xl'>
            Our Menu
          </h2>
        </div>
        <div className='md:w-1/2 mt-6 md:mt-10 ml-4 md:ml-10 mb-10 md:mb-0 mr-4 md:mr-10'>
  <p className='font-sans text-lg md:text-xl text-white'>
    At Burkey, we pride ourselves on offering a diverse and delicious menu of North Indian cuisine, designed to satisfy even the most discerning palates. From classic dishes like butter chicken and tandoori chicken to vegetarian favorites like paneer tikka and chana masala, our menu has something for everyone. Whether you're in the mood for something spicy and flavorful or mild and creamy, our menu has it all.
  </p>
  <div className='flex items-end'>
    <button className='bg-white rounded-full w-24 mb-5 xl:w-28 md:w-16 h-10 mt-4 ml-auto'>
     Menu
    </button>
  </div>
</div>

        </div>
      </div>
    
  );
};

export default Menu;
