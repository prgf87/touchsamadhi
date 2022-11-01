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
    <div className="bg-gray-100/70 text-black/70">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-2xl">Sign up to the Newsletter...</h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <form onSubmit={subscribeUser}>
          <input
            type="email"
            id="email-input"
            name="email"
            placeholder="your best email"
            ref={inputRef}
            required
            className="border border-black mb-6 p-2"
          />
          <button
            className="bg-white border-black"
            type="submit"
            value=""
            name="subscribe"
          >
            <p>Subscribe</p>
          </button>
        </form>
      </div>
    </div>
  );
}
