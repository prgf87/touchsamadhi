import Head from 'next/head';
import Background from './components/Background.jsx';

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

      <Background />
    </div>
  );
}
