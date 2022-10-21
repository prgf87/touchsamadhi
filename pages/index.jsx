import Head from 'next/head';
import Footer from './components/Footer.jsx';
import Gallery from './components/Gallery.jsx';
import Hero from './components/Hero.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Touch Samadhi</title>
        <meta
          name="Touch Samadhi"
          content="Best Electronic Music Festival on the Eastern Board"
        />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}
