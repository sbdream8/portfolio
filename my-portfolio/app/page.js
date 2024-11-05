//pages/index.js
import Head from 'next/head';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Sebin Lee | Portfolio </title>
        <meta name="description" content="Sebin's Portfolio" />
      </Head>
      <header>
      <Image
          src="/photo.JPG"
          alt="Profile Photo"
          width={200}
          height={200}
          style={{ borderRadius: '50%' }}
        />
        <h1>Sebin Lee</h1>
        <p>Probability and Statistics Major</p>
      </header>
      <main>
        <Contact />
        <About />
        <Projects />
      </main>
    </div>
  );
}
