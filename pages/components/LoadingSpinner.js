import React from 'react';
import Image from 'next/image';

function LoadingSpinner() {
  return (
    <div>
      <Image src={'/loading.png'} alt="loading..." className="animate-spin" />
    </div>
  );
}

export default LoadingSpinner;
