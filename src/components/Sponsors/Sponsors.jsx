import styles from "./Sponsors.module.css";
import Image from "next/image";

export function Sponsors() {
  return (
    <div className={styles.flexContainer}>
      <img
        className={styles.img}
        src={"/sponsors/sponsor1_gold.png"}
        alt="sponsor1"
      />
      <img
        className={styles.img}
        src={"/sponsors/sponsor2_gold.png"}
        alt="sponsor2"
      />
      <img
        className={styles.img}
        src={"/sponsors/sponsor3_gold.png"}
        alt="sponsor3"
      />
    </div>
  );
}
