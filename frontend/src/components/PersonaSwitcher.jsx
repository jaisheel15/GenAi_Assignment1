export default function PersonaSwitcher({ current, onChange }) {
    const personas = ["anshuman", "abhimanyu", "kshitij"];

    const label = (p) => p.charAt(0).toUpperCase() + p.slice(1);

    return (
      <div className="persona-switcher">
        {personas.map((p) => (
          <button
            key={p}
            className={current === p ? "active" : ""}
            onClick={() => onChange(p)}
            aria-pressed={current === p}
          >
            {label(p)}
          </button>
        ))}
      </div>
    );
  }