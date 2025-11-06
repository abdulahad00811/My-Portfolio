import React, { useState } from "react";
import "./AdminPanel.css";

export default function AdminAuth({ onAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple static check (replace with real backend check in production)
    if (username === "Ahad Abdul" && password === "AhadAbdul@00811@Ahad") {
      localStorage.setItem("isAdmin", "true");
      onAuth();
    } else {
      setErr("Invalid credentials");
    }
  };

  return (
    <div className="admin-auth-bg">
      <form className="admin-auth-box" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        {err && <div className="admin-auth-error">{err}</div>}
        <input
          type="text"
          placeholder="Username"
          autoFocus
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}