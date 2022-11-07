import React from 'react';

function Navbar() {
  return (
    <div className="absolute z-[3] top-[120px] left-0 right-0 bottom-0  h-[65px] md:h-[100px] text-center">
      <div className="w-full">
        <div className="my-2">
          <h1 className="text-3xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white">
            T.O.U.C.H. SAMADHI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
