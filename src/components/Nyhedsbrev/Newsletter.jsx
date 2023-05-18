import styles from "./Newsletter.module.css";
import { useState, useEffect } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the submitted email, such as sending it to a server
    console.log("Submitted email:", email);
    // Reset the form
    setEmail("");

    // Show the confirmation popup
    setShowConfirmation(true);

    // Save the previous page to return to after 3 seconds
    setPreviousPage(window.location.pathname);

    // Hide the confirmation popup after 3 seconds and return to the previous page
    setTimeout(() => {
      setShowConfirmation(false);
      setPreviousPage(null);
    }, 3000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.border}>
          <h2 className={styles.h2}>Subscribe to our Newsletter</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="news-email">
              Email
            </label>
            <input
              id="news-email"
              className={styles.input}
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <button className={styles.button} type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {showConfirmation && (
        <div className={styles.confirmationPopup}>
          <div className={styles.popupContent}>
            <p>Thank you for signing up!</p>
            <p>You will receive our newsletter shortly.</p>
          </div>
        </div>
      )}
      {previousPage && (
        <div className={styles.returnMessage}>
          <p>Returning to the previous page...</p>
        </div>
      )}
    </>
  );
}
