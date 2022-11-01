import Head from 'next/head';
import Footer from './components/Footer.jsx';
import About from './components/About.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact.jsx';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Touch Samadhi</title>
        <meta
          name="Touch Samadhi"
          content="Best Electronic Music Festival on the Eastern Board"
        />
        <link rel="icon" href="/tslogo2.png" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
