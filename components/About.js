import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="w-screen lg:px-10 col-span-2 pb-20 border-b">
      <div className="w-[80vw] mx-auto lg:mx-0 text-center lg:text-left">
        {/* <div className="pt-20 pb-8 z-[4] opacity-60 h-[5rem] flex justify-center items-center">
          <Image src="/tslogo2.png" alt="logo" width={150} height={150} />
        </div> */}
        {/* <h1 className="pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-zinc-600 mt-6 mb-4">
          <u className="font-bold text-4xl md:text-7xl text-center">
            T.O.U.C.H. Samadhi
          </u>
        </h1> */}

        <div className="max-w-2xl lg:max-w-4xl mx-auto text-xl tracking-wider">
          <h3 className="pt-2 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-zinc-600 mt-6 mb-4">
            <u className="font-bold text-3xl md:text-4xl text-center">
              Awaken To The Trance Dance Experience
            </u>
          </h3>
          <div className="lg:pr-24 pb-8">
            <p className="pt-4">
              Pioneering a revolutionary understanding of the nature of
              consciousness
            </p>
            <p className="pt-4">
              ...striving to discover who we are beyond our thoughts, emotions,
              memories, associations and perceptions…
            </p>
            <p className="pt-4">
              Samadhi is said to be a fourth kind of consciousness:
            </p>
            <p className="pt-4">
              It is beyond the states of waking, dreaming and dreamless sleep.
            </p>
            <p className="pt-4">
              Those who have witnessed it as an external phenomenon, report to
              have fallen into a kind of trance.
            </p>
            <p className="pt-4">
              The hair on the head and body stood erect. The half-closed eyes
              became fixed.
            </p>
            <p className="pt-4">
              Sometimes there was an astonishing loss of weight, or even
              levitation of the body from the ground.
            </p>
            <p className="pt-4">
              But these are mere symptoms, and tell us nothing.. There is only
              one way to find out what samadhi is like:
            </p>
            <p className="pt-4">You must have it yourself…</p>
          </div>

          <h2 className="text-lg md:text-2xl pt-2">
            Asheville, North Carolina - U.S.A
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
