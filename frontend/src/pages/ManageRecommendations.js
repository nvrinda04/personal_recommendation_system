import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ManageRecommendations() {
  const navigate = useNavigate();

  const [type, setType] = useState(null); // "movies", "books", "songs"
  const [movies, setMovies] = useState([]);
  const [books, setBooks] = useState([]);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch movies
  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/movies");
      const data = await res.json();
      setMovies(data);
    } catch (err) {
      console.error(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch books
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/books");
      const data = await res.json();
      setBooks(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch songs
  const fetchSongs = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5001/api/songs");
      const data = await res.json();
      setSongs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setSongs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (type === "movies") fetchMovies();
    else if (type === "books") fetchBooks();
    else if (type === "songs") fetchSongs();
  }, [type]);

  // Movie actions
  const updateMovie = async (id, updatedMovie) => {
    try {
      await fetch(`http://localhost:5001/api/movies/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedMovie),
      });
      fetchMovies();
    } catch (err) {
      console.error(err);
    }
  };

  // Delete movie with alert and instant remove
  const deleteMovie = async (id) => {
  try {
    const res = await fetch(`http://localhost:5001/api/movies/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (res.ok) {
      alert(data.message); // simple alert
      setMovies((prev) => prev.filter((m) => m.id !== id)); // remove from state without refetch
    } else {
      alert("Error: " + data.error);
    }
  } catch (err) {
    console.error(err);
    alert("Failed to delete movie.");
  }
};


  const handleEdit = (movie) => {
    const newTitle = prompt("Enter new title:", movie.title);
    const newGenres = prompt("Enter new genres:", movie.genres);
    if (newTitle && newGenres) {
      updateMovie(movie.id ?? movie.index ?? 0, { title: newTitle, genres: newGenres });
    }
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>
          Cineverse<span style={{ color: "#00e0ff" }}> Admin</span>
        </h2>
        <div style={styles.navLinks}>
          <button
            style={styles.navButton}
            onClick={() => navigate("/admin-dashboard")}
          >
            Dashboard
          </button>
          <button
            style={{ ...styles.navButton, background: "#ff4c4c" }}
            onClick={() => {
              localStorage.clear();
              navigate("/"); // redirect to landing page
            }}
          >
            Logout
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div style={styles.container}>
        <h1 style={styles.header}>⚙ Manage Content</h1>

        {/* Toggle Buttons */}
        <div style={styles.toggleContainer}>
          {["movies", "books", "songs"].map((t) => (
            <button
              key={t}
              style={{
                ...styles.toggleBtn,
                background: type === t ? "#1abc9c" : "#555",
              }}
              onClick={() => setType(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Loading */}
        {loading && <p style={styles.loading}>Loading {type}...</p>}

        {/* Movies Table */}
        {!loading && type === "movies" && movies.length > 0 && (
          <table style={styles.table}>
            <thead>
              <tr style={styles.thead}>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Genres</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={movie.id} style={styles.tr}>
                  <td style={styles.td}>{movie.title}</td>
                  <td style={styles.td}>{movie.genres}</td>
                  <td style={styles.td}>
                    <div style={styles.actionContainer}>
                      <button style={styles.editBtn} onClick={() => handleEdit(movie)}>Edit</button>
                      <button style={styles.deleteBtn} onClick={() => deleteMovie(movie.id, index)}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Books Table */}
        {!loading && type === "books" && books.length > 0 && (
          <table style={styles.table}>
            <thead>
              <tr style={styles.thead}>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Original Title</th>
                <th style={styles.th}>Authors</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book.book_id} style={styles.tr}>
                  <td style={styles.td}>{book.title}</td>
                  <td style={styles.td}>{book.original_title}</td>
                  <td style={styles.td}>{book.authors}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.deleteBtn}
                      onClick={async () => {
                        if (!window.confirm("Are you sure you want to delete this book?")) return;
                        await fetch(`http://localhost:5001/api/books/${book.index}`, { method: "DELETE" });
                        setBooks((prev) => prev.filter((_, i) => i !== index));
                        alert("Book deleted!");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* Songs Table */}
        {!loading && type === "songs" && songs.length > 0 && (
          <table style={styles.table}>
            <thead>
              <tr style={styles.thead}>
                <th style={styles.th}>Title</th>
                <th style={styles.th}>Artist</th>
                <th style={styles.th}>Album</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song, index) => (
                <tr key={song.index} style={styles.tr}>
                  <td style={styles.td}>{song.title}</td>
                  <td style={styles.td}>{song.artist}</td>
                  <td style={styles.td}>{song.album}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.deleteBtn}
                      onClick={async () => {
                        if (!window.confirm("Are you sure you want to delete this song?")) return;
                        await fetch(`http://localhost:5001/api/songs/${song.index}`, { method: "DELETE" });
                        setSongs((prev) => prev.filter((_, i) => i !== index));
                        alert("Song deleted!");
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {!loading && type && ((type === "movies" && movies.length === 0) || (type === "books" && books.length === 0) || (type === "songs" && songs.length === 0)) && (
          <p style={styles.loading}>No {type} found.</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: { minHeight: "100vh", background: "#121212", color: "#fff", fontFamily: "'Roboto', sans-serif" },
  navbar: {
    position: "sticky",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#1f1f1f",
    zIndex: 2,
    flexWrap: "wrap",
    gap: "10px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
  },
  logo: { margin: 0, fontSize: "24px", fontWeight: "bold", color: "#fff" },
  navLinks: { display: "flex", gap: "12px", flexWrap: "wrap" },
  navButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #00e0ff, #00bcd4)",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  container: { padding: "40px", minHeight: "100vh" },
  header: { textAlign: "center", marginBottom: "30px", fontSize: "2rem", fontWeight: "700", color: "#1abc9c" },
  toggleContainer: { textAlign: "center", marginBottom: "25px" },
  toggleBtn: { padding: "10px 25px", margin: "0 10px", border: "none", borderRadius: "25px", color: "#fff", fontWeight: "bold", cursor: "pointer", transition: "0.3s" },
  table: { width: "100%", borderCollapse: "collapse", background: "#1e1e1e", borderRadius: "10px", overflow: "hidden" },
  thead: { background: "#1abc9c" },
  th: { padding: "12px", color: "#fff", textAlign: "center" },
  tr: { borderBottom: "1px solid #333", transition: "0.3s" },
  td: { padding: "12px", textAlign: "center" },
  actionContainer: { display: "flex", justifyContent: "center", gap: "10px" },
  editBtn: { padding: "6px 15px", border: "none", borderRadius: "5px", background: "#3498db", color: "#fff", fontWeight: "bold", cursor: "pointer" },
  deleteBtn: { padding: "6px 15px", border: "none", borderRadius: "5px", background: "#e74c3c", color: "#fff", fontWeight: "bold", cursor: "pointer" },
  loading: { textAlign: "center", marginTop: "20px", color: "#aaa", fontStyle: "italic" },
};

export default ManageRecommendations;
