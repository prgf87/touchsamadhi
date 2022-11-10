import Link from 'next/link';
import React, { Suspense, useEffect, useState } from 'react';
import Image from 'next/image';
import { slides } from '../../public/lib/Slides';
import LoadingSpinner from './LoadingSpinner';

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 10000);

    return () => clearInterval(intervalId);
  }, [current]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="relative flex justify-center items-top text-center h-screen bg-center body">
        <Image
          src={slides[current].image}
          objectPosition={slides[current].position}
          alt="/"
          placeholder="blur"
          blurDataURL={slides[current]}
          layout={'fill'}
          objectFit={'cover'}
          priority="true"
        />

        <div className="absolute top-0 left-0 bottom-0 right-0 h-screen bg-black/70 z-[2]" />

        <div className="absolute bottom-[5%] w-full flex justify-center items-center ">
          <Link href={'https://www.eqfest.com'}>
            <button className="button btn px-12 py-2 text-2xl z-[2]">
              Equinox
            </button>
          </Link>
        </div>
      </div>
    </Suspense>
  );
};

export default Hero;
