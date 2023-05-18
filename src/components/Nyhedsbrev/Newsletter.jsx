import styles from "./Newsletter.module.css";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (element) => {
    element.preventDefault();
    // Perform actions with the submitted email, such as sending it to a server
    console.log("Submitted email:", email);
    // Reset the form
    setEmail("");
  };

  const handleChange = (element) => {
    setEmail(element.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.border}>
          <h2 className={styles.h2}>Subscribe to our Newsletter</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label} for="news-email">
              Email
            </label>
            <input id="news-email" className={styles.input} type="email" value={email} onChange={handleChange} placeholder="Enter your email" required />
            <button className={styles.button} type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
