import styles from "./Header.module.css";
import Link from "next/link";

export function Header() {
  return (
    <header className="wrapper">
      <Link href="/" aria-label="EDC">
        Header
      </Link>
    </header>
  );
}
