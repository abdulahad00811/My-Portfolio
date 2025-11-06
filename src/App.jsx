import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Navbar/pages/Home";
import About from "./Component/Navbar/pages/About";
import Projects from "./Component/Navbar/pages/Projects";
import Contact from "./Component/Navbar/pages/Contact";
import Footer from "./Component/Navbar/pages/Footer";
import ChattingApp from "./Component/Navbar/pages/ChattingApp";
import LudoApp from "./Component/Navbar/pages/LudoApp";
import LoginModal from "./Component/Navbar/pages/Login";
import SignupModal from "./Component/Navbar/pages/SignUp";
import ForgotPasswordModal from "./Component/Navbar/pages/ForgotPasswordModel";
import AdminPanel from "./Component/Navbar/pages/AdminPanel";
import BlogPage from "./Component/Navbar/pages/BlogPage";
import AddBlogModal from "./Component/Navbar/pages/AddBlogModal";
import FollowPopup from "./Component/Navbar/pages/FollowPopup"; // update path accordingly
import BlogDetail from "./Component/Navbar/pages/BlogDetail";
import ChatBot from './Component/Navbar/pages/ChatBot';  // apne ChatBot.js ka sahi path yahan do
import News from './Component/Navbar/pages/News';






const App = () => {
  const [modalType, setModalType] = useState(null); // 'login', 'signup', 'forgot'
  const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth logic

  const closeModal = () => setModalType(null);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar onLoginClick={() => setModalType("login")} />

            {modalType === "login" && (
              <LoginModal
                onClose={closeModal}
                onSwitchToSignup={() => setModalType("signup")}
                onSwitchToForgot={() => setModalType("forgot")}
                onLoginSuccess={() => {
                  setIsLoggedIn(true);
                  closeModal();
                }}
              />
            )}
            {modalType === "signup" && (
              <SignupModal
                onClose={closeModal}
                onSwitchToLogin={() => setModalType("login")}
              />
            )}
            {modalType === "forgot" && (
              <ForgotPasswordModal
                onClose={closeModal}
                onSwitchToLogin={() => setModalType("login")}
              />
            )}

            {isAddBlogOpen && (
              <AddBlogModal onClose={() => setIsAddBlogOpen(false)} />
            )}

            <Home />
            {/* <div className="news-main-outer">
              <News />
            </div> */}

            <Projects />
            {/* <BlogPage
              isLoggedIn={isLoggedIn}
              onLoginClick={() => setModalType("login")}
              onAddBlogClick={() =>
                isLoggedIn ? setIsAddBlogOpen(true) : setModalType("login")
              }

            /> */}
            <About />

            <Contact />
            {/* <ChattingApp /> */}
            {/* <LudoApp /> */}
            <Footer />
            <FollowPopup />
          </>
        }
      />

      <Route
        path="/blog"
        element={
          <BlogPage
            isLoggedIn={isLoggedIn}
            onLoginClick={() => setModalType("login")}
            onAddBlogClick={() =>
              isLoggedIn ? setIsAddBlogOpen(true) : setModalType("login")
            }
          />
        }
      />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/chatbot" element={<ChatBot />} />



      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};

export default App;




// import React, { useState } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import Navbar from "./Component/Navbar/Navbar";
// import Home from "./Component/Navbar/pages/Home";
// import About from "./Component/Navbar/pages/About";
// import Projects from "./Component/Navbar/pages/Projects";
// import Contact from "./Component/Navbar/pages/Contact";
// import Footer from "./Component/Navbar/pages/Footer";
// import ChattingApp from "./Component/Navbar/pages/ChattingApp";
// import LudoApp from "./Component/Navbar/pages/LudoApp";
// import LoginModal from "./Component/Navbar/pages/Login";
// import SignupModal from "./Component/Navbar/pages/SignUp";
// import ForgotPasswordModal from "./Component/Navbar/pages/ForgotPasswordModel";
// import AdminPanel from "./Component/Navbar/pages/AdminPanel";
// import BlogPage from "./Component/Navbar/pages/BlogPage";
// import AddBlogModal from "./Component/Navbar/pages/AddBlogModal";
// import FollowPopup from "./Component/Navbar/pages/FollowPopup";
// import BlogDetail from "./Component/Navbar/pages/BlogDetail";

// const App = () => {
//   const [modalType, setModalType] = useState(null); // 'login', 'signup', 'forgot'
//   const [isAddBlogOpen, setIsAddBlogOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Replace with actual auth logic

//   const closeModal = () => setModalType(null);

//   return (
//     <>
//       <Navbar onLoginClick={() => setModalType("login")} />

//       {modalType === "login" && (
//         <LoginModal
//           onClose={closeModal}
//           onSwitchToSignup={() => setModalType("signup")}
//           onSwitchToForgot={() => setModalType("forgot")}
//           onLoginSuccess={() => {
//             setIsLoggedIn(true);
//             closeModal();
//           }}
//         />
//       )}
//       {modalType === "signup" && (
//         <SignupModal
//           onClose={closeModal}
//           onSwitchToLogin={() => setModalType("login")}
//         />
//       )}
//       {modalType === "forgot" && (
//         <ForgotPasswordModal
//           onClose={closeModal}
//           onSwitchToLogin={() => setModalType("login")}
//         />
//       )}

//       {isAddBlogOpen && (
//         <AddBlogModal onClose={() => setIsAddBlogOpen(false)} />
//       )}

//       <Routes>
//         <Route path="/" element={<Navigate to="/home" />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/blog"
//           element={
//             <BlogPage
//               isLoggedIn={isLoggedIn}
//               onLoginClick={() => setModalType("login")}
//               onAddBlogClick={() =>
//                 isLoggedIn ? setIsAddBlogOpen(true) : setModalType("login")
//               }
//             />
//           }
//         />
//         {/* ======== IMPORTANT: BlogDetail Route Here ======== */}
//         
//         {/* ======== */}
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/chat" element={<ChattingApp />} />
//         <Route path="/ludo" element={<LudoApp />} />
//         <Route path="/admin" element={<AdminPanel />} />
//         <Route path="/follow" element={<FollowPopup />} />
//         <Route path="*" element={<Footer />} />
//       </Routes>
//     </>
//   );
// };

// export default App;
