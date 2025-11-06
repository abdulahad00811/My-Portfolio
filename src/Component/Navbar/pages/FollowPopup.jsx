import React, { useState, useEffect } from "react";
import "./FollowPopup.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

const FollowPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="follow-popup-container">
          <div className="follow-popup-box">
              <button className="follow-popup-close" onClick={() => setShowPopup(false)}>×</button>
            <p>🚀 Follow me for more projects & updates!</p>
            <div className="follow-buttons">
              <a
                href="https://github.com/your_github_username"
                target="_blank"
                rel="noopener noreferrer"
                className="follow-btn github"
              >
                <FaGithub className="icon" /> GitHub
              </a>
              <a
                href="https://instagram.com/your_instagram_username"
                target="_blank"
                rel="noopener noreferrer"
                className="follow-btn instagram"
              >
                <FaInstagram className="icon" /> Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FollowPopup;
