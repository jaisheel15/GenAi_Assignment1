import { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import PersonaSwitcher from "./components/PersonaSwitcher";
import SuggestionChips from "./components/SuggestionChips";
import "./styles.css";

function App() {
  const [persona, setPersona] = useState("anshuman");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handlePersonaChange = (p) => {
    setPersona(p);
    setMessages([]); // reset conversation
    setInput("");
  };

  // Prefill input when a suggestion chip is selected
  const handleSuggestion = (text) => {
    setInput(text);
  };

  return (
    <div className="app">
      <h1>Persona Chatbot</h1>

      <PersonaSwitcher
        current={persona}
        onChange={handlePersonaChange}
      />

      <SuggestionChips persona={persona} onSelect={handleSuggestion} />

      <ChatWindow
        persona={persona}
        messages={messages}
        setMessages={setMessages}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default App;