import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <Link href="/" aria-label="Privatpolitik">
          Privatpolitik
        </Link>
        <Link href="/" aria-label="Cookiepolitik">
          Cookiepolitik
        </Link>
        <Link href="/" aria-label="Bæredygtighed">
          Bæredygtighed
        </Link>
        <Link href="/" aria-label="Monkepolitik">
          Monkepolitik
        </Link>
      </div>
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
    </footer>
  );
}
