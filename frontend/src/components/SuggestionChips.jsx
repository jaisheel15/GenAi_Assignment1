export default function SuggestionChips({ persona, onSelect }) {
    const suggestions = {
      anshuman: ["How to learn DSA?", "How to stay consistent?"],
      abhimanyu: ["How to build a startup?", "How to scale a product?"],
      kshitij: ["Explain recursion", "What is dynamic programming?"],
    };

    return (
      <div className="chips">
        {suggestions[persona].map((s, i) => (
          <span key={i} className="chip" onClick={() => onSelect && onSelect(s)}>
            {s}
          </span>
        ))}
      </div>
    );
  }