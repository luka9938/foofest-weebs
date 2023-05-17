import React, { useState } from "react";
import styles from "./lineup.module.css";

export default function Lineup() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.container}>
      <div className={`${styles.card} ${styles.bigCard} `}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.bigCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title}>
            <a href="https://example.com">Name</a>
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>

      {/* ...other cards... */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.grid_container}>
            <div className={styles.item1}>1</div>
            <div className={styles.item2}>
              2
              <button className={styles.closeButton} onClick={closePopup}>
                Close
              </button>
            </div>
            <div className={styles.item3}>3</div>
          </div>
        </div>
      )}
    </div>
  );
}
