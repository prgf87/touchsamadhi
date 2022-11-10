import React from 'react';
import Image from 'next/image';

function Navbar() {
  return (
    <div className="absolute z-[4] top-0 left-0 right-0 bottom-0  h-[65px] md:h-[100px] text-center">
      <div className="w-full">
        <div className="pt-2 z-[4] opacity-60 h-[5rem]">
          <Image src="/tslogo2.png" alt="logo" width={150} height={150} />
        </div>
        <div className="my-12">
          <h1 className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
            T.O.U.C.H. SAMADHI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
