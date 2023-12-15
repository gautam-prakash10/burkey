import React from 'react'; 
import {Space} from 'antd';


const Gallery = () => {
  
  return (
    <div className="flex bg-black ">
       
    <div className="flex flex-column">
    <div className='flex-1 ml-10 mt-10 items-center'>
        <h1 className='text-5xl text-yellow-400 mb-5' style={{ textAlign: 'center' }}>Gallery</h1>
            <div dir="ltr">
        <div class="hover:snap-x ...">
        <div className="flex-1 mt-10 ml-5 mr-10">
        <div className=" flex flex-row">


        <Space size={20}>
  <div class=" snap-start ..." >
  <img style={{ width: 1050, height: 220 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl94XFPlhk79IY1nteJCmLa_JzgA_2foNBLA&usqp=CAU" />
  </div>
  <div class=" snap-start ...">
  <img style={{ width: 1020, height: 220 }} src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*" />
  </div>
  <div class=" snap-start ...">
  <img src="https://burkey.in/wp-content/uploads/2023/06/Amritsari-Kulcha-1024x1024.jpg" />
  </div>
  <div class=" snap-start ...">
  <img src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg" />
  </div>
  <div class=" snap-start ...">
  <img src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg" />
  </div>
  <div class=" snap-start ...">
  <img style={{ width: 1050, height: 220 }} src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5e947b4fcacc7e7db1265d15b2d62a1f.jpg?fit=around|960:500&crop=960:500;*,*" />
  </div>

    </Space>
</div>
  </div>
  </div>
</div>
</div>



<div dir="rtl>">

<div class="hover:snap-x ...">
        <div className="flex-1 mt-10 ml-5 mr-10">
        <div className=" flex flex-row">
        <Space size={20}>
  <div class=" snap-start ...">
  <img src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg" />
  </div>
  <div class=" snap-start ...">
 <img src="https://burkey.in/wp-content/uploads/2023/06/Rampuri-Paratha-Red-Chillies-1024x1024.jpg" />
  </div>
  <div class=" snap-start ...">
 <img src="https://burkey.in/wp-content/uploads/2023/06/Mirchi-Paratha-Green-Chillies-1024x1024.jpg" />
  </div>
  <div class=" snap-start ...">
  <img style={{ width: 1050, height: 220 }} src="https://b.zmtcdn.com/data/pictures/chains/6/20005096/94f360183bb780be2c3a10329de75616.jpg?fit=around|960:500&crop=960:500;*,*" />
  </div>
  <div class=" snap-start ...">
  <img src="https://burkey.in/wp-content/uploads/2023/06/Tandoori-Roti-1024x1024.jpg" />
  </div>
  <div class=" snap-start ...">
  <img style={{ width: 1050, height: 220 }} src="https://b.zmtcdn.com/data/pictures/chains/8/20598808/5bf834eaa9f7d42385b14eed1f11f128.jpg?fit=around|750:500&crop=750:500;*,*" />
  </div>
  </Space>
  </div>
  </div>
</div>
</div>



           <div className='flex-1 ml-10 mt-10'>
            <h2 className='text-center text-4xl text-yellow-400 mb-10'>Instagram</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh'}}>
            <button className='bg-white hover:bg-gray-200 text-black-500 py1 px-4 mb-20'>Follow us</button>
            </div>

      </div>
      </div>
      </div>
  
        )
    }
export default Gallery