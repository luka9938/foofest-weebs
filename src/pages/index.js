import styles from "./Home.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import Bands from "@/components/Bands";

export default function Home({ data }) {
  const selectedData1 = data.slice(0, 42);
  const selectedData2 = data.slice(42, 84);
  const selectedData3 = data.slice(84, 126);
  // https://blog.avneesh.tech/how-to-make-a-count-down-timer-in-react
  const calculateTimeLeft = () => {
    const difference = +new Date("2023-07-06T00:00:00+01:00") - +new Date();
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
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
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
          <h3 className={styles.h3}>[FRI. 6. JULY]</h3>
          <ul className={styles.lineup_names}>
            {selectedData1.map((band) => (
              <Bands key={band.name} name={band.name} />
            ))}
          </ul>
        </section>
        <section className={`${styles.lineup_row} ${styles.lineup_middle}`}>
          <h3 className={styles.h3}>[SAT. 7. JULY]</h3>
          <ul className={styles.lineup_names}>
            {selectedData2.map((band) => (
              <Bands key={band.name} name={band.name} />
            ))}
          </ul>
        </section>
        <section className={styles.lineup_row}>
          <h3 className={styles.h3}>[SUN. 8. JULY]</h3>
          <ul className={styles.lineup_names}>
            {selectedData3.map((band) => (
              <Bands key={band.name} name={band.name} />
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

export async function getServerSideProps(ctx) {
  // Construct the API URL with query parameter
  const searchParams = new URLSearchParams();
  searchParams.append("name", ctx.query.name);
  const apiUrl =
    "https://sunrise-innovative-pediatrician.glitch.me/bands?" +
    searchParams.toString();

  // Fetch data from the API
  const res = await fetch(apiUrl);
  const data = await res.json();

  // Return the data inside props
  return {
    props: {
      data,
    },
  };
}
