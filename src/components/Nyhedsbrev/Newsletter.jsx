import styles from "./Newsletter.module.css";
import { useState, useEffect } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [previousPage, setPreviousPage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform actions with the submitted email
    console.log("Submitted email:", email);
    // Reset the form
    setEmail("");

    // Show the confirmation popup
    setShowConfirmation(true);

    // Save the previous page to return to after 3 seconds
    setPreviousPage(window.location.pathname);

    // Hide the confirmation popup after 2.5 seconds and return to the previous page
    setTimeout(() => {
      setShowConfirmation(false);
      setPreviousPage(null);
    }, 2500);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.h2}>Subscribe to our Newsletter</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label} htmlFor="news-email">
            Email
          </label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          <button className={styles.button}>
            <p>Subscribe</p>
            <svg
              strokeWidth="4"
              stroke="currentColor"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 5l7 7m0 0l-7 7m7-7H3"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      {showConfirmation && (
        <div className={styles.confirmationPopup}>
          <div className={styles.popupContent}>
            <img className={styles.popupImage} src="/confirmation.svg" alt="Signed up" />
            <p>Thank you for signing up!</p>
            <p>You will receive our newsletter shortly.</p>
          </div>
        </div>
      )}
    </>
  );
}
