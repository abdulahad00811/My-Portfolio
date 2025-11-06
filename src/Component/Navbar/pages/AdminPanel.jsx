import React, { useState, useEffect } from "react";
import AdminAuth from "./AdminAuth";
import "./AdminPanel.css";

const stats = [
  { title: "Users", number: 12 },
  { title: "Projects", number: 6 },
  { title: "Messages", number: 24 },
];

export default function AdminPanel() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") setIsAuth(true);
  }, []);

  const handleAuth = () => setIsAuth(true);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAuth(false);
  };

  if (!isAuth) return <AdminAuth onAuth={handleAuth} />;

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <div className="admin-logo">Dashboard</div>
        <nav className="admin-nav">
          <a href="#">Home</a>
          <a href="#">Projects</a>
          <a href="#">Users</a>
          <a href="#">Messages</a>
          <button className="admin-logout" onClick={handleLogout}>Logout</button>
        </nav>
      </aside>
      <main className="admin-main">
        <h1>Welcome, Admin!</h1>
        <div className="admin-stats">
          {stats.map((card, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-title">{card.title}</div>
              <div className="stat-val">{card.number}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}