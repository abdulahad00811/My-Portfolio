import React, { useState } from "react";
import "./Home.css";
import Myimage from "../../../assets/Myimage.jpg";
import { FaGithub, FaLinkedin, FaWhatsapp, FaRobot } from "react-icons/fa";
import { SiX } from "react-icons/si"; // New X (Twitter) logo
// import ChatBot from './ChatBot';

export default function Home() {
  const [showChatBot, setShowChatBot] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="hero-left">
        <div className="intro-text">
          <p className="section-title">Hi, I'm Abdul Ahad</p>
          <h1 className="hero-section-title">
            Building <span className="highlight">Robust</span> &{" "}
            <span className="highlight">Scalable</span>
            <br />
            Web Applications
          </h1>
          <p className="hero-section-description">
            A passionate Full Stack Developer skilled in React, Node.js,
            Express, and MongoDB. Turning ideas into reality with clean,
            efficient code.
          </p>
          <div className="skills">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JavaScript</span>
          </div>
          <div className="get-in-touch">
            <a
              href="https://wa.me/917037382479?text=Hi%20Abdul%20Ahad%2C%20I%20visited%20your%20portfolio."
              target="_blank"
              rel="noreferrer"
              className="whatsapp-button"
            >
              Get In Touch
              <FaWhatsapp className="whatsapp-icon" />
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/CodingWithAhad" target="_blank" rel="noreferrer" className="github-link">
              <FaGithub style={{ fill: "#181717" }}/>
            </a>
            <a href="https://linkedin.com/in/abdulahad-devloper" target="_blank" rel="noreferrer" className="linkedin-link">
              <FaLinkedin style={{ fill: "#0A66C2" }} />
            </a>
            <a href="https://twitter.com/oye-abdul" target="_blank" rel="noreferrer" className="x-link">
              <SiX style={{ fill: "#181717" }} />
            </a>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="image-container">
          <img src={Myimage} alt="Abdul Ahad" className="hero-section-image" />
        </div>
      </div>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setShowChatBot(true)}
        style={{
          position: "fixed",
          bottom: 80,
          right: 23,
          width: 54,
          height: 54,
          borderRadius: "50%",
          backgroundColor: "#4caf50",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 28,
          boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
        }}
        title="Chatbot"
      >
        <FaRobot />
      </button>

      {/* Chatbot Popup */}
      {showChatBot && (
        <div
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 350,
            height: 480,
            border: "1px solid #ccc",
            backgroundColor: "white",
            zIndex: 2001,
            borderRadius: 10,
            boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <ChatBot onClose={() => setShowChatBot(false)} />
        </div>
      )}
    </section>
  );
}
