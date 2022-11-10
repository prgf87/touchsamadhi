import Head from 'next/head';
import Navbar from './components/Navbar.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import Hero from './components/Hero.js';
import Listen from './components/Listen.js';
import { Suspense } from 'react';
import LoadingSpinner from './components/LoadingSpinner.js';

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <title>Touch Samadhi</title>
        <meta
          name="Touch Samadhi"
          content="Best Electronic Music Festival on the Eastern Board"
        />
        <link rel="icon" href="/tslogo2.png" />
      </Head>
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Hero />
        {/* <Listen /> */}
        <About />
        <Listen />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}
