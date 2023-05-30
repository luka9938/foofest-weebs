import styles from "./tickets.module.css";
import Link from "next/link";

export default function Tickets() {
  return (
    <>
      <main>
        <div className={`hero ${styles.hero}`}>
          <h1 className={styles.h1}>TICKETS</h1>
        </div>
        <div className={styles.ticket_container}>
          <article className={styles.article}>
            <h2 className={styles.h2}>Regular</h2>
            <ul className={styles.ul}>
              <li>- Grants access to all three days of BOOM FEST</li>
              <li>
                - The essential package for <br />
                BOOM FEST 2023
              </li>
            </ul>
            <h3 className={styles.h3}>799,-</h3>
            <Link className={styles.a} href="#">
              BUY NOW
            </Link>
          </article>
          <article className={styles.article}>
            <h2 className={styles.h2}>VIP</h2>
            <ul className={styles.ul}>
              <li>
                - Provides access to the entire festival area and all the
                concerts, including our special V.I.P. area
              </li>
              <li>
                - Exclusive selection of everything from delicious food and
                cocktails to craft beers
              </li>
              <li>- Chillout-area</li>
              <li>- Secret merch store with vert limited merch</li>
            </ul>
            <h3 className={styles.h3}>1299,-</h3>
            <Link className={styles.a} href="#">
              BUY NOW
            </Link>
          </article>
        </div>
      </main>
    </>
  );
}
