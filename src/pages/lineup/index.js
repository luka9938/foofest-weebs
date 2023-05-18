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
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
          </p>
          <p className={styles.subtitle}>Dato</p>
        </div>
      </div>
      <div className={`${styles.card} ${styles.smallerCard}`}>
        <div className={styles.cardimg}></div>
        <div className={styles.cardinfo}>
          <p className={styles.title} onClick={togglePopup}>
            Name
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
            <div className={styles.popupimage}>
              <iframe
                className={styles.spotify}
                src="https://open.spotify.com/embed/playlist/5SGaFih3XIAg9emzcqeoWC?utm_source=generator&theme=0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <h2 className={styles.popuptitle}>Popup Title</h2>
            <p className={styles.popupdescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget metus quis eros
              elementum euismod sed eget dolor. Maecenas vitae cursus neque. Suspendisse rutrum id
              est a sollicitudin. Cras non rhoncus lectus, eu ultrices ipsum. Morbi ac dolor quis
              diam luctus hendrerit. Fusce at rutrum eros, quis viverra enim. In bibendum egestas
              leo, vitae aliquet mi ultricies et. Fusce ultricies libero augue, sit amet posuere
              turpis lobortis vitae. Sed quis consectetur lacus, a ornare erat. Pellentesque
              egestas, erat eget cursus elementum, erat enim lacinia mi, vitae tristique sapien
              sapien lacinia turpis. Duis semper, ipsum id convallis sagittis, dui mi porttitor
              odio, in mollis dui erat quis lorem.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
