import React from "react";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <a className={styles.signup}>Sign Up</a>
        <div className={styles.inputBox1}>
          <input type="text" required="required" />
          <span className={styles.user}>Email</span>
        </div>

        <div className={styles.inputBox}>
          <input type="text" required="required" />
          <span>Username</span>
        </div>

        <div className={styles.inputBox}>
          <input type="password" required="required" />
          <span>Password</span>
        </div>

        <button className={styles.enter}>Enter</button>
      </div>
    </div>
  );
}
