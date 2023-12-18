import React from 'react'; 
import {Space} from 'antd';


const Gallery = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center py-10 px-4 md:flex-row">

        {/* Left Column */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:mr-5">
          <h1 className="text-5xl text-yellow-400 mb-5 text-center">Gallery</h1>
          <div className="md:flex md:flex-row md:justify-between md:space-x-4">
            <img className="md:w-1/3 rounded" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl94XFPlhk79IY1nteJCmLa_JzgA_2foNBLA&usqp=CAU" alt="food-1" />
            <img className="md:w-1/3 rounded" src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*" alt="food-2" />
            <img className="md:w-1/3 rounded" src="https://burkey.in/wp-content/uploads/2023/06/Amritsari-Kulcha-1024x1024.jpg" alt="food-3" />
          </div>
          <div className="md:flex md:flex-row md:justify-between md:space-x-4 mt-4">
            <img className="md:w-1/3 rounded" src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg" alt="food-4" />
            <img className="md:w-1/3 rounded" src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg" alt="food-5" />
            <img className="md:w-1/3 rounded" src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5e947b4fcacc7e7db1265d15b2d62a1f.jpg?fit=around|960:500&crop=960:500;*,*" alt="food-6" />
          </div>
        </div>

        {/* Right Column */}
        <div className="md:w-1/2">
          <div className="md:flex md:flex-row md:justify-between md:space-x-4">
            <img className="md:w-1/3 rounded" src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg" alt="food-7" />
            <img className="md:w-1/3 rounded" src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg" alt="food-8" />
            <img className="md:w-1/3 rounded" src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg" alt="food-9" />
          </div>
          <div className="md:flex md:flex-row md:justify-between md:space-x-4 mt-4">
            <img className="md:w-1/3 rounded" src="https://b.zmtcdn.com/data/pictures/chains/6/20005096/94f360183bb780be2c3a10329de75616.jpg?fit=around|960:500&crop=960:500;*,*" alt="food-10" />
            <img className="md:w-1/3 rounded" src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg" alt="food-11" />
            <img className="md:w-1/3 rounded" src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*" alt="food-12" />
          </div>
          <div className="mt-10">
            <h2 className="text-4xl text-yellow-400 mb-4 text-center">Instagram</h2>
            <div className="flex justify-center">
              <button className="bg-white hover:bg-gray-200 text-black-500 py-1 px-4 mb-4">Follow us</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Gallery
