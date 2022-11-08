import React from 'react';
import { ImSoundcloud, ImYoutube } from 'react-icons/im';
import { SiBandcamp } from 'react-icons/si';

const Listen = () => {
  return (
    <div className="h-[125px] bg-cover bg-white/30 items-center gap-5  text-gray-200">
      <div className="grid grid-cols-3 sm:grid-cols-5 text-center gap-2 md:gap-20 pt-4">
        <div className="col-start-1 sm:col-start-2 col-span-1">
          <a
            href="https://soundcloud.com/t-o-u-c-h-samadhi"
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:text-gray-900">
              <ImSoundcloud size={60} className="mx-auto" />
              <div className="text-sm md:text-lg">Soundcloud</div>
            </button>
          </a>
        </div>
        <div className="col-start-2 sm:col-start-3 col-span-1">
          <a
            href="https://beatspace-touchsamadhi.bandcamp.com/"
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:text-gray-900">
              <SiBandcamp size={60} className="mx-auto" />
              <div className="text-sm md:text-lg">Bandcamp</div>
            </button>
          </a>
        </div>
        <div className="col-start-3 sm:col-start-4 col-span-1">
          <a
            href="https://www.youtube.com/channel/UCFk74MDpHE8scmgRnxJ4NIQ"
            className="cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hover:text-gray-900">
              <ImYoutube size={60} className="mx-auto" />
              <div className="text-sm md:text-lg">YouTube</div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Listen;
