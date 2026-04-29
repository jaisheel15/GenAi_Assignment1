export default function Message({ msg }) {
  const persona = msg.persona;
  const isUser = msg.role === "user";

  const initial = isUser ? "U" : (persona ? persona.charAt(0).toUpperCase() : "A");

  const colorMap = {
    anshuman: "linear-gradient(180deg,#2563eb,#60a5fa)",
    abhimanyu: "linear-gradient(180deg,#06b6d4,#5eead4)",
    kshitij: "linear-gradient(180deg,#7c3aed,#a78bfa)",
  };

  const bg = isUser ? "linear-gradient(180deg,#111827,#0b1220)" : (persona ? colorMap[persona] || "linear-gradient(180deg,#374151,#4b5563)" : "linear-gradient(180deg,#374151,#4b5563)");

  return (
    <div className={`message ${msg.role}`}>
      <div className="avatar" style={{ background: bg, color: "white" }}>{initial}</div>
      <div className="bubble">
        {msg.text}
      </div>
    </div>
  );
}