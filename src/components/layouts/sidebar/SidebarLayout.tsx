import Link from 'next/link';
import styles from './SidebarLayout.module.css';

export interface ISidebarLayout {
  link1: string;
  link2: string;
  link3: string;
}

const SidebarLayout: React.FC<ISidebarLayout> = ({ link1, link2, link3 }) => {
  return (
    <>
      <nav className={styles.nav}>
        <input className={styles.input} placeholder="Search..." />
        <Link href="/">{link1}</Link>
        <Link href="/about">{link2}</Link>
        <Link href="/contact">{link3}</Link>
      </nav>
    </>
  );
};

export default SidebarLayout;
