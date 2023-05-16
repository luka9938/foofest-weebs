import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className={styles.navbar}>
      <div className={`${styles.container} ${styles.nav_container}`}>
        <input className={styles.checkbox} type="checkbox" name="" id="" />
        <div className={styles.hamburger_lines}>
          <span className={`${styles.line} ${styles.line1}`}></span>
          <span className={`${styles.line} ${styles.line2}`}></span>
          <span className={`${styles.line} ${styles.line3}`}></span>
        </div>
        <div className={styles.logo}>
          <Link href="/" aria-label="Logo">
            LOGO
          </Link>
        </div>
        <div className={styles.menu_items}>
          <li>
            <Link href="/" aria-label="Logo">
              LOGO
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Lineup">
              LINEUP
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Tickets">
              TICKETS
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="News">
              NEWS
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Info">
              INFO
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Merch">
              MERCH
            </Link>
          </li>
          <li>
            <Link href="/" aria-label="Gallery">
              GALLERY
            </Link>
          </li>
          <div className={styles.so_me}>
            <Link href="/" aria-label="Monkepolitik">
              Facebook
            </Link>
            <Link href="/" aria-label="Monkepolitik">
              Instagram
            </Link>
            <Link href="/" aria-label="Monkepolitik">
              Youtube
            </Link>
            <Link href="/" aria-label="Monkepolitik">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
