import Link from "next/link";
import styles from "./volunteer.module.css";

export default function volunteer() {
  return (
    <>
      <h1 className={styles.subtitle}>Welcome to BoomFest 2023!!!!!</h1>
      <div className={styles.volunteer}>
        <div className={styles.volunteertext}>
          <h2>Dear Volunteer</h2>
          <p className={styles.volunteermoretext}>
            Non utriuque solatium amet netus nobis cum metus securus fecerunt oppressus eu
            oportunitatis error est quae interpretes corporis - v tot ullo s Verius. Non utriuque
            solatium amet netus nobis cum metus securus fecerunt oppressus eu oportunitatis error
            est quae interpretes corporis - v tot ullo s Verius. Non utriuque solatium amet netus
            nobis cum metus securus fecerunt oppressus eu oportunitatis error est quae interpretes
            corporis - v tot ullo s Verius. Non utriuque solatium amet netus nobis cum metus securus
            fecerunt oppressus eu oportunitatis error est quae interpretes corporis - v tot ullo s
            Verius.
          </p>
        </div>
        <div className={styles.volunteergraphics}></div>
      </div>

      <div id="volunteer">
        <div className={styles.container}>
          <div className={styles.cardslist}>
            <Link href="/ticket-page" className={styles.card}>
              <div>
                <h3>My Ticket</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie lacus id
                  magna viverra laoreet. Aliquam id nunc ornare, tempus arcu ac, efficitur ligula.
                </p>
              </div>
            </Link>
            <Link href="#" className={styles.card}>
              <div>
                <h3>My Teams</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie lacus id
                  magna viverra laoreet. Aliquam id nunc ornare, tempus arcu ac, efficitur ligula.
                </p>
              </div>
            </Link>
            <Link href="#" className={styles.card}>
              <div>
                <h3>My Shift</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie lacus id
                  magna viverra laoreet. Aliquam id nunc ornare, tempus arcu ac, efficitur ligula.
                </p>
              </div>
            </Link>
            <Link href="#" className={styles.card}>
              <div>
                <h3>Shift Exchange</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie lacus id
                  magna viverra laoreet. Aliquam id nunc ornare, tempus arcu ac, efficitur ligula.
                </p>
              </div>
            </Link>
            <Link href="/news" className={styles.card}>
              <div>
                <h3>News</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie lacus id
                  magna viverra laoreet. Aliquam id nunc ornare, tempus arcu ac, efficitur ligula.
                </p>
              </div>
            </Link>
            <Link href="/information" className={styles.card}>
              <div>
                <h3>FAQ</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie lacus id
                  magna viverra laoreet. Aliquam id nunc ornare, tempus arcu ac, efficitur ligula.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
