import styles from "./Header.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import Bands from "@/components/Bands";

export function Header({ data }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, []);

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
            <Link href="/login" onClick={closeMenu} aria-label="Login">
              LOGIN
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
          <ul className={styles.ticker_item}>
            {Array.isArray(data) && data.map((band) => <Bands key={band.name} name={band.name} />)}
          </ul>
        </div>
      </div>
    </header>
  );
}

export async function getServerSideProps() {
  const apiUrl = "https://sunrise-innovative-pediatrician.glitch.me/bands";

  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Header;
