import Head from 'next/head';
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Contact from './components/Contact.jsx';
import Listen from './components/Listen.jsx';

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
      <About />
      <Listen />
      <Contact />
    </div>
  );
}
