import React from 'react';

const Getintouch = () => {
  return (
    <div className='flex flex-col bg-black p-4 md:p-8'>
      <h1 className='text-yellow-500 font-serif mt-4 md:mt-10 text-3xl md:text-5xl'>
        Get In Touch With Us
      </h1>
      <div className='flex flex-col mt-4 md:flex-row md:mt-8'>
        <form className='flex-1'>
          <input
            className="w-full md:w-full mt-4 h-10 border rounded-md focus:outline-none focus:border-blue-500"
            type="text"
            id="name"
            name="name"
            placeholder='Name'
          />

          <input
            className="w-full md:w-full mt-4 h-10 border rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder='Email'
          />

          <input
            className="w-full md:w-full mt-4 h-10 border rounded-md focus:outline-none focus:border-blue-500"
            type="tel"
            id="phone"
            name="phone"
            placeholder='Phone No.'
          />

          <textarea
            className="w-full md:w-full mt-4 h-20 border rounded-md focus:outline-none focus:border-blue-500"
            id="message"
            name="message"
            placeholder='Message'
          />
          <button
            type="submit"
            className="w-full md:w-96 mt-4 mb-4 md:mb-10 bg-white text-black py-2 px-4 rounded-md hover:bg-yellow-400 focus:outline-none focus:border-blue-700"
          >
            Submit
          </button>
        </form>

        <div className='flex-1 ml-0 mt-10  md:mt-0 md:ml-8 md:mr-0'>
          <iframe
          className='mt-4 rounded-xl'
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.363091659729!2d77.0878362!3d28.4542159!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193b41b57679%3A0x73a32d17ee3b1e2b!2sBurkey!5e0!3m2!1sen!2sin!4v1702902969140!5m2!1sen!2sin"
            width="100%"
            height="260"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <button
            type="submit"
            className="w-1/2 md:w-44 mt-4 mb-10 bg-white text-black py-2 px-4 rounded-md hover:bg-yellow-400 focus:outline-none focus:border-blue-700"
          >
            Get Direction
          </button>
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
