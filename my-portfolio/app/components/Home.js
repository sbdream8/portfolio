// components/Home.js
import Image from 'next/image';
import Contact from './Contact';
import About from './About';

export default function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left column: Profile Photo and Contact */}
      <div style={{ flex: 1, backgroundColor: '#f0f0f0', padding: '20px' }}>
        <Image src="/photo.JPG" alt="Profile" width={200} height={200} style={{ borderRadius: '8px' }} />
        <Contact />
      </div>

      {/* Right column: About Section */}
      <div style={{ flex: 2, padding: '20px' }}>
        <About />
      </div>
    </div>
  );
}
