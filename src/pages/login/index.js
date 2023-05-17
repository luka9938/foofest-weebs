import React from "react";

export default function Login() {
  return (
    <div className="container">
      <div className="card">
        <a className="signup">Sign Up</a>
        <div className="inputBox1">
          <input type="text" required="required" />
          <span className="user">Email</span>
        </div>

        <div className="inputBox">
          <input type="text" required="required" />
          <span>Username</span>
        </div>

        <div className="inputBox">
          <input type="password" required="required" />
          <span>Password</span>
        </div>

        <button className="enter">Enter</button>
      </div>
    </div>
  );
}
