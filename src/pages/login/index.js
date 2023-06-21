import React, { useState } from "react";
import styles from "./login.module.css";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://mvrpygxleajrurlxamhq.supabase.co",

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12cnB5Z3hsZWFqcnVybHhhbWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxNjQwMjUsImV4cCI6MjAwMjc0MDAyNX0.nnaPMW0IJvDFuNLxpht1EE25DxUHDjbYpAGC8cj9OiA"
);

export default function Login() {
  const [loginMode, setLoginMode] = useState(true);
  const [signupMessage, setSignupMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleToggleMode = () => {
    setLoginMode(!loginMode);
    setSignupMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());

    if (!loginMode) {
      const { error } = await supabase.auth.signUp({
        email: formDataObject.email,
        password: formDataObject.password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        setSignupMessage("Signup successful!");
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: formDataObject.email,
        password: formDataObject.password,
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        window.location.href = "./volunteer";
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <a className={styles.signup}>{loginMode ? "Login" : "Sign up"}</a>
        {!loginMode && signupMessage && <p className={styles.signupMessage}>{signupMessage}</p>}
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input type="text" name="email" required />
            <span className={styles.user}>Email</span>
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
