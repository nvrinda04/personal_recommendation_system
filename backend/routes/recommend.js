// const express = require("express");
// const router = express.Router();
// const recommendController = require("../controllers/recommendController");

// // Category-wise recommendations
// router.get("/movies", recommendController.recommendMovies);
// router.get("/books", recommendController.recommendBooks);
// router.get("/songs", recommendController.recommendSongs);


// module.exports = router;
const express = require("express");
const router = express.Router();
const recommendController = require("../controllers/recommendController");

// Category-wise recommendations (existing)
router.get("/movies", recommendController.recommendMovies);
router.get("/books", recommendController.recommendBooks);
router.get("/songs", recommendController.recommendSongs);

// ✅ New adaptive route
router.get("/adaptive/:userId", recommendController.getAdaptiveRecommendations);

// ✅ Save user action
router.post("/save-choice", recommendController.saveUserChoice);

module.exports = router;

