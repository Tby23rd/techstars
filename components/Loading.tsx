// components/Loading.js (or Loading.tsx)
import React from 'react';
import Image from 'next/image'; // Next.js optimized image component

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="animate-bounce">
        <Image
          src="/images/logos/BomaFem.png" // path to your logo in the public directory
          alt="Loading..."
          width={100} // adjust size as needed
          height={100} // adjust size as needed
        />
      </div>
      <p className="mt-4 text-blue-900 font-bold text-4xl">Loading...</p>
    </div>
  );
};

export default Loading;