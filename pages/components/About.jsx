import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className="w-full px-2 py-4">
      <div className="w-full flex justify-center items-center">
        <Link href={'https://www.eqfest.com'}>
          <button className="button px-12 py-2 text-black bg-gray-200/80 border hover:text-white z-[2] hover:scale-110 hover:bg-gray-600/80 text-2xl transition-transform">
            Equinox
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 max-w-[1200px] text-center mx-auto text-md font-bold ">
        <div>
          <h1>
            …pioneering a revolutionary understanding of the nature of
            consciousness…
          </h1>
          <p>
            …striving to discover who we are beyond our thoughts, emotions,
            memories, associations, and perceptions…
          </p>
        </div>
        <div>
          <h1>Samadhi is said to be a fourth kind of consciousness:</h1>
          <p>
            It is beyond the states of waking, dreaming and dreamless sleep.
            <br></br>
            <br></br>
            Those who have witnessed it as an external phenomenon report that
            the experience appeared to have fallen into a kind of trance.
            <br></br>
            <br></br>
            The hair on the head and body stood erect. The half-closed eyes
            became fixed.
            <br></br>
            <br></br>
            Sometimes there was an astonishing loss of weight, or even
            levitation of the body from the ground.
            <br></br>
            <br></br>
            But these are mere symptoms, and tell us nothing..
            <br></br>
            <br></br>
            There is only one way to find out what samadhi is like:
          </p>
        </div>

        <div>
          <h1>You must have it yourself…</h1>
        </div>
      </div>
    </div>
  );
};

export default About;
