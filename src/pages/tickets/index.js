import styles from "./tickets.module.css";

export default function Tickets() {
  return (
    <>
      <main>
        <div className="hero">
          <h1 className={styles.h1}>TICKETS</h1>
        </div>
        <div className={styles.ticket_container}>
          <article className={styles.article}>
            <h2 className={styles.h2}>Regular</h2>
            <ul className={styles.ul}>
              <li>- Alle 8 dage på Foofest uden camping.</li>
              <li>
                - Den essentielle pakke til <br />
                "live hard cum fast"
              </li>
            </ul>
            <h3 className={styles.h1}>799,-</h3>
            <a className={styles.a} href="#">
              KØB NU
            </a>
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
            <h3 className={styles.h1}>1299,-</h3>
            <a className={styles.a} href="#">
              KØB NU
            </a>
          </article>
        </div>
      </main>
    </>
  );
}
