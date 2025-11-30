import React from "react";
import "./Certificates.css";
import Certificate1 from "../../../assets/certificateimg/Certificate1.jpg";
import Certificate2 from "../../../assets/certificateimg/Certificate2.jpg";
import Certificate3 from "../../../assets/certificateimg/Certificate3.jpg";
// import Certificate4 from "../../../assets/certificateimg/Certificate4.jpg";
// import Certificate5 from "../../../assets/certificateimg/Certificate5.jpg";
import Certificate6 from "../../../assets/certificateimg/Certificate6.jpg";
import Certificate7 from "../../../assets/certificateimg/Certificate7.jpg";
import Certificate9 from "../../../assets/certificateimg/Certificate9.jpg";

const certificateData = [
  {
    id: 1,
    title: "React Developer Certificate",
    img: Certificate1,
    link: "https://your-react-certificate-link.com"
  },
  {
    id: 2,
    title: "JavaScript Mastery Certificate",
    img: Certificate2,
    link: "https://your-js-certificate-link.com"
  },
  {
    id: 3,
    title: "JavaScript Mastery Certificate",
    img: Certificate3,
    link: "https://your-js-certificate-link.com"
  },
//   {
//     id: 4,
//     title: "React Developer Certificate",
//     img: Certificate4,
//     link: "https://your-react-certificate-link.com"
//   },
// {
//     id: 5,
//     title: "React Developer Certificate",
//     img: Certificate5,
//     link: "https://your-react-certificate-link.com"
//   },
  {
    id: 6,
    title: "JavaScript Mastery Certificate",
    img: Certificate6,
    link: "https://your-js-certificate-link.com"
  },
  {
    id: 7,
    title: "Web Development Certificate",
    img: Certificate7,
    link: "https://your-web-certificate-link.com"
  },
  {
    id: 8,
    title: "React Developer Certificate",
    img: Certificate9,
    link: "https://your-react-certificate-link.com"
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="certificate-page">
      <h1 className="certificate-title">My Certificates</h1>

      <div className="certificate-grid">
        {certificateData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img src={cert.img} alt={cert.title} className="certificate-img" />

            <h3 className="certificate-name">{cert.title}</h3>

            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
