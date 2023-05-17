import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./practical.module.css";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const PracticalPage = ({ google }) => {
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isDateOpen, setDateOpen] = useState(false);
  const [isTimeOpen, setTimeOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (!isLocationOpen) {
      setMapCenter({ lat: 55.76109378592378, lng: 12.579019359672232 });
    }
  }, [isLocationOpen]);

  const handleLocationClick = (event) => {
    event.stopPropagation();
    setLocationOpen(!isLocationOpen);
  };

  const handleMapClick = (event) => {
    event.stopPropagation();
  };

  const handleDateClick = () => {
    setDateOpen(!isDateOpen);
  };

  const handleTimeClick = () => {
    setTimeOpen(!isTimeOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Practical Information - Your Festival Name</title>
        <meta
          name="description"
          content="Practical information for Your Festival Name"
        />
      </Head>

      <h1 className={styles.title}>Practical Information</h1>
      <div className={styles.information}>
        <h2 className={styles.subtitle}>Important Details:</h2>
        <ul className={styles["practical-list"]}>
          <li
            className={`${styles["practical-item"]} ${
              isLocationOpen ? styles.open : ""
            }`}
            onClick={handleLocationClick}
          >
            <div className={styles.locationContainer}>
              <span className={styles.locationText}>
                Location: Steffens lejlighed
              </span>
              {isLocationOpen ? (
                <button className={styles.hideButton}>Hide Map</button>
              ) : (
                <button className={styles.showButton}>Show Map</button>
              )}
            </div>
            {isLocationOpen && (
              <div className={styles.additionalInfo}>
                Additional information about the location.
                <div className={styles.mapContainer} onClick={handleMapClick}>
                  <Map
                    google={google}
                    zoom={14}
                    initialCenter={mapCenter}
                    className={styles.map}
                  >
                    <Marker
                      position={{
                        lat: 55.76074970251176,
                        lng: 12.578783325298094,
                      }}
                    />
                  </Map>
                </div>
                <div className={styles.buttonContainer}>
                  {isLocationOpen ? (
                    <button className={`${styles.button} ${styles.hideButton}`}>
                      Hide Map
                    </button>
                  ) : (
                    <button className={styles.button}>Show Map</button>
                  )}
                </div>
              </div>
            )}
          </li>

          <li
            className={`${styles["practical-item"]} ${
              isDateOpen ? styles.open : ""
            }`}
            onClick={handleDateClick}
          >
            Date: Festival Date
            {isDateOpen && (
              <div className={styles.additionalInfo}>
                Additional information about the date.
              </div>
            )}
          </li>
          <li
            className={`${styles["practical-item"]} ${
              isTimeOpen ? styles.open : ""
            }`}
            onClick={handleTimeClick}
          >
            Time: Festival Time
            {isTimeOpen && (
              <div className={styles.additionalInfo}>
                Additional information about the time.
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDi6Fdp3SAkvyIPJyDxJmPDr3anwQkulcY",
})(PracticalPage);
