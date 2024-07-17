import React from 'react';
import { Button } from './ui/button';
const ContactForm = () => {
  return (
    <div className='px-12 py-12 bg-black'>
      <div className="flex flex-col justify-center items-center py-10 space-y-6 rounded-md bg-yellow-500">
        <h1 className="text-6xl font-bold text-center text-white ">CONTACT US</h1>
        <p className="text-center text-2xl mb-2 text-white underline ">If you face any problem contact us</p>
        <form className="space-y-8 w-full max-w-2xl ">
          <div className="flex items-center space-x-6">
            <label htmlFor="name" className="block font-semibold text-white text-2xl mb-2 w-1/4 text-left">Name</label>
            <input type="text" id="name" required className="bg-transparent border-white px-3 py-2 border-2 rounded-lg flex-grow" />
          </div>
          <div className="flex items-center space-x-6">
            <label htmlFor="email" className="block font-semibold text-white text-2xl mb-2 w-1/4 text-left">Email</label>
            <input type="email" id="email" required className="bg-transparent border-white px-3 py-2 border-2 rounded-lg flex-grow" />
          </div>
          <div className="flex items-center space-x-6">
            <label htmlFor="message" className="block font-semibold text-white text-2xl mb-2 w-1/4 text-left">Message</label>
            <textarea id="message" required className="bg-transparent border-white px-3 py-2 border-2 rounded-lg flex-grow h-32"></textarea>
          </div>
          <div className="flex justify-center">
            <Button variant={'outline'} type="submit" className="px-6 py-2 bg-white text-yellow-500 text-xl font-bold rounded-md hover:bg-gray-200">
              SUBMIT NOW
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
