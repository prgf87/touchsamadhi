import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { slides } from '../public/lib/Slides';

const Hero = () => {
  const [slideDirection, setSlideDirection] = useState('right');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [current]);

  function getPositionClass(index) {
    if (index === current) return 'translate-x-0';
    if (slideDirection === 'right') {
      if (index === getPrevIndex()) return '-translate-x-full';
      return 'translate-x-full';
    } else {
      if (index === getNextIndex()) return 'translate-x-full';
      return '-translate-x-full';
    }
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setSlideDirection('right');
    setCurrent(getNextIndex());
  };

  const getPrevIndex = () => (current === 0 ? slides.length - 1 : current - 1);
  const getNextIndex = () => (current === slides.length - 1 ? 0 : current + 1);

  return (
    <>
      <div
        id="gallery"
        className="relative z-0 mb-4 max-w-full overflow-hidden  pt-4 sm:mx-auto md:pt-6  lg:pt-12"
      >
        <div className="relative flex justify-center items-top text-center min-h-[48vh] bg-center body">
          <div className="absolute inset-0 overflow-hidden">
            {[getPrevIndex(), current, getNextIndex()].map((index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${getPositionClass(
                  index
                )}`}
              >
                <Image
                  src={slides[index].image}
                  alt={`slider image - ${slides[index].image}`}
                  fill
                  priority
                  sizes="100vw"
                  style={{ objectFit: 'cover', objectPosition: slides[current].position }}
                  className={`w-full object-cover bg-center`}
                />
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-black/75 z-[2]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
