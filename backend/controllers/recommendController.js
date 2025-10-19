const User = require("../models/User");

// Dummy placeholders (can replace with real model later)
const dummyMovies = ["Inception", "Interstellar", "The Matrix"];
const dummyBooks = ["Harry Potter", "The Hobbit", "1984"];
const dummySongs = ["Shape of You", "Bohemian Rhapsody", "Blinding Lights"];

// Save user action for adaptive learning
exports.saveUserChoice = async (req, res) => {
  try {
    const { userId, choice, category, action, rating, recommendations } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found ❌" });

    // Only save meaningful actions
    if (
      (action === "rating" && rating >= 3) ||
      action === "favorite" ||
      action === "recommend-similar"
    ) {
      user.history.push({
        choice,
        category,
        action,
        rating: rating || null,
        recommendations: recommendations || []
      });
      await user.save();
    }

    res.json({ message: "User action saved ✅" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save user action ❌", details: err.message });
  }
};

// Adaptive recommendations for movies, books, songs separately
exports.getAdaptiveRecommendations = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const moviesSet = new Set();
    const booksSet = new Set();
    const songsSet = new Set();

    user.history.forEach(h => {
      if (h.recommendations && h.recommendations.length > 0) {
        if (h.category === "movie") h.recommendations.forEach(r => moviesSet.add(r));
        else if (h.category === "book") h.recommendations.forEach(r => booksSet.add(r));
        else if (h.category === "song") h.recommendations.forEach(r => songsSet.add(r));
      }
    });

    res.json({
      message: "Based on your previous choices, we recommend:",
      movies: Array.from(moviesSet).length ? Array.from(moviesSet) : dummyMovies,
      books: Array.from(booksSet).length ? Array.from(booksSet) : dummyBooks,
      songs: Array.from(songsSet).length ? Array.from(songsSet) : dummySongs
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch recommendations ❌", details: err.message });
  }
};
