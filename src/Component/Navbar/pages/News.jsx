// import React, { useState, useEffect } from "react";
// import "./News.css";
// import Noimage from "../../../assets/no-image.png";

// const News = () => {
//   const [headlines, setHeadlines] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("http://localhost:5000/news")
//       .then((res) => res.json())
//       .then((data) => {
//         setHeadlines(data.articles || []);
//         setLoading(false);
//         if (!data.articles || data.articles.length === 0) {
//           console.info("No news received from backend!", data);
//         }
//       })
//       .catch((err) => {
//         setError("Failed to load news");
//         setLoading(false);
//         console.error("News fetch error:", err);
//       });
//   }, []);

//   if (loading) return <div className="news-loading">Loading news...</div>;
//   if (error) return <div className="news-error">{error}</div>;
//   if (headlines.length === 0) {
//     return (
//       <section className="news-container">
//         <h1 className="news-header">Top Headlines</h1>
//         <div className="news-error">
//           No news articles found. Try again later or check your API key!
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="news-container">
//       <h1 className="news-header">Top Headlines</h1>
//       <ul className="news-list">
//         {headlines.map((article, index) => (
//           <li
//             key={index}
//             className="news-item"
//             onClick={() => window.open(article.url, "_blank")}
//           >
//             <img
//               className="news-image"
//               src={article.urlToImage || Noimage}
//               alt={article.title}
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = Noimage;
//               }}
//             />
//             <div className="news-content">
//               <h2 className="news-title">{article.title}</h2>
//               <p className="news-description">{article.description || "No description available."}</p>
//               <div className="news-meta">
//                 <span className="news-author">{article.author || "Unknown author"}</span>
//                 <span className="news-date">
//                   {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""}
//                 </span>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default News;



import React, { useState, useEffect } from "react";
import "./News.css";
import Noimage from "../../../assets/no-image.png";

const dummyArticles = [
  {
    title: "AI Breakthrough in 2025: Next Gen Tools Arrive",
    description: "Top tech companies have collaborated to launch the next generation of AI developer tools.",
    url: "https://example.com/ai-2025-news",
    urlToImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    author: "Jane Doe",
    publishedAt: "2025-10-11T10:00:00Z"
  },
  {
    title: "India Wins Cricket World Cup 2025",
    description: "A historic win for the Indian cricket team as they clinch the World Cup after a thrilling finale.",
    url: "https://example.com/india-cricket-win",
    urlToImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    author: "Sports Desk",
    publishedAt: "2025-10-10T20:25:00Z"
  }
  
];

const News = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => {
        if (!data.articles || data.articles.length === 0) {
          setHeadlines(dummyArticles);    // Dummy news if real news not found
        } else {
          setHeadlines(data.articles);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load news, showing demo data.");
        setHeadlines(dummyArticles);      // On error, show dummy
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="news-loading">Loading news...</div>;
  if (error) return <div className="news-error">{error}</div>;

  return (
    <section id="news" className="news-container">
      <h1 className="news-header">Top Headlines</h1>
      <ul className="news-list">
        {headlines.map((article, index) => (
          <li key={index} className="news-item" onClick={() => window.open(article.url, "_blank")}>
            <img
              className="news-image"
              src={article.urlToImage || Noimage}
              alt={article.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = Noimage;
              }}
            />
            <div className="news-content">
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description || "No description available."}</p>
              <div className="news-meta">
                <span className="news-author">{article.author || "Unknown author"}</span>
                <span className="news-date">{article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;
