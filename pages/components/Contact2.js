import React, { useRef } from 'react';

export default function Contact2() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe2', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  return (
    <div className="h-[150px] bg-gray-100/70 text-black/70">
      <div className="flex justify-center items-center pt-2">
        <h1 className="font-bold text-center text-sm md:text-2xl">
          Sign up to the Newsletter...
        </h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={subscribeUser}>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="Your email here"
            ref={inputRef}
            required
            autoCapitalize="off"
            autoCorrect="off"
            autoFill="off"
            className="border min-w-[280px] py-2 px-2 text-center"
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              value=""
              name="subscribe"
              className="px-4 py-1 mt-2 bg-gray-200 border border-black/40 text-gray-900 text-lg transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
