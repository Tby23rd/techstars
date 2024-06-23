import Image from 'next/image';
import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div id="Contacts" className=" mx-auto py-10 px-5 ">
      <h1 className="text-2xl font-bold text-center mb-5 ">Contact Us</h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full shadow rounded-2xl p-4 md:w-1/2">
          <form className="flex flex-col gap-2">
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24  font-bold " htmlFor="name">Name</label>
              <input className="p-2 border border-blackrounded-2xl text-black bg-white w-full" type="text" id="name" name="name" required />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24  font-bold " htmlFor="email">Email</label>
              <input className="p-2 border border-blackrounded-2xl text-black bg-white w-full" type="email" id="email" name="email" required />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24  font-bold " htmlFor="message">Message</label>
              <textarea className="p-2 border border-blackrounded-2xl text-black bg-white w-full" id="message" name="message" rows={4} required></textarea>
            </div>
            <button className="p-2 mt-4   rounded-2xl transition duration-300 ease-in-out hover:bg-blue-200 font-bold bg-blue-100">Submit</button>
          </form>
        </div>
        
        <div className="hidden md:block md:w-1/2 m-4 relative h-72">
          <Image
            src="/images/latte.jpg"
            alt="Latte"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
