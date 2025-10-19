// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   password: String,
//   role: { type: String, enum: ["User", "Admin"], default: "User" },
//   createdAt: { type: Date, default: Date.now },

//   // For adaptive learning
//   history: [
//     {
//       choice: String,          // Movie/Book/Song
//       category: String,        // movies/books/songs
//       action: String,          // "favorite" | "rating" | "recommend-similar"
//       rating: Number,          // if action is rating
//       recommendations: [String],
//       date: { type: Date, default: Date.now }
//     }
//   ]
// });

// module.exports = mongoose.model("User", userSchema);
const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  choice: String, // title
  category: String, // movie/book/song
  action: String, // favorite / rating / recommend-similar
  rating: Number,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["User", "Admin"], default: "User" },
  history: [historySchema],
});

module.exports = mongoose.model("User", userSchema);
