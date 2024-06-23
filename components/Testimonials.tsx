"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


interface Testimonial {
  id: string;
  name: string;
 comment: string;
  imageUrl: string; // Add imageUrl field for each testimonial
}

const testimonialsData: Testimonial[] = [
  { id: '1', name: 'John Doe',imageUrl: '/images/coffee.jpg', comment: 'Great coffee and cozy atmosphere!' },
  { id: '2', name: 'Jane Smith', imageUrl: '/images/coffee.jpg', comment: 'Love the pastries and friendly staff.' },
  { id: '3', name: 'Sam Johnson', imageUrl: '/images/coffee.jpg', comment: 'Fantastic selection of drinks and desserts.' },
  { id: '4', name: 'Emily White', imageUrl: '/images/coffee.jpg', comment: 'Cozy environment, perfect for working.' },
  { id: '5', name: 'Alex Brown', imageUrl: '/images/coffee.jpg', comment: 'Friendly service and delicious coffee.' },
  { id: '6', name: 'Olivia Davis', imageUrl: '/images/coffee.jpg', comment: 'Best place to unwind with a cup of coffee.' },
  { id: '7', name: 'Chris Miller', imageUrl: '/images/coffee.jpg', comment: 'Lovely ambiance and tasty treats.' },
  { id: '8', name: 'Ava Taylor', imageUrl: '/images/coffee.jpg', comment: 'Always a pleasant experience at Your Cafe.' },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="Testimonials" className=" bg-blue-100 rounded-lg m-4 mx-auto py-10 px-5">
      <h1 className="text-2xl font-bold text-center mb-5 ">Customer Testimonials</h1>
      <div className="rounded-lg p-5">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <Image src={testimonial.imageUrl} alt={testimonial.name} width={50} height={50} className="mx-auto rounded-full" />
              <p className="text-base md:text-lg ">{testimonial.comment}</p>
              <p className="text-lg md:text-xl  font-bold mt-2">{testimonial.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;