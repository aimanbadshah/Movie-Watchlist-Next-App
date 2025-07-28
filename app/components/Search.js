"use client";

import { useState } from "react";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    setResults(data);
  };

  return (
    <div style={{ padding: "2rem", background: "#111", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", textAlign: "center" }}>Search TV Shows</h1>

      <form onSubmit={handleSearch} style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g. Batman"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px 0 0 4px",
            border: "none",
            outline: "none",
            width: "300px",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            background: "crimson",
            color: "#fff",
            border: "none",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1.5rem" }}>
        {results.map(({ show }) => (
          <div key={show.id} style={{ background: "#222", padding: "1rem", borderRadius: "8px" }}>
            <img
              src={show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image"}
              alt={show.name}
              style={{ width: "100%", borderRadius: "4px", marginBottom: "0.5rem" }}
            />
            <h3 style={{ fontSize: "1rem", marginBottom: "0.3rem" }}>{show.name}</h3>
            <p style={{ color: "#aaa", fontSize: "0.9rem" }}>
              {show.premiered ? show.premiered.split("-")[0] : "Unknown Year"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
