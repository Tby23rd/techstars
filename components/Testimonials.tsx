"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

interface Testimonial {
  id: string;
  businessName: string;
  comment: string;
  imageUrl: string; // Add imageUrl field for each testimonial
}

const testimonialsData: Testimonial[] = [
  { id: '1', businessName: 'Vintage Vibes', imageUrl: '/images/logo1.webp', comment: 'The virtual mall has greatly increased our reach and customer base!' },
  { id: '2', businessName: 'Thrift Treasures', imageUrl: '/images/logo3.webp', comment: 'We love the ease of use and the supportive community.' },
  { id: '3', businessName: 'Retro Finds', imageUrl: '/images/logo1.webp', comment: 'Our sales have doubled since joining the virtual mall!' },
  { id: '4', businessName: 'Classic Couture', imageUrl: '/images/logo4.webp', comment: 'Highly recommend for any small business looking to grow online.' },
  { id: '5', businessName: 'Second Chance', imageUrl: '/images/logo1.webp', comment: 'Fantastic platform with excellent customer support.' },
  { id: '6', businessName: 'Eco Chic', imageUrl: '/images/logo2.webp', comment: 'A great way to reach eco-conscious customers.' },
  { id: '7', businessName: 'Timeless Threads', imageUrl: '/images/logo1.webp', comment: 'The best decision we made for our business.' },
  { id: '8', businessName: 'Vintage Vault', imageUrl: '/images/logo3.webp', comment: 'Amazing exposure and a wonderful community of sellers.' },
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
    <div id="Testimonials" className="shadow rounded-lg m-4 p-5">
      <h1 className="text-3xl text-blue-900 font-bold text-center mb-5">Business Testimonials</h1>
      <div className="rounded-lg p-5">
        <Slider {...settings}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="text-center">
              <Image src={testimonial.imageUrl} alt={testimonial.businessName} width={50} height={50} className="mx-auto rounded-full" />
              <p className="text-base md:text-lg">{testimonial.comment}</p>
              <p className="text-lg md:text-xl font-bold mt-2">{testimonial.businessName}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
