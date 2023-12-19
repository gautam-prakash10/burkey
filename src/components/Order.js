import React from 'react';
import "./Order.css";

const Order = () => {
    return (
        <div className="flex bg-black ">
            <div className="flex flex-row">
            <div className="flex flex-column">
            <div className='flex-1 ml-10 mt-10 items-left'>
            <p className='text-5xl text-yellow-400 mb-5'>Order in Bulk with Us</p>
            <p className='text-xl text-white mb-5 mt-5'>With Burkey, you can order in bulk with ease, whether you're feeding a crowd at a party, stocking up for a busy week, 
            or just craving some delicious North Indian cuisine. Our team of expert chefs and kitchen staff use only the freshest ingredients and 
            time-tested recipes to create meals that are sure to satisfy even the most discerning palates.
            But what really sets Burkey apart is our commitment to making the ordering process as simple and stress-free as possible.
            Our intuitive online ordering platform allows you to easily customize your order, 
            specify delivery preferences, and track your delivery in real-time - so you always know exactly when your food will arrive.
            </p>
            <button className='bg-white hover:bg-gray-200 text-black-500 py-2 px-4 mb-20 rounded-3xl'>Contact Us</button>
            </div>

            <div className="food flex-1 mb-20 ml-10 items-right">
          <img src="https://burkey.in/wp-content/uploads/2023/06/mob-fd.png" alt="food-gif" />
        </div>
            </div>
            </div>
        </div>
        )
    }
    
    export default Order;
