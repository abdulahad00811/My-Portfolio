import React, { useState } from "react";
import "./Modal.css";

const LoginModal = ({ onClose, onSwitchToSignup, onSwitchToForgot }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Login Success!");  // yahan tum redirect ya kuch bhi kar sakte ho
    } else {
      alert(data.message || "Login failed");
    }
  } catch (error) {
    alert("Backend se connect nahi ho paaya!");
  }
};

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Login</h2>
          <span className="close-icon" onClick={onClose} title="Close">✖</span>
        </div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>
            <span className="forgot-link" onClick={onSwitchToForgot}>Forgot Password?</span>
          </p>
          <button type="submit">Login</button>
        </form>
        <div className="modal-footer">
          <p>
            Don't have an account?{" "}
            <span onClick={onSwitchToSignup}>Sign up</span>
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default LoginModal;