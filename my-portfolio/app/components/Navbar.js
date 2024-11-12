// app/components/Navbar.js
import Link from 'next/link';
import styles from './Navbar.module.css';
import About from './About';
import Projects from './Projects';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
}