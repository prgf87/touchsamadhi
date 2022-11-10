import Head from 'next/head';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Hero from './components/Hero.js';
import Listen from './components/Listen.js';

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
      <Hero />
      {/* <Listen /> */}
      <About />
      <Listen />
      <Contact />
    </div>
  );
}
