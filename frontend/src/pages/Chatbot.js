import React, { useState } from "react";
import axios from "axios";

function Chatbot({ isInline }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message
    const userMsg = { text: input, type: "user" };
    setMessages([...messages, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // Call backend API for bot response
      const res = await axios.post("http://127.0.0.1:5001/chat", { message: input });
      const botMsg = { text: res.data.reply, type: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [...prev, { text: "⚠ Unable to connect to chatbot.", type: "bot" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => { if (e.key === "Enter") handleSend(); };

  return (
    <div style={{ width: "100%", height: "100%", padding: "10px", boxSizing: "border-box" }}>
      {isInline && (
        <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
          {/* Chat Area */}
          <div style={{ flex: 1, overflowY: "auto", paddingBottom: "10px" }}>
            {messages.length === 0 && (
              <p style={{ textAlign: "center", color: "#888" }}>
                Ask me about movies, books, or music!
              </p>
            )}
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  textAlign: msg.type === "user" ? "right" : "left",
                  margin: "5px 0",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "6px 12px",
                    borderRadius: "12px",
                    backgroundColor: msg.type === "user" ? "#1abc9c" : "#eee",
                    color: msg.type === "user" ? "#fff" : "#000",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}
            {loading && (
              <p style={{ textAlign: "left", color: "#888", fontStyle: "italic" }}>Typing…</p>
            )}
          </div>

          {/* Input Area */}
          <div style={{ display: "flex", marginTop: "auto" }}>
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{ flex: 1, padding: "6px 12px", borderRadius: "8px", border: "1px solid #ccc" }}
            />
            <button
              onClick={handleSend}
              style={{
                marginLeft: "8px",
                padding: "6px 16px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: "#1abc9c",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
