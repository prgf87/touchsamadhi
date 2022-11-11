import React, { useRef, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Contact() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState('IDLE');

  const subscribe = async (e) => {
    e.preventDefault();
    setState('LOADING');
    setMessage(null);

    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputRef.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();

      if (error) {
        setMessage(error);
        setState('ERROR');
        return;
      }
      inputRef.current.value = '';
      setMessage('Success! 🎉 You are now subscribed to the newsletter.');
      setState('SUCCESS');
      return;
    } catch (err) {
      setMessage(error);
      setState('ERROR');
      return;
    }
  };

  return (
    <div className="h-[15rem] xs:h-[13.5rem] xsm:h-[12.5rem] sm:h-[13rem] md:min-w-[400px]  w-full bg-black/90 px-2">
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
            ref={inputRef}
            required
            autoCapitalize="off"
            autoCorrect="off"
            className="h-[40px] min-w-[400px] border border-black/60 rounded-xl w-full text-center text-md px-2"
          />
          <div className="flex justify-center items-center py-4">
            {/* <button
              type="button"
              value=""
              name="subscribe"
              disabled={state === 'LOADING'}
              // onClick={subscribe}
              onClick={() => {
                setLoading(!loading);
              }}
              className={`w-[200px] h-[40px] px-12 mt-2 text-lg border border-black/60 rounded-xl bg-gray-200 text-gray-900 transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100 ${
                state === 'LOADING' ? 'button-gradient-loading' : ''
              }`}
            >
              {' '}
              Subscribe
              {/* {state === 'IDLE' && 'Subscribe'}
              {state === 'LOADING' && (
                <div className="flex justify-center items-center">
                  <LoadingSpinner />
                </div>
              )} 
            </button> */}

            {loading ? (
              <button
                type="submit"
                value=""
                name="subscribe"
                onClick={() => {
                  setState('LOADING');
                }}
                className="w-[200px] h-[40px] px-12 mt-2 text-lg border border-black/60 rounded-xl bg-gray-200 text-gray-900 transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100"
              >
                Subscribe
              </button>
            ) : (
              state === 'LOADING' && (
                <button
                  type="submit"
                  value=""
                  disabled
                  name="subscribe"
                  className="w-[200px] h-[40px] px-12 mt-2 text-lg border border-black/60 rounded-xl bg-gray-200 text-gray-900 transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100"
                >
                  <div className="flex justify-center items-center">
                    <LoadingSpinner />
                  </div>
                </button>
              )
            )}
          </div>
          <div className="text-zinc-300 text-sm md:text-lg text-center">
            {message
              ? message
              : `We only send emails when we have genuine news.`}
          </div>
        </form>
      </div>
    </div>
  );
}
