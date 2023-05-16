import React, { useState } from "react";
import styles from "./lineup.module.css";

export default function Home() {
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
          <button className={styles.closeButton} onClick={closePopup}>
            Close
          </button>
          <div className={styles.popupContent}>
            <div className={styles.popupImage}></div>
            <h2 className={styles.popupTitle}>Popup Title</h2>
            <p className={styles.popupDescription}>Popup description goes here.</p>
          </div>
        </div>
      )}
    </div>
  );
}
