const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config();

const app = express();
// const adaptiveRoutes = require("/routes/adaptiveRoutes");
// app.use("/api/adaptive", adaptiveRoutes);

app.use(cors());
app.use(express.json());
connectDB();
app.use(
  "/api/recommend", // When frontend sends to /api/recommend...
  createProxyMiddleware({
    target: "http://localhost:5001", // ...forward to Flask
    changeOrigin: true,
  })
);
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => res.send("Backend working ✅"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
