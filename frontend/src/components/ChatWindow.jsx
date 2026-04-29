import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Message from "./Message";

export default function ChatWindow({ persona, messages, setMessages, input, setInput }) {
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input?.trim() || loading) return;

    const userMessage = {
      role: "user",
      text: input.trim(),
    };

    // Add user message
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/chat", {
        message: userMessage.text,
        persona,
        history: [...messages, userMessage],
      });

      const botMessage = {
        role: "bot",
        text: res.data.reply || "No response",
        persona,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Something went wrong. Try again.", persona },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="chat-window">
      {/* Messages */}
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} />
        ))}

        {/* Typing indicator */}
        {loading && (
          <div className="message bot">
            <div className="bubble typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder={`Ask ${persona} something...`}
        />

        <button onClick={sendMessage} disabled={loading || !input.trim()}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}