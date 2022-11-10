import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="w-full px-2 py-2">
      <div className="grid grid-cols-1 max-w-[1200px] text-center mx-auto text-sm p-2">
        <div>
          <p className="text-sm sm:text-xl text-gray-100/70 lg:text-3xl z-10">
            <u className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-300">
              Awaken To The Trance Dance Experience
            </u>
          </p>
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
          <p>But these are mere symptoms, and tell us nothing..</p>
          <p>There is only one way to find out what samadhi is like:</p>
          <p>You must have it yourself…</p>
          <div className="w-full flex justify-center items-center my-4">
            <Link href={'https://www.eqfest.com'}>
              <button className="px-12 py-1 mt-2 text-lg border border-black/60 rounded-xl bg-gray-200 text-gray-900 transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100">
                Equinox
              </button>
            </Link>
          </div>
          <p className="text-2xl pt-2">Asheville, North Carolina, U.S.A</p>
        </div>
      </div>
    </div>
  );
};

export default About;
