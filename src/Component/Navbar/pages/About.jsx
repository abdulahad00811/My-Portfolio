import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import img1 from "../../../assets/Myimg1.jpg";
import img2 from "../../../assets/Myimg2.jpg";
import img3 from "../../../assets/Myimg3.jpg";
import { FaDownload, FaCode, FaReact, FaNodeJs, FaDatabase, FaFire } from "react-icons/fa";

const slides = [
  {
    img: img1,
    caption: "Working on my dream project with passion and focus.",
  },
  {
    img: img2,
    caption: "Capturing life moments while learning new tech.",
  },
  {
    img: img3,
    caption: "Collaborating with developers and exploring innovations.",
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    setCurrent(index);
  };

  const handleClick = (e) => {
    const box = sliderRef.current.getBoundingClientRect();
    const clickX = e.clientX - box.left;
    const mid = box.width / 2;
    if (clickX < mid) {
      goToSlide(current - 1);
    } else {
      goToSlide(current + 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      goToSlide(current + 1);
    } else if (diff < -50) {
      goToSlide(current - 1);
    }
  };

  return (
    <div className="about-section" id="about">
      <h2 className="about-title">About Me</h2>

      <div className="about-container">
        {/* Left: Text Content */}
        <div className="about-content">
          <div className="about-bio">
            <h3>Hi, I'm Abdul Ahad 👋</h3>
            <p>
              I'm a passionate full-stack developer with a strong interest in React,
              Node.js, and building real-world apps that solve problems. I love
              collaborating, learning new technologies, and turning ideas into
              elegant code.
            </p>
            <a href="https://drive.google.com/drive/folders/165lbAlkDbUjqN3KjKGRBe1CRZ6LK8O5I" download className="download-btn">
              <FaDownload /> Download CV
            </a>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <h3>Skills</h3>
            <div className="skills-list">
              <div className="skill-item" title="React.js">
                <FaReact /> <span>React.js</span>
                <div className="progress"><div className="bar react" /></div>
              </div>
              <div className="skill-item" title="Node.js">
                <FaNodeJs /> <span>Node.js</span>
                <div className="progress"><div className="bar node" /></div>
              </div>
              <div className="skill-item" title="MongoDB">
                <FaDatabase /> <span>MongoDB</span>
                <div className="progress"><div className="bar mongo" /></div>
              </div>
              <div className="skill-item" title="Firebase">
                <FaFire /> <span>Firebase</span>
                <div className="progress"><div className="bar firebase" /></div>
              </div>
              <div className="skill-item" title="Git/GitHub">
                <FaCode /> <span>Git/GitHub</span>
                <div className="progress"><div className="bar git" /></div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="about-timeline">
            <h3>Milestones</h3>
            <ul>
              <li>📍 2022 - Started my coding journey</li>
              <li>🚀 2023 - Built my first MERN stack app</li>
              <li>🌐 2024 - Launched portfolio projects</li>
              <li>🤖 2025 - Working on AI-integrated web apps</li>
            </ul>
          </div>

          {/* Fun */}
          <div className="about-fun">
            <h3>Fun Facts & Hobbies</h3>
            <div className="fun-grid">
              <div>📸 Photography</div>
              <div>🎮 Gaming</div>
              <div>🎧 Music Lover</div>
              <div>🚴‍♂️ Cycling</div>
              <div>🌍 Exploring Tech</div>
              <div>💡 UI/UX Enthusiast</div>
            </div>
          </div>
        </div>

        {/* Right: Image Slider */}
        <div
          className="slider"
          onClick={handleClick}
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={slides[current].img}
            alt="about"
            className="slide-img fade"
            key={current}
          />
          <p className="slide-caption">{slides[current].caption}</p>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
