import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [state, setState] = useState('IDLE');

  const subscribe = async (e) => {
    e.preventDefault();
    setMessage(null);
    setState('LOADING');

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const response = await res.json();
    console.log(response);
    console.log(response.status);
    setState('SUCCESS');
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
    setEmail('');

    setTimeout(() => {
      setState('IDLE');
      setMessage(null);
      return;
    }, 10000);
    if (response.status >= 400) {
      console.log('error: ', response.error);
      setState('ERROR');
      setEmail('');
      setMessage(
        <div>
          An error has occurred, please{' '}
          <a
            href="https://www.facebook.com/touchsamadhi"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline cursor-pointer transition-transform duration-7000 hover:text-gray-200"
            onClick={() => {
              setState('IDLE');
              setMessage(null);
            }}
          >
            contact us
          </a>
        </div>
      );

      setTimeout(() => {
        setState('IDLE');
        setMessage(null);
        return;
      }, 10000);
    }
  };

  return (
    <div className="h-[15rem] xs:h-[13.5rem] xsm:h-[12.5rem] sm:h-[13rem] w-full bg-black/90 px-2">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-zinc-300 text-lg md:text-2xl mt-4">
          Sign up to the Newsletter
        </h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={subscribe}>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Your@email.here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoCapitalize="off"
            autoCorrect="off"
            aria-autocomplete="list"
            className="h-[40px] min-w-[270px] md:min-w-[400px] border border-black/60 rounded-xl w-full text-center text-md px-2"
          />
          <div className="flex justify-center items-center py-2">
            {state === 'IDLE' && (
              <button
                type="submit"
                value=""
                name="subscribe"
                disabled={state === 'LOADING'}
                className="w-[200px] h-[40px] px-12 mt-2 text-lg border border-black/60 rounded-xl bg-gray-200 text-gray-900 transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100"
              >
                Subscribe
              </button>
            )}
            {state === 'ERROR' && (
              <div className="h-[50px]">
                <CountdownCircleTimer
                  isPlaying
                  size={55}
                  strokeWidth={2}
                  duration={10}
                  trailColor="#3399ff"
                  rotation="clockwise"
                  colors="#ffffff"
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </div>
            )}
            {state === 'SUCCESS' && (
              <div className="h-[50px]">
                <CountdownCircleTimer
                  isPlaying
                  size={55}
                  strokeWidth={2}
                  duration={10}
                  trailColor="#3399ff"
                  rotation="clockwise"
                  colors="#ffffff"
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              </div>
            )}

            {state === 'LOADING' && (
              <button
                type="submit"
                value=""
                disabled
                name="subscribe"
                className="w-[200px] h-[40px] px-12 mt-2 text-lg border border-black/60 rounded-xl bg-gray-200 text-gray-900 transition-colors duration-700 transform"
              >
                <div className="flex justify-center items-center">
                  <LoadingSpinner />
                </div>
              </button>
            )}
          </div>
          <div className="text-zinc-300 text-sm md:text-lg text-center md:min-w-[35ch]">
            {message ? message : `Keep up to date with all the latest news`}
          </div>
        </form>
      </div>
    </div>
  );
}
