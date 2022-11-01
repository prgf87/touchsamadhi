import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaBandcamp, FaSoundcloud } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="absolute z-10 top-0 left-0 right-0 bottom-0 p-5 text-black bg-gray-100/70 h-[125px] lg:h-[165px] text-center">
      <div className="w-full">
        <div className="absolute top-0 left-3">
          <button className="button p-2 cursor-pointer">
            <Link
              href={'https://www.facebook.com/touchsamadhi'}
              target="_blank"
            >
              <BsFacebook size={27} />
            </Link>
          </button>
          <button className="button p-2 cursor-pointer">
            <Link href={'https://www.instagram.com/touchsamadhi/'}>
              <BsInstagram size={27} />
            </Link>
          </button>
        </div>

        <div className="col-start-1 col-span-7">
          <h1 className="text-3xl sm:text-6xl font-bold lg:text-7xl pt-6 sm:pt-2 pb-0">
            T.O.U.C.H. SAMADHI
          </h1>
          <p className="text-md font-bold text-black/90 lg:text-2xl">
            <u>Awaken To The Trance Dance Experience</u>
          </p>
        </div>
        <div className="absolute top-0 right-3">
          <button className="button p-2 cursor-pointer">
            <Link href={'https://beatspace-touchsamadhi.bandcamp.com/'}>
              <FaBandcamp size={27} />
            </Link>
          </button>
          <button className="button p-2 cursor-pointer">
            <Link
              href={'https://www.youtube.com/channel/UCFk74MDpHE8scmgRnxJ4NIQ'}
            >
              <BsYoutube size={27} />
            </Link>
          </button>
          <button className="button p-2 cursor-pointer">
            <Link href={'https://soundcloud.com/t-o-u-c-h-samadhi'}>
              <FaSoundcloud size={27} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
