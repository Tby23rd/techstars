import React from 'react';
import Image from 'next/image';

const BookRes: React.FC = () => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  const currentTime = new Date().toISOString().split('T')[1].slice(0, 5); // Get current time in HH:mm format

  return (
    <div className=" mx-auto py-10 px-5 bg-blue-100 rounded-2xl shadow-lg relative">
      <h1 className="text-2xl font-bold text-center mb-5 ">Book a Reservation</h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/2">
          <form className="flex flex-col gap-2">
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24 " htmlFor="date">Date:</label>
              <input className="p-2 border border-white rounded-2xl text-black bg-white w-full" type="date" id="date" name="date" min={currentDate} />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24 " htmlFor="time">Time:</label>
              <input className="p-2 border border-white rounded-2xl text-black bg-white w-full" type="time" id="time" name="time" min={currentTime} />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24 " htmlFor="guests">Guests:</label>
              <input className="p-2 border border-white rounded-2xl text-black bg-white w-full" type="number" id="guests" name="guests" />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24 " htmlFor="name">Name:</label>
              <input className="p-2 border border-white rounded-2xl text-black bg-white w-full" type="text" id="name" name="name" />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24 " htmlFor="phone">Phone:</label>
              <input className="p-2 border border-white rounded-2xl text-black bg-white w-full" type="tel" id="phone" name="phone" />
            </div>
            <div className="flex items-center mb-4">
              <label className="mr-2 w-24 " htmlFor="email">Email:</label>
              <input className="p-2 border border-white rounded-2xl text-black bg-white w-full" type="email" id="email" name="email" />
            </div>
            <button className="p-2 mt-4 bg-blue-100  rounded-2xl transition duration-300 ease-in-out hover:bg-white hover:text-blue-100">Book Now</button>
          </form>
        </div>
        
        <div className="hidden md:block md:w-1/2 relative h-72">
          <Image
            src="/images/coffee.jpg"
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

export default BookRes;
