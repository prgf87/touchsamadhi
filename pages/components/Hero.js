import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Hero = () => {
  const slides = [
    {
      image: '/images/ts1.jpg',
    },
    {
      image: '/images/ts2.jpg',
    },
    {
      image: '/images/ts3.jpg',
    },
    {
      image: '/images/ts4.jpg',
    },
    {
      image: '/images/ts5.jpg',
    },
    {
      image: '/images/ts6.jpg',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [current, slides.length]);

  return (
    <div className="relative flex justify-center items-top text-center h-screen bg-center body">
      <Image
        src={slides[current].image}
        alt="/"
        layout={'fill'}
        objectFit={'cover'}
      />

      <div className="absolute top-0 left-0 bottom-0 right-0 bg-black/70 z-[2]" />
      <div className="pt-2 z-[3] opacity-60 h-[5rem]">
        <Image src="/tslogo2.png" alt="logo" width={150} height={150} />
      </div>
      <div className="absolute bottom-4 w-full flex justify-center items-center ">
        <Link href={'https://www.eqfest.com'}>
          <button className="button btn px-12 py-2 mt-2 text-2xl z-[2]">
            Equinox
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
