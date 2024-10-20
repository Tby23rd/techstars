"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Modal, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShopNow = () => {
    window.location.href = '/ShopPage';
  };

  const handleCatalog = () => {
    window.location.href = '/ProductsPage';
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative h-[600px] md:h-[800px] rounded-lg overflow-hidden flex items-center justify-center md:flex-row md:justify-end pt-16 md:pt-0">
    <Image src="/images/mw.jpg" alt="Neurodiversity Support" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover" />
    <div className="relative text-center shadow-xl rounded-lg m-4 p-4 text-white bg-blue-600 w-[90%] sm:w-3/4 md:w-1/2 md:text-left md:p-5">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Empower Neurodiversity, Elevate Your Workplace</h1>
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8">Unlock the potential of neurodivergent employees with the right support tools.</p>
      <div className="mt-4 sm:mt-5 text-center">
        <Button variant="primary" onClick={handleShopNow} className="rounded-full mr-2 py-2 px-4 bg-blue-700 border-2 border-white">
          Explore Solutions
        </Button>
        <Button variant="secondary" onClick={handleCatalog} className="rounded-full py-2 px-4 bg-blue-700 border-2 border-white">
          Learn More
        </Button>
      </div>
    </div>
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Our Solution</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Find out how we support neurodivergent employees to improve productivity and retention.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  
  );
};

export default Hero;
