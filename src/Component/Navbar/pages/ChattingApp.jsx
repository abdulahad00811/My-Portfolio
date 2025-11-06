import React, { useState } from "react";
import "./ChattingApp.css";

function App() {
  const [messages, setMessages] = useState([
    { text: "Hello! 👋", user: "bot" },
    { text: "Ahad this side", user: "bot" },
    { text: "Hi! How are you?", user: "me" },
    { text: "i am fine and you", user: "bot" },
    { text: "i am too fine", user: "me" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, user: "me" }]);
    setInput("");
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        {/* Put Image Here */}
        <img
          src="https://i.pravatar.cc/40?img=3"
          alt="User"
          className="avatar"
        />
        <h2>V-Chat</h2>
      </header>
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <div
            className={msg.user === "me"? "chat-bubble me": "chat-bubble bot"}
            key={idx}
          >
            {/* Put User Image Here if needed */}
            {msg.user === "me"? null: (
              <img
                src="https://i.pravatar.cc/30?img=1"
                alt="Bot"
                className="avatar-small"
              />
            )}
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <footer className="chat-footer">
        <input
          value={input}
          placeholder="Type your message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </footer>
    </div>
  );
}

export default App;
