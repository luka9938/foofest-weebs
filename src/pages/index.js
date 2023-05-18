import styles from "./Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // https://blog.avneesh.tech/how-to-make-a-count-down-timer-in-react
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-06-06T00:00:00+01:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  return (
    <main>
      <div className={styles.hero}>
        <h2 className={styles.h2}>
          <span>{timeLeft.days}</span>
          <span> Dage </span>
          <span>{timeLeft.hours}</span>
          <span> Timer </span>
          <span>{timeLeft.minutes}</span>
          <span> Min </span>
          <span>{timeLeft.seconds}</span>
          <span> Sek </span>
        </h2>
        <h2 className={styles.h2}>CHARLOTTENLUND</h2>
        <h1 className={styles.h1}>LIVE FAST CUM HARD</h1>
        <div className={styles.btn_container}>
          <Link className={styles.hero_btn} href="#">
            BUY TICKET
          </Link>
          <Link className={styles.hero_btn} href="#">
            VOLUNTEER
          </Link>
        </div>
      </div>
      <article className={styles.lineup}>
        <section className={styles.lineup_row}>
          <h3 className={styles.h3}>[FRI. 6. JUNE]</h3>
          <ul className={styles.lineup_names}>
            <li>Meatpuppet</li>
            <li>Burn victim</li>
            <li>Killer whale</li>
            <li>Regicide</li>
            <li>Empty throne</li>
            <li>Taker of skulls</li>
            <li>Ebon Chalice</li>
            <li>Corpsegrinder</li>
            <li>Death Company</li>
            <li>Blood Angels</li>
            <li>Meatpuppet</li>
            <li>Burn victim</li>
            <li>Killer whale</li>
          </ul>
        </section>
        <section className={`${styles.lineup_row} ${styles.lineup_middle}`}>
          <h3 className={styles.h3}>[SAT. 7. JUNE]</h3>
          <ul className={styles.lineup_names}>
            <li>Meatpuppet</li>
            <li>Burn victim</li>
            <li>Killer whale</li>
            <li>Regicide</li>
            <li>Empty throne</li>
            <li>Taker of skulls</li>
            <li>Ebon Chalice</li>
            <li>Corpsegrinder</li>
            <li>Death Company</li>
            <li>Blood Angels</li>
          </ul>
        </section>
        <section className={styles.lineup_row}>
          <h3 className={styles.h3}>[SUN. 8. JUNE]</h3>
          <ul className={styles.lineup_names}>
            <li>Meatpuppet</li>
            <li>Burn victim</li>
            <li>Killer whale</li>
            <li>Regicide</li>
            <li>Empty throne</li>
            <li>Taker of skulls</li>
            <li>Ebon Chalice</li>
            <li>Corpsegrinder</li>
            <li>Death Company</li>
            <li>Blood Angels</li>
          </ul>
        </section>
      </article>
    </main>
  );
}
