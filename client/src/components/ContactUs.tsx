import React from 'react';
import { Button } from './ui/button';

const ContactForm = () => {
  return (
    <div className='px-4 py-12 bg-black'>
      <div className="flex flex-col justify-center items-center py-10 space-y-6 rounded-md bg-yellow-500">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white">CONTACT US</h1>
        <p className="text-lg md:text-2xl mb-2 text-center text-white underline">If you face any problem contact us</p>
        <form className="space-y-6 w-full px-4 md:px-0 max-w-md md:max-w-2xl">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <label htmlFor="name" className="block font-semibold text-white text-xl md:text-2xl mb-2 w-full md:w-1/4 text-left">Name</label>
            <input type="text" id="name" required className="bg-transparent border-white px-3 py-2 border-2 rounded-lg flex-grow w-full" />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <label htmlFor="email" className="block font-semibold text-white text-xl md:text-2xl mb-2 w-full md:w-1/4 text-left">Email</label>
            <input type="email" id="email" required className="bg-transparent border-white px-3 py-2 border-2 rounded-lg flex-grow w-full" />
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <label htmlFor="message" className="block font-semibold text-white text-xl md:text-2xl mb-2 w-full md:w-1/4 text-left">Message</label>
            <textarea id="message" required className="bg-transparent border-white px-3 py-2 border-2 rounded-lg flex-grow w-full h-32"></textarea>
          </div>
          <div className="flex justify-center">
            <Button variant={'outline'} type="submit" className="px-6 py-2 bg-white text-yellow-500 text-lg md:text-xl font-bold rounded-md hover:bg-gray-200">
              SUBMIT NOW
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
