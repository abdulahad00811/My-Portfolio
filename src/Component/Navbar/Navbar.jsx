import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import darkLogo from "../../assets/light_logo.png";
import lightLogo from "../../assets/dark_logo.png";
import sunIcon from "../../assets/Sun.png";
import moonIcon from "../../assets/Moon.png";
import lightSearchIcon from "../../assets/lightS.png";
import darkSearchIcon from "../../assets/darkS.png";

export default function Navbar({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <div className="navbar-logo">
        <Link to="home" smooth={true} duration={500} offset={-70}>
          {/* <img src={darkMode ? lightLogo : darkLogo} alt="logo" /> */}
          <span className="logo-text">
            <span className="logo-first-letter">A</span>
            <span>HAD</span>
          </span>
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <div className="close-icon">✖</div>
        ) : (
          <>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
            <span className="menu-icon-bar"></span>
          </>
        )}
      </div>

      <div className="navbar-search desktop-search">
        <input type="text" placeholder="Search..." className="search-input" />
        <img
          src={darkMode ? darkSearchIcon : lightSearchIcon}
          alt="Search"
          className="search-icon"
        />
      </div>

      <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
        <li className="mobile-search">
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <img
              src={darkMode ? darkSearchIcon : lightSearchIcon}
              alt="Search"
              className="search-icon"
            />
          </div>
        </li>

        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            className="navbar-link"
          >
            Home
          </Link>
        </li>
        {/* <li>
          <Link
            to="news"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            className="navbar-link"
          >
            News
          </Link>
        </li> */}
         <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            className="navbar-link"
          >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            to="blog"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            className="navbar-link"
          >
            Blog
          </Link>
        </li> */}
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            className="navbar-link"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="certificates"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            className="navbar-link"
          >
            Certificates
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
            spy={true}
            onClick={closeMenu}
            className="navbar-link"
          >
            Contact
          </Link>
        </li>

        <li className="login-btn">
          <button type="button" className="login-button" onClick={onLoginClick}>
            Login
          </button>
        </li>

        <li className="dark-mode-toggle" onClick={toggleDarkMode}>
          <img
            src={darkMode ? sunIcon : moonIcon}
            alt="Toggle dark mode"
            className="dark-mode-icon"
          />
        </li>
      </ul>
    </nav>
  );
}



// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
// import "./Navbar.css";
// import darkLogo from "../../assets/light_logo.png";
// import lightLogo from "../../assets/dark_logo.png";
// import sunIcon from "../../assets/Sun.png";
// import moonIcon from "../../assets/Moon.png";
// import lightSearchIcon from "../../assets/lightS.png";
// import darkSearchIcon from "../../assets/darkS.png";
// // import Ecommerce from './pages/Ecommerce';

// export default function Navbar({ onLoginClick }) {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [showProjectsDropdown, setShowProjectsDropdown] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => {
//     setIsMenuOpen(false);
//     setShowProjectsDropdown(false);
//   };
//   const toggleDarkMode = () => setDarkMode(!darkMode);

//   useEffect(() => {
//     if (darkMode) {
//       document.body.classList.add("dark");
//     } else {
//       document.body.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <nav className={`navbar ${darkMode ? "dark" : ""}`}>
//       <div className="navbar-logo">
//         <Link to="home" smooth={true} duration={500} offset={-70}>
//           <img src={darkMode ? lightLogo : darkLogo} alt="logo" />
//         </Link>
//       </div>

//       <div className="menu-toggle" onClick={toggleMenu}>
//         {isMenuOpen ? (
//           <div className="close-icon">✖</div>
//         ) : (
//           <>
//             <span className="menu-icon-bar"></span>
//             <span className="menu-icon-bar"></span>
//             <span className="menu-icon-bar"></span>
//           </>
//         )}
//       </div>

//       <div className="navbar-search desktop-search">
//         <input type="text" placeholder="Search..." className="search-input" />
//         <img
//           src={darkMode ? darkSearchIcon : lightSearchIcon}
//           alt="Search"
//           className="search-icon"
//         />
//       </div>

//       <ul className={`navbar-links ${isMenuOpen ? "show" : ""}`}>
//         <li className="mobile-search">
//           <div className="navbar-search">
//             <input
//               type="text"
//               placeholder="Search..."
//               className="search-input"
//             />
//             <img
//               src={darkMode ? darkSearchIcon : lightSearchIcon}
//               alt="Search"
//               className="search-icon"
//             />
//           </div>
//         </li>

//         <li>
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             activeClass="active"
//             spy={true}
//             onClick={closeMenu}
//             className="navbar-link"
//           >
//             Home
//           </Link>
//         </li>
//         {/* <Route path="/ecommerce" element={<Ecommerce />} /> */}

//         <li>
//           <Link
//             to="news"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             activeClass="active"
//             spy={true}
//             onClick={closeMenu}
//             className="navbar-link"
//           >
//             News
//           </Link>
//         </li>

//         {/* Projects Dropdown Parent */}
//         <li 
//           className="projects-parent"
//           onMouseEnter={() => setShowProjectsDropdown(true)}
//           onMouseLeave={() => setShowProjectsDropdown(false)}
//         >
//           <span
//             className="projects-dropdown-title navbar-link"
//             onClick={() => {
//               closeMenu();
//               // Scroll to projects section if needed or toggle dropdown for mobile
//               setShowProjectsDropdown(!showProjectsDropdown);
//             }}
//             style={{ cursor: "pointer" }}
//           >
//             Projects ▼
//           </span>

//           {/* Dropdown menu */}
//           {showProjectsDropdown && (
//             <ul className="projects-dropdown">
//               <li>
//                 <Link
//                   to="project1"
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                   spy={true}
//                   onClick={closeMenu}
//                   className="dropdown-item"
//                 >
//                   Project 1
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="project2"
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                   spy={true}
//                   onClick={closeMenu}
//                   className="dropdown-item"
//                 >
//                   Project 2
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="project3"
//                   smooth={true}
//                   duration={500}
//                   offset={-70}
//                   activeClass="active"
//                   spy={true}
//                   onClick={closeMenu}
//                   className="dropdown-item"
//                 >
//                   Project 3
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </li>

//         <li>
//           <Link
//             to="blog"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             activeClass="active"
//             spy={true}
//             onClick={closeMenu}
//             className="navbar-link"
//           >
//             Blog
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             activeClass="active"
//             spy={true}
//             onClick={closeMenu}
//             className="navbar-link"
//           >
//             About
//           </Link>
//         </li>

//         <li>
//           <Link
//             to="contact"
//             smooth={true}
//             duration={500}
//             offset={-70}
//             activeClass="active"
//             spy={true}
//             onClick={closeMenu}
//             className="navbar-link"
//           >
//             Contact
//           </Link>
//         </li>

//         <li className="login-btn">
//           <button type="button" className="login-button" onClick={onLoginClick}>
//             Login
//           </button>
//         </li>

//         <li className="dark-mode-toggle" onClick={toggleDarkMode}>
//           <img
//             src={darkMode ? sunIcon : moonIcon}
//             alt="Toggle dark mode"
//             className="dark-mode-icon"
//           />
//         </li>
//       </ul>
//     </nav>
//   );
// }
