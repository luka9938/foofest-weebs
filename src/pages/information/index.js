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
    <>
      <Head>
        <title>Practical Information - Boomer Fest</title>
        <meta
          name="description"
          content="Practical information for Your Festival Name"
        />
      </Head>
      <div className={`hero ${styles.hero}`}>
        <h1 className={styles.h1}>Information</h1>
      </div>
      <div className={styles.container}>
        <div className={styles["practical-list"]}>
          <div
            className={`${styles["practical-item"]} ${
              isLocationOpen ? styles.open : ""
            }`}
            onClick={handleLocationClick}
          >
            <div className={styles.locationContainer}>
              <span className={styles.locationText}>
                Where is Boomer Festival?
              </span>
              {isLocationOpen ? (
                <button className={styles.button}>Hide Map</button>
              ) : (
                <button className={styles.button}>Show Map</button>
              )}
            </div>
            {isLocationOpen && (
              <div className={styles.additionalInfo}>
                Løvspringsvej 6a.
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
              </div>
            )}
          </div>
          <details>
            <summary>Camping</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
          <details>
            <summary>Ticketinfo</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
          <details>
            <summary>Age</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
          <details>
            <summary>Entry and wristbands</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
          <details>
            <summary>Terms of purchase of a wristband</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
          <details>
            <summary>List of illegal items</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
          <details>
            <summary>Behavior at the festival</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
          <details>
            <summary>Availability</summary>
            <article className={styles.details_content}>
              <p>Warm-up party July 6th at KEA.</p>
            </article>
          </details>
        </div>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDi6Fdp3SAkvyIPJyDxJmPDr3anwQkulcY",
})(PracticalPage);
