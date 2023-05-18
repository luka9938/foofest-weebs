import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={`${styles.container} ${styles.nav_container}`}>
        <input
          className={styles.checkbox}
          type="checkbox"
          name=""
          id=""
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
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
            <Link href="/" onClick={closeMenu} aria-label="Logo">
              LOGO
            </Link>
          </li>
          <li>
            <Link href="/lineup" onClick={closeMenu} aria-label="Lineup">
              LINEUP
            </Link>
          </li>
          <li>
            <Link href="/tickets" onClick={closeMenu} aria-label="Tickets">
              TICKETS
            </Link>
          </li>
          <li>
            <Link href="/news" onClick={closeMenu} aria-label="News">
              NEWS
            </Link>
          </li>
          <li>
            <Link href="/information" onClick={closeMenu} aria-label="Info">
              INFO
            </Link>
          </li>
          <li>
            <Link href="/store" onClick={closeMenu} aria-label="Merch">
              MERCH
            </Link>
          </li>
          <li>
            <Link href="/gallery" onClick={closeMenu} aria-label="Gallery">
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
      <div className={styles.ticker_wrap}>
        <div className={styles.ticker}>
          <div className={styles.ticker_item}>
            <span>Meatpuppet</span>
            <span>Burn victim</span>
            <span>Killer whale</span>
            <span>Regicide</span>
            <span>Empty throne</span>
            <span>Taker of skulls</span>
            <span>Ebon Chalice</span>
            <span>Corpsegrinder</span>
            <span>Death Company</span>
            <span>Blood Angels</span>
          </div>
        </div>
      </div>
    </header>
  );
}
