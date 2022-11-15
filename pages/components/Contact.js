import React, { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(true);
  const [state, setState] = useState('IDLE');

  const subscribe = async (e) => {
    e.preventDefault();
    setState('LOADING');
    setMessage(null);

    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      console.log(res);

      if (res.status >= 400) {
        console.log(res.error);
        setState('ERROR');
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
                setEmail('');
              }}
            >
              contact us
            </a>
          </div>
        );
        setEmail('');
        setTimeout(() => {
          setState('IDLE');
          setMessage(null);
        }, 10000);
        return;
      }

      setState('SUCCESS');
      setMessage('Success! 🎉 You are now subscribed to the newsletter.');
      setEmail('');
      setTimeout(() => {
        setState('IDLE');
        setMessage(null);
      }, 10000);

      return;
    } catch (e) {
      setState('ERROR');
      console.log(e.res.error);
      setMessage(e.res.error);
      setEmail('');
      setTimeout(() => {
        setState('IDLE');
        setMessage(null);
      }, 10000);
      return;
    }
  };

  return (
    <div className="h-[15rem] xs:h-[13.5rem] xsm:h-[12.5rem] sm:h-[13rem] w-full bg-black/90 px-2">
      <div className="flex justify-center items-center">
        <h1 className="text-center text-zinc-300 text-lg md:text-2xl mt-4">
          Sign up to the Newsletter...
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
                  size={50}
                  duration={10}
                  colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                  ]}
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
            {message
              ? message
              : `We only send emails when we have genuine news.`}
          </div>
        </form>
      </div>
    </div>
  );
}
