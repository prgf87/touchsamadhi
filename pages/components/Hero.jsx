import React from 'react';
// import Image from 'next-image';

const Hero = () => {
  return (
    <div className="flex justify-center items-top text-center h-screen mb-4 bg-cover bg-center custom-img">
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/40 z-[2]" />
      <div className="p-5 text-white z-[2]">
        <h1 className="text-xl font-extrabold  lg:text-7xl ">
          T.O.U.C.H. SAMADHI
        </h1>
        <p className="text-sm lg:text-xl">
          Awaken To The Trance Dance Experience
        </p>
        <button className="px-8 py-2 border text-white z-[2] mt-[40rem]">
          Equinox
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Hero;
