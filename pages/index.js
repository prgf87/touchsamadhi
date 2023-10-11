import React, { Suspense } from 'react';
import Head from 'next/head';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Banner from './components/Banner.js';
import LoadingSpinner from './components/LoadingSpinner.js';
import BrevoContact from './components/BrevoContact.js';
import About from './components/About.js';

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
        <Banner />
        <Navbar />
        <Hero />
        <section className="grid grid-cols-2 lg:grid-cols-3">
          <About />
          <BrevoContact />
        </section>

        {/* <Contact /> */}
        <Footer />
      </Suspense>
    </div>
  );
}
