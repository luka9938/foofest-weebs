import React, { useState } from "react";
import styles from "./login.module.css";

export default function Login() {
  const [loginMode, setLoginMode] = useState(true);
  const [signupMessage, setSignupMessage] = useState("");

  const handleToggleMode = () => {
    setLoginMode(!loginMode);
    setSignupMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());
    console.log(formDataObject);
    if (!loginMode) {
      setSignupMessage("Signup successful!");
    } else {
      window.location.href = "./frivillig";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <a className={styles.signup}>{loginMode ? "Login" : "Sign up"}</a>
        {!loginMode && signupMessage && <p className={styles.signupMessage}>{signupMessage}</p>}
        <form onSubmit={handleSubmit}>
          {!loginMode && (
            <div className={styles.inputBox1}>
              <input type="text" name="email" required />
              <span className={styles.user}>Email</span>
            </div>
          )}

          <div className={styles.inputBox}>
            <input type="text" name="username" required />
            <span>Username</span>
          </div>

          <div className={styles.inputBox}>
            <input type="password" name="password" required />
            <span>Password</span>
          </div>

          <button type="submit" className={styles.enter}>
            {loginMode ? "Login" : "Sign Up"}
          </button>
        </form>

        <a className={styles.toggle} onClick={handleToggleMode}>
          {loginMode ? "Sign Up" : "Login"}
        </a>
      </div>
    </div>
  );
}
