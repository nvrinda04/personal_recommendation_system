// src/pages/AdminDashboard.js
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

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

      {/* MAIN */}
      <div style={styles.main}>
        <h1 style={styles.heading}> Welcome, Admin</h1>
        <p style={{ marginBottom: "30px", color: "#ccc" }}>
          Manage your users and recommendations below:
        </p>

        <div style={styles.cardContainer}>
          <div
            onClick={() => navigate("/manage-users")}
            style={{ ...styles.card, borderTop: "4px solid #00e0ff" }}
          >
            <h2>👥 Manage Users</h2>
            <p>View, edit, and control user roles.</p>
          </div>
          <div
            onClick={() => navigate("/manage-recommendations")}
            style={{ ...styles.card, borderTop: "4px solid #ffb400" }}
          >
            <h2>⚙️ Manage Content</h2>
            <p>Oversee and fine-tune recommendations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    height: "100vh",
    background: "#121212",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
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
  logo: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
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
  main: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "36px",
    marginBottom: "15px",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "25px",
    flexWrap: "wrap",
    marginTop: "40px",
  },
  card: {
    flex: "1",
    minWidth: "260px",
    maxWidth: "360px",
    padding: "25px",
    borderRadius: "12px",
    background: "rgba(255, 255, 255, 0.05)",
    boxShadow: "0 6px 15px rgba(0,0,0,0.4)",
    cursor: "pointer",
    transition: "transform 0.3s ease, background 0.3s ease",
    textAlign: "center",
  },
};

export default AdminDashboard;
