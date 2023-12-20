import React from 'react';

const Getintouch = () => {
  return (
    <div className=' bg-black'>
    <div className=' ml-2 md:ml-12    '>
      <h1 className='text-yellow-500 font-serif  text-3xl md:text-5xl'>
        Get In Touch With Us
      </h1>
      <div className='flex flex-col  mx-auto mt-4 md:flex-row md:mt-8'>
        <form className='flex-1 p-3 mx-auto md:w-1/2'>
        <input
            className="w-full mt-4 h-10 border rounded-md pl-3 focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder='Name'
          />
          <input
            className="w-full mt-4 h-10 border rounded-md pl-3 focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder='Email'
          />

          <input
            className="w-full mt-4 h-10 border rounded-md pl-3 focus:outline-none focus:border-blue-500"
            type="tel"
            id="phone"
            name="phone"
            placeholder='Phone No.'
          />

          <textarea
            className="w-full mt-4 h-20 border rounded-md pl-3 focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            placeholder='Message'
          />
          <div className='flex justify-end items-end'>
            <button
              type="submit"
              className="w-1/6 md:w-40 mt-4 mb-4 md:mb-10 bg-white text-black py-2 px-4 rounded-full  focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>

        <div className='flex-1 p-3 md:w-1/2 mx-auto mt-4 md:mt-0'>
          <iframe
            className='mt-4 mx-auto rounded-2xl'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.363091659729!2d77.0878362!3d28.4542159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193b41b57679%3A0x73a32d17ee3b1e2b!2sBurkey!5e0!3m2!1sen!2sin!4v1702902969140!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button
            type="submit"
            className="w-1/2 md:w-44 mt-5 mb-10 bg-white text-black py-2 px-4 rounded-full sm:items-center "
          >
            Get Direction
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Getintouch;
