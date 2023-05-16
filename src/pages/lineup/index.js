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
          <div className={styles.popupcontent}>
            <div className={styles.popupimage}></div>
            <h2 className={styles.popuptitle}>Popup Title</h2>
            <p className={styles.popupdescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed enim gravida,
              rutrum tellus nec, interdum velit. Vestibulum imperdiet nunc eros, consequat bibendum
              nibh efficitur sed. Fusce sagittis ex vitae eleifend posuere. Nunc interdum orci id
              massa dapibus laoreet. Pellentesque ut dolor in nunc sagittis feugiat eu eu sem.
              Curabitur facilisis lectus nisi, quis venenatis purus ultricies at. Nulla bibendum
              libero erat, non scelerisque turpis placerat nec. Sed vulputate dictum libero,
              suscipit vehicula quam pharetra sit amet. Nulla vulputate ipsum in eros luctus, quis
              auctor urna lacinia. Quisque sed ultrices nisi.
            </p>
            <iframe
              className={styles.play}
              src="https://open.spotify.com/embed/playlist/5SGaFih3XIAg9emzcqeoWC?utm_source=generator"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
