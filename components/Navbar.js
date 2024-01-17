import React from "react";
import Image from "next/legacy/image";

function Navbar() {
  return (
    <div className="absolute z-[4] top-48 left-0 right-0 bottom-0  min-h-[65px] md:min-h-[100px] text-center ">
      <div className="w-full cursor-context-menu ">
        <div className="pt-4 z-[4] opacity-60 h-[5rem] flex justify-center items-center">
          <Image src="/tslogo2.png" alt="logo" width={150} height={150} />
        </div>
        <div className="my-12">
          <h1 className="text-4xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white font-bold">
            T.O.U.C.H. SAMADHI
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
