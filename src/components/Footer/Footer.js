import styles from "./Footer.module.css";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <Link href="/" aria-label="Privatpolitik">
          Privacy Policy
        </Link>
        <Link href="/" aria-label="Cookiepolitik">
          Cookie Policy
        </Link>
        <Link href="/" aria-label="Bæredygtighed">
          Sustainability
        </Link>
        <Link href="/" aria-label="Monkepolitik">
          Monke Policy
        </Link>
      </div>
      <div className={styles.so_me}>
        <Link href="/" aria-label="Facebook">
          Facebook
        </Link>
        <Link href="/" aria-label="Instagram">
          Instagram
        </Link>
        <Link href="/" aria-label="Youtube">
          Youtube
        </Link>
        <Link href="/" aria-label="Twitter">
          Twitter
        </Link>
      </div>
    </footer>
  );
}
