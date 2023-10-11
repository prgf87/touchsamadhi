import React, { Suspense } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Listen from './components/Listen.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import BrevoContact from './components/BrevoContact.js';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Touch Samadhi</title>
        <meta
          name="Touch Samadhi"
          content="The best Electronic Music Festival on the Eastern Board"
        />
        <link rel="icon" href="/tslogo2.png" />
      </Head>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Hero />
        <BrevoContact />

        <Listen />
        {/* <Contact /> */}
        <Footer />
      </Suspense>
    </div>
  );
}
