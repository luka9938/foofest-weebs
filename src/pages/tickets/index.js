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
              <li>- Alle 3 dage på Foofest uden camping.</li>
              <li>
                - Den essentielle pakke til <br />
                "live hard cum fast"
              </li>
            </ul>
            <h3 className={styles.h3}>799,-</h3>
            <Link className={styles.a} href="#">
              KØB NU
            </Link>
          </article>
          <article className={styles.article}>
            <h2 className={styles.h2}>VIP</h2>
            <ul className={styles.ul}>
              <li>
                - Giver adgang til hele festivalpladsen og alle koncerterne samt
                vores særlige R.I.P.-område.
              </li>
              <li>
                - Eksklusivt udvalg af alt fra lækker mad og cocktails til
                eftertragtede specialøl
              </li>
              <li>- Chillout-område</li>
              <li>- Hemmelig merchandisebutik med en stærkt begrænset vare.</li>
            </ul>
            <h3 className={styles.h3}>1299,-</h3>
            <Link className={styles.a} href="#">
              KØB NU
            </Link>
          </article>
        </div>
      </main>
    </>
  );
}
