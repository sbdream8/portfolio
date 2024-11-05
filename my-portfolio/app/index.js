// pages/index.js
import Head from 'next/head';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Name | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Head>
      <header>
        <h1>Your Name</h1>
        <p>Probability and Statistics Major | Web Developer</p>
      </header>
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
