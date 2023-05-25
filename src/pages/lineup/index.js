import React, { useState, useEffect } from "react";
import styles from "./lineup.module.css";

export default function Lineup() {
  const [showPopup, setShowPopup] = useState(false);
  const [bands, setBands] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [bandBios, setBandBios] = useState({});

  useEffect(() => {
    // Fetch bands data from the API
    fetch("https://sunrise-innovative-pediatrician.glitch.me/bands")
      .then((response) => response.json())
      .then((data) => {
        setBands(data);
        // Extract band bios and store them in bandBios state
        const bios = {};
        data.forEach((band) => {
          bios[band.name] = band.bio;
        });
        setBandBios(bios);
      })
      .catch((error) => console.error(error));

    // Fetch schedule data from the API
    fetch("https://sunrise-innovative-pediatrician.glitch.me/schedule")
      .then((response) => response.json())
      .then((data) => setSchedule(data))
      .catch((error) => console.error(error));
  }, []);

  const togglePopup = (band) => {
    setShowPopup(!showPopup);
    setShowPopup(band);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const getBandSchedule = (bandName) => {
    for (const stage of Object.keys(schedule)) {
      const daySchedule = schedule[stage];
      for (const day of Object.keys(daySchedule)) {
        const slots = daySchedule[day];
        for (const slot of slots) {
          if (slot.act === bandName) {
            return {
              stageId: stage,
              start: slot.start,
              end: slot.end,
              day: day,
            };
          }
        }
      }
    }
    return {};
  };

  const getStageName = (stageId) => {
    if (stageId === "Midgard") {
      return "Midgard";
    } else if (stageId === "Vanaheim") {
      return "Vanaheim";
    } else if (stageId === "Jotunheim") {
      return "Jotunheim";
    }
    return "Unknown";
  };

  return (
    <div className={styles.container}>
      {bands.map((band) => (
        <div key={band.id} className={`${styles.card} ${styles.smallCard}`}>
          <div
            className={styles.cardimg}
            style={{
              backgroundImage: `url(/${band.logo})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className={styles.cardinfo}>
            <p className={styles.title} onClick={() => togglePopup(band)}>
              {band.name}
            </p>
            <p className={styles.subtitle}>{band.dato}</p>
          </div>
        </div>
      ))}
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
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            <h2 className={styles.popuptitle}>{showPopup.name}</h2>
            <h3 className={styles.popupsubtitle}>Scheduled Stage:</h3>
            <p className={styles.popupdescription}>
              {getStageName(getBandSchedule(showPopup.name)?.stageId)}
            </p>
            <h3 className={styles.popupsubtitle}>Start Time:</h3>
            <p className={styles.popupdescription}>
              {getBandSchedule(showPopup.name)?.start}
            </p>
            <h3 className={styles.popupsubtitle}>End Time:</h3>
            <p className={styles.popupdescription}>
              {getBandSchedule(showPopup.name)?.end}
            </p>
            <h3 className={styles.popupsubtitle}>Bio:</h3>
            <p className={styles.popupdescription}>
              {bandBios[showPopup.name]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
