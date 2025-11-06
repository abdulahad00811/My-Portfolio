import React, { useState, useEffect } from "react";
import "./BlogPage.css";
import { FaPlus, FaThumbsUp, FaThumbsDown, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Noimage from "../../../assets/no-image.png"; // fallback image

const BlogPage = ({ isLoggedIn, onLoginClick, onAddBlogClick }) => {
  const [blogs, setBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [showNotification, setShowNotification] = useState(true);
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  const navigate = useNavigate();

  // Fetch blogs
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowNotification(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddClick = () => {
    if (isLoggedIn) onAddBlogClick();
    else setShowLoginAlert(true);
  };

  const handleLogin = () => {
    setShowLoginAlert(false);
    onLoginClick();
  };

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 10, blogs.length));
  };

  return (
    <section id="blog" className="blog-page">
      <h2 className="blog-title">Latest Blogs</h2>

      <div className="blog-cards">
        {blogs.slice(0, visibleCount).map((blog) => (
          <div
            className="blog-card"
            key={blog.id}
            onClick={() => navigate(`/blog/${blog.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="blog-img-wrapper">
              <img
                src={blog.cover_image } //|| Noimage}
                alt={blog.title}
                className="blog-img"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = Noimage;
                }}
              />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title || "Untitled"}</h3>
              <div className="blog-meta-row">
                <span className="author">
                  <strong>By:</strong> {blog.user ? blog.user.name : "Unknown"}
                </span>
                <span className="timestamp">
                  {blog.published_at
                    ? new Date(blog.published_at).toLocaleDateString()
                    : "--/--/----"}
                </span>
              </div>
              <div className="blog-actions">
                <span>
                  <FaEye /> {blog.page_views_count || 89}
                </span>
                <span className="like-btn">
                  <FaThumbsUp /> {blog.public_reactions_count || 0}
                </span>
                <span className="dislike-btn">
                  <FaThumbsDown /> 0
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < blogs.length && (
        <div className="view-more-wrapper">
          <button className="view-more-btn" onClick={handleViewMore}>
            View More
          </button>
        </div>
      )}

      <div className="add-blog-wrapper">
        {showNotification && (
          <div className="add-notification">Add your Blog Here →</div>
        )}
        <button className="add-blog-btn" onClick={handleAddClick}>
          <FaPlus />
        </button>
      </div>

      {showLoginAlert && (
        <div className="login-popup-overlay">
          <div className="login-popup">
            <h2>Please Login First</h2>
            <p>To add your blog, you need to login first.</p>
            <div className="popup-buttons">
              <button onClick={handleLogin} className="popup-login-btn">
                Login
              </button>
              <button
                onClick={() => setShowLoginAlert(false)}
                className="popup-later-btn"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogPage;
