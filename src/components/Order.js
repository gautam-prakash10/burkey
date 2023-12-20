import React from 'react';

const Order = () => {
  return (
    <div className="flex flex-col md:flex-row pb-10 pt-10 bg-black">
      <div className="md:w-1/2 ml-2 md:ml-12  mx-auto">
        <div className="flex-1  mt-10 items-left">
          <p className="text-3xl md:text-5xl text-yellow-400 font-serif  mb-5">Order in Bulk with Us</p>
          <p className="text-lg md:text-xl text-white  mb-5 mt-5">
            With Burkey, you can order in bulk with ease, whether you're feeding a crowd at a party, stocking up for a busy week, or just craving some delicious North Indian cuisine. Our team of expert chefs and kitchen staff use only the freshest ingredients and time-tested recipes to create meals that are sure to satisfy even the most discerning palates. <br/>What sets Burkey apart is our commitment to making the ordering process as simple and stress-free as possible. Our intuitive online ordering platform allows you to easily customize your order, specify delivery preferences, and track your delivery in real-time - so you always know exactly when your food will arrive.
          </p>
          <button className="bg-white hover:bg-gray-200 text-black py-2 px-4 md:px-6  rounded-3xl mt-4 self-end">
            Contact Us
          </button>
        </div>
     </div>

      <div className="md:w-1/2 mt-10 md:mt-0   md:ml-0 items-center">
        <img src="https://burkey.in/wp-content/uploads/2023/06/mob-fd.png" alt="food-gif"  className=" w-full ml-10 mt-16 md:w-auto" />
      </div>
    </div>
  );
};

export default Order;
