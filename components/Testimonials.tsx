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
  { id: '1', businessName: 'Inclusive Solutions', imageUrl: '/images/logo1.webp', comment: 'Our neurodivergent employees feel more supported and productive thanks to this app!' },
  { id: '2', businessName: 'Diversity Matters', imageUrl: '/images/logo3.webp', comment: 'A game changer for our DEI initiatives. The app has truly elevated our workplace inclusivity.' },
  { id: '3', businessName: 'Neuro-Innovate', imageUrl: '/images/logo1.webp', comment: 'We’ve seen a noticeable reduction in absenteeism since adopting the app.' },
  { id: '4', businessName: 'Focus Forward', imageUrl: '/images/logo4.webp', comment: 'Highly recommend for any organization looking to better support neurodivergent talent.' },
  { id: '5', businessName: 'Cognitive Care', imageUrl: '/images/logo1.webp', comment: 'Fantastic tool for improving communication and time management within our team.' },
  { id: '6', businessName: 'Mindful Workspaces', imageUrl: '/images/logo2.webp', comment: 'An excellent resource for creating a truly inclusive work environment.' },
  { id: '7', businessName: 'NeuroSync', imageUrl: '/images/logo1.webp', comment: 'The best decision we made to boost employee engagement and retention.' },
  { id: '8', businessName: 'Inclusive Impact', imageUrl: '/images/logo3.webp', comment: 'Amazing support and the perfect addition to our DEI toolkit.' },
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
