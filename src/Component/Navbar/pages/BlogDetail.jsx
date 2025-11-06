// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch(`https://dev.to/api/articles/${id}`)
//       .then((res) => res.json())
//       .then((data) => setBlog(data))
//       .catch(() => setBlog(null));
//   }, [id]);

//   if (!blog) return <div>Loading...</div>;

//   return (
//     <section style={{ maxWidth: 720, margin: "auto", padding: 16 }}>
//       <button onClick={() => navigate(-1)} style={{ marginBottom: 15 }}>
//         &lt; Back
//       </button>
//       <h2>{blog.title}</h2>
//       {blog.cover_image ? (
//         <img src={blog.cover_image} alt={blog.title} style={{ maxWidth: 600, width: "100%" }} />
//       ) : (
//         <div style={{ maxWidth: 600, padding: 30, background: "#ececec", color: "#888", borderRadius: 8 }}>
//           NO IMAGE
//         </div>
//       )}
//       <div>
//         <strong>By:</strong> {blog.user?.name || "Unknown"}
//       </div>
//       <div>
//         {blog.published_at ? new Date(blog.published_at).toLocaleDateString() : "--/--/----"}
//       </div>
//       <div
//         style={{ marginTop: 24, background: "#fafafa", padding: 30, borderRadius: 10 }}
//         dangerouslySetInnerHTML={{ __html: blog.body_html }}
//       />
//     </section>
//   );
// };

// export default BlogDetail;




import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dev.to/api/articles/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data))
      .catch(() => setBlog(null));
  }, [id]);

  if (!blog) return <div className="blog-detail-container">Loading...</div>;

  return (
    <section className="blog-detail-container">
      <h2 className="blog-detail-title">{blog.title}</h2>
      {blog.cover_image ? (
        <img className="blog-detail-cover" src={blog.cover_image} alt={blog.title} />
      ) : (
        <div className="blog-detail-no-image">NO IMAGE</div>
      )}
      <div className="blog-detail-meta">
        <strong>By:</strong> {blog.user?.name ?? "Unknown"} &middot;{" "}
        {blog.published_at ? new Date(blog.published_at).toLocaleDateString() : "--/--/----"}
      </div>
      <div
        className="blog-detail-content"
        dangerouslySetInnerHTML={{ __html: blog.body_html }}
      />
      {/* Back to Home Button (Sticky) */}
      <button className="sticky-back-btn" onClick={() => navigate("/")}>
        <span style={{fontSize: "1.3em", marginRight: 4}}>🏠</span>
        Back to Home
      </button>
    </section>
  );
};

export default BlogDetail;
