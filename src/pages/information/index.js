import React, { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./practical.module.css";
import { Map, Marker } from "google-maps-react";

const PracticalPage = () => {
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isDateOpen, setDateOpen] = useState(false);
  const [isTimeOpen, setTimeOpen] = useState(false);
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [googleMapsLoaded, setGoogleMapsLoaded] = useState(false);

  useEffect(() => {
    if (!googleMapsLoaded) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDi6Fdp3SAkvyIPJyDxJmPDr3anwQkulcY`;
      script.async = true;
      script.onload = () => {
        setGoogleMapsLoaded(true);
      };
      document.head.appendChild(script);
    }
  }, []);

  const handleLocationClick = () => {
    setLocationOpen(!isLocationOpen);

    if (!isLocationOpen) {
      setMapCenter({ lat: 55.76109378592378, lng: 12.579019359672232 });
    }
  };

  const handleDateClick = () => {
    setDateOpen(!isDateOpen);
  };

  const handleTimeClick = () => {
    setTimeOpen(!isTimeOpen);
  };

  return (
    <div>
      <Head>
        <title>Practical Information - Your Festival Name</title>
        <meta
          name="description"
          content="Practical information for Your Festival Name"
        />
      </Head>

      <div className={styles.container}>
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
              Location: Your Festival Location
              {isLocationOpen ? (
                <button>Hide Map</button>
              ) : (
                <button>Show Map</button>
              )}
              {isLocationOpen && googleMapsLoaded && (
                <div className={styles.additionalInfo}>
                  Additional information about the location.
                  <div className={styles.mapContainer}>
                    <Map
                      google={window.google}
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
            {/* Add more practical information here */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PracticalPage;
