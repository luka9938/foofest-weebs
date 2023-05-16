import React, { useState } from "react";
import Head from "next/head";
import styles from "./practical.module.css";

const PracticalPage = () => {
  const [isLocationOpen, setLocationOpen] = useState(false);
  const [isDateOpen, setDateOpen] = useState(false);
  const [isTimeOpen, setTimeOpen] = useState(false);

  const handleLocationClick = () => {
    setLocationOpen(!isLocationOpen);
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
              {isLocationOpen && (
                <div className={styles.additionalInfo}>
                  Additional information about the location.
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
