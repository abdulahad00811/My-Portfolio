import React, { useState } from "react";
import "./Modal.css";

const SignupModal = ({ onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSignup = async (e) => {
  e.preventDefault();
  if (password!== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  try {
    const res = await fetch("http://localhost:5000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok) {
      alert("Signup Success!");
      // yahan tum onClose() ya doosra action bhi chala sakte ho
    } else {
      alert(data.message || "Signup failed!");
    }
  } catch (error) {
    alert("Backend se connect nahi ho paaya!");
  }
};
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Sign Up</h2>
          <span className="close-icon" onClick={onClose} title="Close">✖</span>
        </div>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="remember-row">
            <input
              type="checkbox"
              id="remember"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="remember-checkbox"
            />
            <label htmlFor="remember" className="remember-label">
              Remember my password
            </label>
          </div>
          <button type="submit">Create Account</button>
        </form>
        <div className="modal-footer">
          <p>
            Already have an account?{" "}
            <span onClick={onSwitchToLogin}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
