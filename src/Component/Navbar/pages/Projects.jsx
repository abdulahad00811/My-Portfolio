import React from 'react';
import './Project.css';

// import project1 from '../../../assets/project1.jpeg'; // Example image, replace with actual path


import myProjectImg from '../../../assets/TicTacToe.png';
import ECommerceImg from '../../../assets/Ecommerce.jpg';
import WeatherImg from '../../../assets/WeatherApp.jpg'; 
import BlogAppImg from '../../../assets/BlogApp.jpg';
import VChatImg from '../../../assets/V-Chat.jpeg';
import LudoImg from '../../../assets/Ludo.jpg';
import ChatBot from '../../../assets/ChatBot-img.jpg'; 

const projectData = [
  {
    title: "Tic Tac Toe Game ",
    image: myProjectImg,
    description: "Tic Tac Toe, also known as Noughts and Crosses, is a classic two-player game played on a 3x3 grid. It is a simple yet strategic game that tests quick thinking and planning.",
    link: "https://tictactoe-game-dusky.vercel.app/"
  },
  {
    title: "E-commerce Store",
    image: ECommerceImg,
    description: "A fully functional e-commerce website with cart and payment integration.",
    link: "https://ecommerce-website-demo-livid.vercel.app/en/home"
  },
  {
    title: "Blog App",
    image: BlogAppImg,
    description: "A modern blog platform using MERN stack with CRUD features.",
    // link: "https://vercel.com/templates/next.js/blog"
    link: "http://localhost:5173/blog"
  },
  {
    title: "Weather App",
    image: WeatherImg,
    description: "Real-time weather updates using OpenWeatherMap API and React.",
    link: "https://weatheryesterday.vercel.app/today"
  },
  {
    title: "Chat Application",
    image: VChatImg,
    description: "Realtime chat app with socket.io and Node.js.",
    link: "https://vg-chat-app-react.vercel.app/"
  },
   {
    title: "AI Chat Bot",
    image: ChatBot,
    description: "Real AI chat With like perplexity, ChatGpt, Gemini",
    link: "./ChatBot"
  },
  {
    title: "Ludo Game App",
    image: LudoImg,
    description: "Multiplayer Ludo game with ads and in-app purchases.",
    link: "https://mukulshakya.github.io/Ludo-React/"
  }
];

export default function Projects() {
  return (
    <section id='projects' className="projects-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}