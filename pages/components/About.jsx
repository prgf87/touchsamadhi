import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="w-full px-2 py-2">
      <div className="w-full flex justify-center items-center mb-2">
        <Link href={'https://www.eqfest.com'}>
          <button className="button px-12 py-2 text-black bg-gray-200/80 border hover:text-white z-[2] hover:scale-110 hover:bg-gray-600/80 text-2xl transition-transform">
            Equinox
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 max-w-[1200px] text-center mx-auto text-md lg:text-xl p-2">
        <div>
          <p>
            …pioneering a revolutionary understanding of the nature of
            consciousness…
          </p>
          <p>
            …striving to discover who we are beyond our thoughts, emotions,
            memories, associations, and perceptions…
          </p>
          <p>Samadhi is said to be a fourth kind of consciousness:</p>
          <p>
            It is beyond the states of waking, dreaming and dreamless sleep.
          </p>
          <p>
            Those who have witnessed it as an external phenomenon report that
            the experience appeared to have fallen into a kind of trance.
          </p>
          <p>
            The hair on the head and body stood erect. The half-closed eyes
            became fixed.
          </p>
          <p>
            Sometimes there was an astonishing loss of weight, or even
            levitation of the body from the ground.
          </p>
          But these are mere symptoms, and tell us nothing..
          <p>There is only one way to find out what samadhi is like:</p>
          <p>You must have it yourself…</p>
          <p className="text-lg pt-10">Asheville, North Carolina, U.S.A</p>
        </div>
      </div>
    </div>
  );
};

export default About;
