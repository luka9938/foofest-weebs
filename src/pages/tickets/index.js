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
            <a className={styles.a} href="#">
              799,-
            </a>
          </article>
          <article className={styles.article}>
            <h2 className={styles.h2}>VIP</h2>
            <a className={styles.a} href="#">
              1299,-
            </a>
          </article>
        </div>
      </main>
    </>
  );
}
