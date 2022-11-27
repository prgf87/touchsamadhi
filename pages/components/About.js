import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id="about" className="w-full z-[2] bg-black/90">
      <div className="grid grid-cols-1 w-full text-center mx-auto px-10 text-sm md:text-xl p-2">
        <div>
          <p className="pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-zinc-200/50 mt-6 mb-4">
            <u className="font-bold text-xl md:text-4xl">
              Awaken To The Trance Dance Experience
            </u>
          </p>
          <div className="max-w-[60ch] md:text-[1.05rem] lg:text-[1.3rem] md:leading-8 mx-auto">
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
          </div>
          <div className="w-full flex justify-center items-center my-4 ">
            <Link href={'https://www.eqfest.com'}>
              <button className="button btn px-12 py-2 mt-2 text-2xl z-[2]">
                Equinox
              </button>
            </Link>
          </div>
          <p className="text-lg xs:text-lg md:text-2xl pt-2">
            Asheville, North Carolina<br></br> U.S.A
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
