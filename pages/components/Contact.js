import React, { useRef, useState } from 'react';

export default function Contact() {
  const inputRef = useRef(null);
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

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

    // 4. If there was an error, update the message in state.
    if (error) {
      setMessage(error);

      return;
    }
    inputRef.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
    <div className="h-[175px] bg-gray-100/70 text-black/70">
      <div className="flex justify-center items-center pt-2">
        <h1 className="font-bold text-center text-sm md:text-2xl">
          Sign up to the Newsletter...
        </h1>
      </div>
      <div className="text-center text-sm pb-2">
        {message
          ? message
          : `We only send emails when we have genuine news. No spam.`}
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
            className="border border-black/60 rounded-xl min-w-[300px] py-2 text-center px-2 mx-20"
          />
          <div className="flex justify-center items-center">
            <button
              type="submit"
              value=""
              name="subscribe"
              className="px-4 py-1 mt-2 bg-gray-200 border border-black/60 text-gray-900 text-lg transition-colors duration-700 transform hover:bg-gray-500 hover:text-gray-100"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
