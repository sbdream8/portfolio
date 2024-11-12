// app/page.js
import Image from 'next/image';
import Contact from './components/Contact';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Left column: Profile Photo and Contact */}
      <div className={styles.leftColumn}>
        <Image src="/photo.JPG" alt="Profile" width={200} height={200} className={styles.profilePhoto} />
        <Contact />
      </div>
    </div>
  );
}
