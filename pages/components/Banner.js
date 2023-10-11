import React from 'react';
import { ImSoundcloud, ImYoutube } from 'react-icons/im';
import { SiBandcamp } from 'react-icons/si';
import { LucideSquareDot } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-transparent text-gray-400 p-2">
      <div className="bg-transparent flex justify-evenly items-center sm:grid-cols-5 text-center px-40">
        <a
          href="https://touch-samadhi.square.site/"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover:text-gray-500">
            <LucideSquareDot size={50} className="mx-auto" />
            <div className="text-xs lg:text-lg">Square</div>
          </button>
        </a>
        <a
          href="https://beatspace-touchsamadhi.bandcamp.com/"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover:text-gray-500">
            <SiBandcamp size={50} className="mx-auto" />
            <div className="text-xs lg:text-lg">Bandcamp</div>
          </button>
        </a>

        <a
          href="https://www.youtube.com/channel/UCFk74MDpHE8scmgRnxJ4NIQ"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover:text-gray-500">
            <ImYoutube size={50} className="mx-auto" />
            <div className="text-xs lg:text-lg">YouTube</div>
          </button>
        </a>

        <a
          href="https://soundcloud.com/t-o-u-c-h-samadhi"
          className="cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hover:text-gray-500">
            <ImSoundcloud size={50} className="mx-auto" />
            <div className="text-xs lg:text-lg">Soundcloud</div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
