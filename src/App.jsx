import { useState } from "react";

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    const trimmedItem = item.trim();

    if (!trimmedItem) return;

    setItems((prev) => [...prev, trimmedItem]);
    setItem("");
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
      }}
    >
      <div
        style={{
          width: "500px",
          background: "#fff",
          padding: "24px",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1>Add Items to List</h1>

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              padding: "10px",
            }}
          />

          <button onClick={addItem}>Add</button>
        </div>

        {items.length === 0 ? (
          <p>No items yet. Add your first one!</p>
        ) : (
          <ul>
            {items.map((listItem, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                }}
              >
                {listItem}{" "}
                <button onClick={() => removeItem(index)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}