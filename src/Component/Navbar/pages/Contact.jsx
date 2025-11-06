import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className="contact-container">
      <h2>Contact Me</h2>
      <p>Have a question, project idea, or just want to say hello? I’d love to hear from you.</p>

      <div className="contact-info">
        <p><strong>Email:</strong> ahadabdul12581@gmail.com</p>
        <p><strong>Location:</strong> Uttar Pradesh, India</p>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      {/* <div className="social-links">
        <a href="https://github.com/yourusername" className='github' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" className='linkedin' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      </div> */}
    </section>
  );
};

export default Contact;