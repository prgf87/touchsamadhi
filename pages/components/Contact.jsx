import React, { useRef } from 'react';

export default function Contact() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/subscribeUser', {
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
    <div className="h-[142px] bg-gray-100/70 text-black/70">
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
            placeholder="You email here"
            ref={inputRef}
            required
            className="border border-black/40 py-2 px-2 text-center"
          />
          <div className="flex justify-center items-center">
            <button className="px-2 py-2 bg-transparent border-black/40 text-gray-900 text-lg transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
