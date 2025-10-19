import React, { useState } from "react";
import axios from "axios";

export default function CrossRecommendation() {
  const [movie, setMovie] = useState("");
  const [target, setTarget] = useState("songs");
  const [recs, setRecs] = useState([]);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!movie.trim()) return alert("Enter a movie title!");
    setLoading(true);

    try {
      const res = await axios.post(
        `http://127.0.0.1:5001/crossrecommend/${target}`,
        { movie }
      );

      const data = res.data;
      console.log("Backend data:", data);

      // Safely parse recommendations (array or object)
      let recommendations = [];
      if (Array.isArray(data.recommendations)) {
        recommendations = data.recommendations.slice(0, 5);
      } else if (data.recommendations && typeof data.recommendations === "object") {
        recommendations = Object.values(data.recommendations).slice(0, 5);
      }

      setRecs(recommendations);
      setExplanation(data.explanation || "");
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      setRecs([]);
      setExplanation("Error fetching recommendations");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", color: "white", background: "#222", minHeight: "100vh" }}>
      <h1>Movie → {target === "songs" ? "Songs" : "Books"}</h1>

      <input
        type="text"
        value={movie}
        placeholder="Enter movie title"
        onChange={(e) => setMovie(e.target.value)}
        style={{ padding: "0.5rem", width: "300px", marginRight: "1rem" }}
      />

      <div style={{ margin: "1rem 0" }}>
        <button
          onClick={() => setTarget("songs")}
          style={{
            marginRight: "1rem",
            background: target === "songs" ? "#28a745" : "#555",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
          }}
        >
          Songs
        </button>
        <button
          onClick={() => setTarget("books")}
          style={{
            background: target === "books" ? "#007bff" : "#555",
            color: "white",
            border: "none",
            padding: "0.5rem 1rem",
          }}
        >
          Books
        </button>
      </div>

      <button
        onClick={handleClick}
        style={{
          padding: "0.5rem 1rem",
          background: "#f39c12",
          color: "#000",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {loading ? "Loading..." : "Get Recommendations"}
      </button>

      <div style={{ marginTop: "2rem" }}>
        <h2>Recommendations:</h2>

        {recs.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {recs.map((item, i) => {
              if (target === "songs") {
                // Songs rendering
                return (
                  <li
                    key={i}
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #555",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong>{item.track_name || item.title || "Untitled"}</strong>
                    <br />
                    {item.artist_name && <span>Artist: {item.artist_name}</span>}
                    <br />
                    {item.album_name && <span>Album: {item.album_name}</span>}
                    <br />
                    {item.genre && <span>Genre: {item.genre}</span>}
                    <br />
                    {item.mood && <span>Mood: {item.mood}</span>}
                  </li>
                );
              } else {
                // Books rendering
                return (
                  <li
                    key={i}
                    style={{
                      padding: "0.5rem",
                      borderBottom: "1px solid #555",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <strong>{typeof item === "string" ? item : item.title || "Untitled"}</strong>
                    <br />
                    {item.authors && <span>Author: {item.authors}</span>}
                    <br />
                    {item.average_rating && <span>Rating: {item.average_rating}</span>}
                  </li>
                );
              }
            })}
          </ul>
        ) : (
          <p>No recommendations yet.</p>
        )}

        {explanation && (
          <p style={{ marginTop: "1rem", fontStyle: "italic", lineHeight: "1.6" }}>
            {explanation}
          </p>
        )}
      </div>
    </div>
  );
}
