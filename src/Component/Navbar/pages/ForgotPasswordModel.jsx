import React, { useState } from "react";
import "./Modal.css";

const ForgotPasswordModal = ({ onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handleReset = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch("http://localhost:5000/api/user/forgot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage("Reset link sent to your email!");
      setShowOtp(true);
    } else {
      setMessage(data.message || "Reset failed");
    }
  } catch (error) {
    setMessage("Backend se connect nahi ho paaya!");
  }
};



  const handleOtpSubmit = (e) => {
    e.preventDefault();
    setMessage("OTP verified! You can now reset your password.");
    // Yahan aap password reset ka logic add kar sakte hain
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Forgot Password</h2>
          <span className="close-icon" onClick={onClose} title="Close">✖</span>
        </div>
        {!showOtp ? (
          <form onSubmit={handleReset}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Send Reset Link</button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              placeholder="Enter your OTP"
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button type="submit">Verify OTP</button>
          </form>
        )}
        {message && <p className="success-msg">{message}</p>}
        <div className="modal-footer">
          <p>
            <span onClick={onSwitchToLogin}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;