import Link from 'next/link';
import React from 'react';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaBandcamp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="h-[5rem] bg-black/90 w-full flex justify-center items-center mt-4">
      <div className="relative bottom-0 left-7 flex">
        <a
          href="https://www.facebook.com/touchsamadhi"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button p-2 cursor-pointer">
            <BsFacebook size={25} />
          </button>
        </a>
        <a
          href="https://www.instagram.com/touchsamadhi"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button p-2 cursor-pointer">
            <BsInstagram size={25} />
          </button>
        </a>
      </div>
      <div className="mx-10">
        <h1 className="text-white text-sm text-center">
          Copyright © 2022 T.O.U.C.H. Samadhi
        </h1>
      </div>
      <div className="relative bottom-0 right-7 flex">
        <a
          href="https://beatspace-touchsamadhi.bandcamp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button p-2 cursor-pointer">
            <FaBandcamp size={25} />
          </button>
        </a>
        <a
          href="https://www.youtube.com/channel/UCFk74MDpHE8scmgRnxJ4NIQ"
          target="_blank"
          rel="noreferrer"
        >
          <button className="button p-2 cursor-pointer">
            <BsYoutube size={25} />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
