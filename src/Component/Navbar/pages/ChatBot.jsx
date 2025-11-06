import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./ChatBot.css";

const ChatBot = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  // Scroll to latest message
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // User message add karo (local hi, show immediately)
    const updMessages = [...messages, { sender: "user", text: input }];
    setMessages(updMessages);
    setLoading(true);

    try {
      // Pura messages array backend ko send karo!
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updMessages }),
      });
      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.answer || "No answer found" }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Backend is Not Connected." }
      ]);
    }
    setLoading(false);
    setInput("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <span className="chatbot-title">Q&amp;A Chatbot</span>
        <button className="chatbot-close" onClick={onClose} title="Close">
          ×
        </button>
      </div>
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`chatbot-msg-row ${msg.sender}`}>
            <span className={`chatbot-msg ${msg.sender}`}>{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
        {loading && <p>Typing...</p>}
      </div>
      <form
        className="chatbot-input-row"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        autoComplete="off"
      >
        <input
          ref={inputRef}
          className="chatbot-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here..."
          disabled={loading}
        />
        <button
          className="chatbot-send-icon"
          type="submit"
          disabled={loading || !input.trim()}
          title="Send"
        >
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatBot;
