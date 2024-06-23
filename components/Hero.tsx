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
    <div className="relative h-[600px] md:h-[800px] rounded-lg overflow-hidden flex items-center justify-center md:flex-row md:justify-end">
      <Image src="/images/fashion1.png" alt="Fashion Image" layout="fill" objectFit="cover" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative text-center shadow-xl rounded-lg m-4 p-4 bg-blue-500 w-[90%] sm:w-3/4 md:w-1/2 md:text-left md:p-5">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">Discover the Magic of Local Stores</h1>
        <p className="text-md sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-8">Explore a world of unique finds and timeless treasures</p>
        <div className="mt-4 sm:mt-5 text-center">
          <Button variant="primary" onClick={handleShopNow} className="rounded-full mr-2 py-2 px-4 bg-blue-500 border-2 border-white">
            Find Stores
          </Button>
          <Button variant="secondary" onClick={handleCatalog} className="rounded-full py-2 px-4 bg-blue-500 border-2 border-white">
            Find Products
          </Button>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Catalog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your catalog content goes here...</p>
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
