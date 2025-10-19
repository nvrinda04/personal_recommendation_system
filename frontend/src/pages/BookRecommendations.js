// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Example dataset
// const booksDataset = [
//   // --- Original English Books ---
//   { title: "Harry Potter and the Sorcerer's Stone", genres: ["Fantasy", "Adventure"], age_group: "Kids", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", author: "J.K. Rowling", releaseYear: 1997 },
//   { title: "The Hobbit", genres: ["Fantasy", "Adventure"], age_group: "Kids", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg", description: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and a dragon's treasure.", author: "J.R.R. Tolkien", releaseYear: 1937 },
//   { title: "1984", genres: ["Dystopian", "Political Fiction"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg", description: "In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love.", author: "George Orwell", releaseYear: 1949 },
//   { title: "To Kill a Mockingbird", genres: ["Classic", "Drama"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg", description: "A lawyer in the Depression-era South defends a black man against an undeserved rape charge, and his children against prejudice.", author: "Harper Lee", releaseYear: 1960 },
//   { title: "Pride and Prejudice", genres: ["Romance", "Classic"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg", description: "Five sisters from an English family of landed gentry must deal with issues of marriage, morality and misconceptions.", author: "Jane Austen", releaseYear: 1813 },
//   { title: "The Great Gatsby", genres: ["Classic", "Drama"], age_group: "Adults", language: "English", imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg", description: "A Midwestern war veteran finds himself drawn to the past and lifestyle of his wealthy neighbor.", author: "F. Scott Fitzgerald", releaseYear: 1925 },
//   { title: "The Hunger Games", genres: ["Dystopian", "Action"], age_group: "Teens", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg", description: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition where teenagers fight to the death.", author: "Suzanne Collins", releaseYear: 2008 },
//   { title: "The Da Vinci Code", genres: ["Thriller", "Mystery"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg", description: "A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society.", author: "Dan Brown", releaseYear: 2003 },
//   { title: "The Alchemist", genres: ["Philosophy", "Adventure"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg", description: "A shepherd boy's journey to the pyramids of Egypt, after having a recurring dream of finding treasure there.", author: "Paulo Coelho", releaseYear: 1988 },
//   { title: "Malgudi Days", genres: ["Fiction"], age_group: "Teens", language: "Hindi", imageUrl: "https://rukminim1.flixcart.com/image/832/832/book/1/7/3/malgudi-days-pb-original-imaeh2hbhgngt75g.jpeg?q=70", description: "A collection of short stories by R. K. Narayan set in the fictional South Indian town of Malgudi.", author: "R. K. Narayan", releaseYear: 1943 },
//   { title: "Godan", genres: ["Classic"], age_group: "Adults", language: "Hindi", imageUrl: "https://m.media-amazon.com/images/I/61SqBrWGb2L._UF1000,1000_QL80_.jpg", description: "The story of Hori, a poor peasant, and his desperate desire to own a cow, which is a symbol of wealth and prestige in his village.", author: "Munshi Premchand", releaseYear: 1936 },
//   { title: "Gunahon Ka Devta", genres: ["Romance"], age_group: "Teens", language: "Hindi", imageUrl: "https://m.media-amazon.com/images/I/813GkVYIXcL.jpg", description: "A tragic love story set in Allahabad, exploring the complexities of love, society, and sacrifice.", author: "Dharamvir Bharati", releaseYear: 1949 },
//   { title: "Nirmala", genres: ["Drama"], age_group: "Adults", language: "Hindi", imageUrl: "https://www.maplepress.co.in/cdn/shop/products/nirmalahindi_700x700.jpg?v=1678772714", description: "A poignant story about a young girl married to a much older man, highlighting the issues of dowry and incompatible marriages.", author: "Munshi Premchand", releaseYear: 1928 },
//   { title: "Raag Darbari", genres: ["Satire", "Fiction"], age_group: "Adults", language: "Hindi", imageUrl: "https://vasundharabooks.com/wp-content/uploads/2018/04/Raag-Darbari-Front-Cover.jpg", description: "A satirical novel that exposes the deep-rooted corruption and moral decay in post-independence rural India.", author: "Shrilal Shukla", releaseYear: 1968 },
//   { title: "The Silent Patient", genres: ["Thriller", "Mystery", "Psychological"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/81JJPDNlxSL._UF1000,1000_QL80_.jpg", description: "A psychotherapist's determination to unravel a famous painter's motive for murdering her husband after she falls silent.", author: "Alex Michaelides", releaseYear: 2019 },
//   { title: "Project Hail Mary", genres: ["Science Fiction", "Thriller"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/71S+zKJpVvS._UF1000,1000_QL80_.jpg", description: "An amnesiac astronaut awakens on a lone mission in deep space, tasked with saving humanity from extinction with the help of an unlikely ally.", author: "Andy Weir", releaseYear: 2021 },
//   { title: "The Seven Husbands of Evelyn Hugo", genres: ["Historical Fiction", "Romance"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/81PkmvwdbhL._UF1000,1000_QL80_.jpg", description: "A reclusive Old Hollywood movie icon decides to give a final interview to an unknown magazine reporter, revealing shocking truths about her life.", author: "Taylor Jenkins Reid", releaseYear: 2017 },
//   { title: "Dune", genres: ["Science Fiction", "Adventure"], age_group: "Adults", language: "English", imageUrl: "https://padhegaindia.in/wp-content/uploads/2023/07/9780593099322_1.webp", description: "The son of a noble family is entrusted with the protection of the most valuable asset and most vital element in the galaxy.", author: "Frank Herbert", releaseYear: 1965 },
//   { title: "Mistborn: The Final Empire", genres: ["Fantasy", "Action", "Adventure"], age_group: "Teens", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1672015690l/60784489.jpg", description: "In a world where ash falls from the sky, a thieving orphan discovers she has latent powers and joins a group of rebels to overthrow a dark lord.", author: "Brandon Sanderson", releaseYear: 2006 },
//   { title: "The White Tiger", genres: ["Fiction", "Contemporary"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/71Nes-1tfPL._UF1000,1000_QL80_.jpg", description: "An ambitious driver for a rich Indian family uses his wit and cunning to escape from poverty and become an entrepreneur.", author: "Aravind Adiga", releaseYear: 2008 },
//   { title: "Thulasi Dalam", genres: ["Thriller", "Horror", "Supernatural"], age_group: "Adults", language: "Telugu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2gzf-XF5I1SwIptWYrMklDQfqbJzt6BIhg&s", description: "A spine-chilling story about a young girl who becomes the target of black magic, and her family's desperate attempts to save her.", author: "Yandamuri Veerendranath", releaseYear: 1980 },
//   { title: "Veyipadagalu", genres: ["Classic", "Philosophy", "Fiction"], age_group: "Adults", language: "Telugu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-J5qmhmIpfw6CR0LvA3CSpWokcp1Jwjorw&s", description: "A magnum opus that critiques the blind adoption of Western culture and champions traditional Indian values through the story of a village.", author: "Viswanatha Satyanarayana", releaseYear: 1934 },
//   { title: "Maidanam", genres: ["Romance", "Philosophy", "Classic"], age_group: "Adults", language: "Telugu", imageUrl: "https://rukminim2.flixcart.com/image/480/640/xif0q/regionalbooks/m/9/4/maidaanam-by-chalam-original-imagmt86tv3zfvjz.jpeg?q=90", description: "A revolutionary and controversial novel for its time, exploring a woman's quest for sexual and personal freedom outside the confines of marriage.", author: "Gudipati Venkatachalam (Chalam)", releaseYear: 1927 },
//   { title: "Bahubali: The Rise of Sivagami", genres: ["Fantasy", "Action", "Adventure"], age_group: "Teens", language: "English", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/The_Rise_of_Sivagami_cover.jpg/250px-The_Rise_of_Sivagami_cover.jpg", description: "A prequel to the blockbuster films, this book dives into the origins of Sivagami and the political intrigue of the Mahishmati kingdom.", author: "Anand Neelakantan", releaseYear: 2017 },
//   { title: "Maa Voori Katha", genres: ["Drama", "Fiction"], age_group: "Teens", language: "Telugu", imageUrl: "https://www.telugubooks.in/cdn/shop/products/ma_oori_kathalu_godarolla_kathalu0001_large.jpg?v=1699085962", description: "A collection of stories that capture the essence, dialect, and lifestyle of rural life in the Godavari districts of Andhra Pradesh.", author: "Various", releaseYear: 2022 }
// ];
// const uniqueGenres = Array.from(new Set(booksDataset.flatMap(b => b.genres)));
// const normalizeKey = (str) => str.replace(/\s+/g, "_").toLowerCase();

// function BookRecommendations() {
//   const navigate = useNavigate();
//   const [favorites, setFavorites] = useState([]);
//   const [ratings, setRatings] = useState({});
//   const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "", baseTitle: "" });
//   const [showPopup, setShowPopup] = useState(false);
//   const [loadingBooks, setLoadingBooks] = useState({});
//   const [showFavorites, setShowFavorites] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [customBook, setCustomBook] = useState("");
//   const [ageFilter, setAgeFilter] = useState("");
//   const [genreFilter, setGenreFilter] = useState("");

//   // Fetch favorites from backend
//   useEffect(() => {
//     axios.get("http://localhost:5001/favorites")
//       .then(res => setFavorites(res.data.favorites || []))
//       .catch(err => console.error("Failed to fetch favorites:", err));
//   }, []);

//   // Toggle favorite
// const toggleFavorite = async (bookTitle) => {
//   try {
//     if (favorites.includes(bookTitle)) {
//       const res = await axios.delete("http://localhost:5001/favorites/remove", { data: { book: bookTitle } });
//       setFavorites([...new Set(res.data.favorites || [])]);
//     } else {
//       const res = await axios.post("http://localhost:5001/favorites/add", { book: bookTitle });
//       setFavorites([...new Set(res.data.favorites || [])]);
//     }
//   } catch (err) {
//     console.error("Failed to update favorites:", err);
//   }
// };


//   // Handle rating
//   const handleRating = async (bookTitle, rating) => {
//     setRatings(prev => ({ ...prev, [bookTitle]: rating }));
//     try {
//       await axios.post("http://localhost:5001/rate", { book: bookTitle, rating });
//     } catch (err) {
//       console.error("Failed to rate:", err);
//     }
//   };

// // Handle recommendations
// const handleRecommend = async (bookTitle, type = "similar") => {
//   if (!bookTitle) return;

//   // Determine backend endpoint and payload key
//   let endpoint = "";
//   let payload = {};

//   switch (type) {
//     case "similar":
//       endpoint = "http://localhost:5001/recommend";
//       payload = { movie: bookTitle }; // backend expects 'movie' even for similar books
//       break;
//     case "movies":
//       endpoint = "http://localhost:5001/crossrecommend/books";
//       payload = { movie: bookTitle };
//       break;
//     case "songs":
//       endpoint = "http://localhost:5001/crossrecommend/songs";
//       payload = { movie: bookTitle };
//       break;
//     default:
//       console.error("Unknown recommendation type:", type);
//       return;
//   }

//   const key = normalizeKey(bookTitle);
//   setLoadingBooks(prev => ({ ...prev, [key]: true }));

//   try {
//     const res = await axios.post(endpoint, payload);
//     const data = res.data;

//     // Safely extract recommendations
//     const items = Array.isArray(data.recommendations) ? data.recommendations : [];
//     const explanation = data.explanation || `Recommendations for ${type} based on "${bookTitle}".`;

//     setRecommendations({
//       type,
//       baseTitle: bookTitle,
//       items,
//       explanation
//     });
//     setShowPopup(true);
//   } catch (err) {
//     console.error("Recommendation error:", err);
//     setRecommendations({
//       type,
//       baseTitle: bookTitle,
//       items: [],
//       explanation: `Failed to fetch ${type} recommendations.`
//     });
//     setShowPopup(true);
//   } finally {
//     setLoadingBooks(prev => ({ ...prev, [key]: false }));
//   }
// };

//   const filteredBooks = booksDataset.filter(b =>
//     (!ageFilter || b.age_group === ageFilter) &&
//     (!genreFilter || b.genres.includes(genreFilter)) &&
//     (b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       b.genres.some(g => g.toLowerCase().includes(searchQuery.toLowerCase())))
//   );

//   const renderRecommendationItem = (item, type, i) => {
//     if (type === "similar" || type === "movies") return <li key={i}>{typeof item === "string" ? item : item.title}</li>;
//     if (type === "songs") return <li key={i}>{item.track_name} by {item.artist_name} [{item.genre}]</li>;
//     return <li key={i}>{JSON.stringify(item)}</li>;
//   };

//   const getRecommendationHeading = () => {
//     if (!recommendations.baseTitle) return "Recommendations";
//     if (recommendations.type === "similar") return `📚 Similar Books for "${recommendations.baseTitle}"`;
//     if (recommendations.type === "movies") return `🎬 Movies Based on "${recommendations.baseTitle}"`;
//     if (recommendations.type === "songs") return `🎵 Songs Inspired by "${recommendations.baseTitle}"`;
//     return "Recommendations";
//   };

//   const handleLogout = () => {
//     localStorage.clear();
//     navigate("/login");
//   };

//   return (
//     <div style={styles.container}>
//       {/* Top Navigation */}
//       <div style={styles.topNav}>
//         <button style={{ ...styles.navBtn, backgroundColor: "#1abc9c" }} onClick={() => navigate("/dashboard")}> Dashboard</button>
//         <button style={{ ...styles.navBtn, backgroundColor: "#e74c3c" }} onClick={handleLogout}> Logout</button>
//       </div>

//       <h2 style={styles.title}>📚 Book Recommendation System</h2>

//       {/* Filters */}
//       <div style={{ textAlign: "center", marginBottom: "15px" }}>
//         <button onClick={() => setAgeFilter("Kids")} style={{ ...styles.navBtn, backgroundColor: ageFilter === "Kids" ? "#1abc9c" : "#007bff" }}>Kids</button>
//         <button onClick={() => setAgeFilter("Adults")} style={{ ...styles.navBtn, backgroundColor: ageFilter === "Adults" ? "#1abc9c" : "#007bff" }}>Adults</button>
//         <button onClick={() => setAgeFilter("")} style={{ ...styles.navBtn, backgroundColor: ageFilter === "" ? "#1abc9c" : "#007bff" }}>All</button>
//       </div>

//       {/* Genre Dropdown */}
//       <div style={{ textAlign: "center", marginBottom: "15px" }}>
//         <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} style={{ ...styles.searchBar, width: "30%" }}>
//           <option value="">All Genres</option>
//           {uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}
//         </select>
//       </div>

//       {/* Search & Custom Recommendation */}
//       <div style={{ textAlign: "center", marginBottom: "20px" }}>
//         <input type="text" placeholder="Type any book title..." value={customBook} onChange={(e) => setCustomBook(e.target.value)} style={{ ...styles.searchBar, width: "300px" }} />
//         <button onClick={() => handleRecommend(customBook, "similar")} disabled={!customBook} style={{ ...styles.recommendBtn, marginLeft: "10px" }}>🔍 Similar Books</button>
//         <button onClick={() => handleRecommend(customBook, "movies")} disabled={!customBook} style={{ ...styles.recommendBtn, marginLeft: "5px", backgroundColor: "#007bff" }}>🎬 Movies</button>
//         <button onClick={() => handleRecommend(customBook, "songs")} disabled={!customBook} style={{ ...styles.recommendBtn, marginLeft: "5px", backgroundColor: "#1abc9c" }}>🎵 Songs</button>
//       </div>

//       {/* Favorites Toggle */}
//       <div style={{ textAlign: "center", marginBottom: "15px" }}>
//         <button style={{ ...styles.navBtn, backgroundColor: showFavorites ? "#1abc9c" : "#007bff" }} onClick={() => setShowFavorites(!showFavorites)}>
//           {showFavorites ? "Hide Favorites" : "Show Favorites"}
//         </button>
//       </div>

//     {showFavorites && (
//   <div style={styles.favoritesSection}>
//     <h3 style={{ color: "#1abc9c" }}>⭐ Your Favorites</h3>
//     {favorites.length > 0 ? (
//       <ul>
//         {Array.from(new Set(favorites.map(f => f.trim()))).map((f, i) => (
//           <li key={i}>{f}</li>
//         ))}
//       </ul>
//     ) : (
//       <p>No favorites added yet.</p>
//     )}
//   </div>
// )}


//       {/* Book Grid */}
//       <div style={styles.bookGrid}>
//         {filteredBooks.map((book, idx) => {
//           const key = normalizeKey(book.title);
//           return (
//             <div style={styles.bookCard} key={idx}>
//               <img src={book.image} alt={book.title} style={styles.bookImage} />
//               <h3 style={styles.bookTitle}>{book.title}</h3>
//               <p>{book.genres.join(", ")}</p>

//               <button style={{ ...styles.favBtn, backgroundColor: favorites.includes(book.title) ? "#e50914" : "#007bff" }} onClick={() => toggleFavorite(book.title)}>
//                 {favorites.includes(book.title) ? "Remove Favorite" : "Add Favorite"}
//               </button>

//               <div style={{ marginTop: "10px" }}>
//                 {[1,2,3,4,5].map(star => (
//                   <span key={star} style={{ color: ratings[book.title] >= star ? "gold" : "#555", cursor: "pointer" }}
//                         onClick={() => handleRating(book.title, star)}>★</span>
//                 ))}
//               </div>

//               <div style={{ marginTop: "10px", display: 'flex', gap: '5px' }}>
//                 <button style={{ ...styles.recommendBtn, flex: 1, backgroundColor: "#9b59b6"}} onClick={() => handleRecommend(book.title, "similar")}>🔍 Books</button>
//                 <button style={{ ...styles.recommendBtn, flex: 1, backgroundColor: "#007bff" }} onClick={() => handleRecommend(book.title, "movies")}>🎬 Movies</button>
//                 <button style={{ ...styles.recommendBtn, flex: 1, backgroundColor: "#1abc9c" }} onClick={() => handleRecommend(book.title, "songs")}>🎵 Songs</button>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Popup Modal for Recommendations */}
//       {showPopup && (
//         <div style={styles.modalOverlay}>
//           <div style={styles.modalBox}>
//             <button style={styles.closeBtn} onClick={() => setShowPopup(false)}>❌</button>
//             <h3>{getRecommendationHeading()}</h3>
//             <ul>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.type, i))}</ul>
//             <p style={{ fontStyle: "italic", color: "#9b59b6" }}>{recommendations.explanation}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// const styles = {
//   container: { padding: "20px", backgroundColor: "#141414", color: "#fff", minHeight: "100vh" },

//   topNav: {
//     display: "flex",
//     justifyContent: "flex-end",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "15px",
//   },

//   navBtn: { 
//     padding: "8px 12px", 
//     borderRadius: "5px", 
//     cursor: "pointer", 
//     border: "none", 
//     color: "#fff", 
//     fontWeight: "bold" 
//   },

//   title: { textAlign: "center", color: "#1abc9c", marginBottom: "20px" },
//   searchBar: { padding: "8px", borderRadius: "5px", border: "1px solid #444", fontSize: "1rem" },
//   bookGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" },
//   bookCard: { backgroundColor: "#1c1c1c", borderRadius: "10px", padding: "10px" },
//   bookImage: { width: "100%", height: "300px", objectFit: "cover", borderRadius: "5px" },
//   bookTitle: { fontSize: "1.1rem", margin: "10px 0 5px 0" },
//   favBtn: { padding: "8px", borderRadius: "5px", border: "none", cursor: "pointer", color: "#fff", width: "100%", marginTop: "5px" },
//   recommendBtn: { padding: "8px", borderRadius: "5px", border: "none", cursor: "pointer", color: "#fff" },
//   favoritesSection: { backgroundColor: "#1c1c1c", padding: "10px", borderRadius: "5px", maxWidth: "500px", margin: "0 auto" },
//   modalOverlay: { position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 },
//   modalBox: { background: "#1c1c1c", padding: "20px", borderRadius: "10px", width: "400px", maxHeight: "70vh", overflowY: "auto", boxShadow: "0 0 15px rgba(0,0,0,0.5)" },
//   closeBtn: { background: "transparent", color: "#fff", border: "none", fontSize: "1.2rem", cursor: "pointer", position: "absolute", top: "15px", right: "20px" }
// };

// export default BookRecommendations;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Example dataset
const booksDataset = [
  { title: "Harry Potter and the Sorcerer's Stone", genres: ["Fantasy", "Adventure"], age_group: "Kids", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg", description: "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.", author: "J.K. Rowling", releaseYear: 1997 },
  { title: "The Hobbit", genres: ["Fantasy", "Adventure"], age_group: "Kids", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg", description: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and a dragon's treasure.", author: "J.R.R. Tolkien", releaseYear: 1937 },
  { title: "1984", genres: ["Dystopian", "Political Fiction"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg", description: "In a totalitarian future society, a man, whose daily work is re-writing history, tries to rebel by falling in love.", author: "George Orwell", releaseYear: 1949 },
  { title: "To Kill a Mockingbird", genres: ["Classic", "Drama"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81OthjkJBuL.jpg", description: "A lawyer in the Depression-era South defends a black man against an undeserved rape charge, and his children against prejudice.", author: "Harper Lee", releaseYear: 1960 },
  { title: "Pride and Prejudice", genres: ["Romance", "Classic"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg", description: "Five sisters from an English family of landed gentry must deal with issues of marriage, morality and misconceptions.", author: "Jane Austen", releaseYear: 1813 },
  { title: "The Great Gatsby", genres: ["Classic", "Drama"], age_group: "Adults", language: "English", imageUrl: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg", description: "A Midwestern war veteran finds himself drawn to the past and lifestyle of his wealthy neighbor.", author: "F. Scott Fitzgerald", releaseYear: 1925 },
  { title: "The Hunger Games", genres: ["Dystopian", "Action"], age_group: "Teens", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61JfGcL2ljL.jpg", description: "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition where teenagers fight to the death.", author: "Suzanne Collins", releaseYear: 2008 },
  { title: "The Da Vinci Code", genres: ["Thriller", "Mystery"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/91Q5dCjc2KL.jpg", description: "A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society.", author: "Dan Brown", releaseYear: 2003 },
  { title: "The Alchemist", genres: ["Philosophy", "Adventure"], age_group: "Adults", language: "English", imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg", description: "A shepherd boy's journey to the pyramids of Egypt, after having a recurring dream of finding treasure there.", author: "Paulo Coelho", releaseYear: 1988 },
  { title: "Malgudi Days", genres: ["Fiction"], age_group: "Teens", language: "Hindi", imageUrl: "https://rukminim1.flixcart.com/image/832/832/book/1/7/3/malgudi-days-pb-original-imaeh2hbhgngt75g.jpeg?q=70", description: "A collection of short stories by R. K. Narayan set in the fictional South Indian town of Malgudi.", author: "R. K. Narayan", releaseYear: 1943 },
  { title: "Godan", genres: ["Classic"], age_group: "Adults", language: "Hindi", imageUrl: "https://m.media-amazon.com/images/I/61SqBrWGb2L._UF1000,1000_QL80_.jpg", description: "The story of Hori, a poor peasant, and his desperate desire to own a cow, which is a symbol of wealth and prestige in his village.", author: "Munshi Premchand", releaseYear: 1936 },
  { title: "Gunahon Ka Devta", genres: ["Romance"], age_group: "Teens", language: "Hindi", imageUrl: "https://m.media-amazon.com/images/I/813GkVYIXcL.jpg", description: "A tragic love story set in Allahabad, exploring the complexities of love, society, and sacrifice.", author: "Dharamvir Bharati", releaseYear: 1949 },
  { title: "Nirmala", genres: ["Drama"], age_group: "Adults", language: "Hindi", imageUrl: "https://www.maplepress.co.in/cdn/shop/products/nirmalahindi_700x700.jpg?v=1678772714", description: "A poignant story about a young girl married to a much older man, highlighting the issues of dowry and incompatible marriages.", author: "Munshi Premchand", releaseYear: 1928 },
  { title: "Raag Darbari", genres: ["Satire", "Fiction"], age_group: "Adults", language: "Hindi", imageUrl: "https://vasundharabooks.com/wp-content/uploads/2018/04/Raag-Darbari-Front-Cover.jpg", description: "A satirical novel that exposes the deep-rooted corruption and moral decay in post-independence rural India.", author: "Shrilal Shukla", releaseYear: 1968 },
  { title: "The Silent Patient", genres: ["Thriller", "Mystery", "Psychological"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/81JJPDNlxSL._UF1000,1000_QL80_.jpg", description: "A psychotherapist's determination to unravel a famous painter's motive for murdering her husband after she falls silent.", author: "Alex Michaelides", releaseYear: 2019 },
  { title: "Project Hail Mary", genres: ["Science Fiction", "Thriller"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/71S+zKJpVvS._UF1000,1000_QL80_.jpg", description: "An amnesiac astronaut awakens on a lone mission in deep space, tasked with saving humanity from extinction with the help of an unlikely ally.", author: "Andy Weir", releaseYear: 2021 },
  { title: "The Seven Husbands of Evelyn Hugo", genres: ["Historical Fiction", "Romance"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/81PkmvwdbhL._UF1000,1000_QL80_.jpg", description: "A reclusive Old Hollywood movie icon decides to give a final interview to an unknown magazine reporter, revealing shocking truths about her life.", author: "Taylor Jenkins Reid", releaseYear: 2017 },
  { title: "Dune", genres: ["Science Fiction", "Adventure"], age_group: "Adults", language: "English", imageUrl: "https://padhegaindia.in/wp-content/uploads/2023/07/9780593099322_1.webp", description: "The son of a noble family is entrusted with the protection of the most valuable asset and most vital element in the galaxy.", author: "Frank Herbert", releaseYear: 1965 },
  { title: "Mistborn: The Final Empire", genres: ["Fantasy", "Action", "Adventure"], age_group: "Teens", language: "English", imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1672015690l/60784489.jpg", description: "In a world where ash falls from the sky, a thieving orphan discovers she has latent powers and joins a group of rebels to overthrow a dark lord.", author: "Brandon Sanderson", releaseYear: 2006 },
  { title: "The White Tiger", genres: ["Fiction", "Contemporary"], age_group: "Adults", language: "English", imageUrl: "https://m.media-amazon.com/images/I/71Nes-1tfPL._UF1000,1000_QL80_.jpg", description: "An ambitious driver for a rich Indian family uses his wit and cunning to escape from poverty and become an entrepreneur.", author: "Aravind Adiga", releaseYear: 2008 },
  { title: "Thulasi Dalam", genres: ["Thriller", "Horror", "Supernatural"], age_group: "Adults", language: "Telugu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2gzf-XF5I1SwIptWYrMklDQfqbJzt6BIhg&s", description: "A spine-chilling story about a young girl who becomes the target of black magic, and her family's desperate attempts to save her.", author: "Yandamuri Veerendranath", releaseYear: 1980 },
  { title: "Veyipadagalu", genres: ["Classic", "Philosophy", "Fiction"], age_group: "Adults", language: "Telugu", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX-J5qmhmIpfw6CR0LvA3CSpWokcp1Jwjorw&s", description: "A magnum opus that critiques the blind adoption of Western culture and champions traditional Indian values through the story of a village.", author: "Viswanatha Satyanarayana", releaseYear: 1934 },
  { title: "Maidanam", genres: ["Romance", "Philosophy", "Classic"], age_group: "Adults", language: "Telugu", imageUrl: "https://rukminim2.flixcart.com/image/480/640/xif0q/regionalbooks/m/9/4/maidaanam-by-chalam-original-imagmt86tv3zfvjz.jpeg?q=90", description: "A revolutionary and controversial novel for its time, exploring a woman's quest for sexual and personal freedom outside the confines of marriage.", author: "Gudipati Venkatachalam (Chalam)", releaseYear: 1927 },
  { title: "Bahubali: The Rise of Sivagami", genres: ["Fantasy", "Action", "Adventure"], age_group: "Teens", language: "English", imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/The_Rise_of_Sivagami_cover.jpg/250px-The_Rise_of_Sivagami_cover.jpg", description: "A prequel to the blockbuster films, this book dives into the origins of Sivagami and the political intrigue of the Mahishmati kingdom.", author: "Anand Neelakantan", releaseYear: 2017 },
  { title: "Maa Voori Katha", genres: ["Drama", "Fiction"], age_group: "Teens", language: "Telugu", imageUrl: "https://www.telugubooks.in/cdn/shop/products/ma_oori_kathalu_godarolla_kathalu0001_large.jpg?v=1699085962", description: "A collection of stories that capture the essence, dialect, and lifestyle of rural life in the Godavari districts of Andhra Pradesh.", author: "Various", releaseYear: 2022 }
];

// const uniqueGenres = Array.from(new Set(booksDataset.flatMap(b => b.genres)));
// const allBookTitles = new Set(booksDataset.map(b => b.title));

// function BookRecommendations() {
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedBook, setSelectedBook] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
//     const [showFavorites, setShowFavorites] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("http://localhost:5001/favorites")
//           .then(res => setFavorites(res.data.favorites || []))
//           .catch(err => console.error("Failed to fetch favorites:", err));
//     }, []);

//     const toggleFavorite = async (bookTitle) => {
//         const key = 'movie'; // Your backend uses 'movie' as a generic key
//         try {
//             if (favorites.includes(bookTitle)) {
//                 const res = await axios.delete("http://localhost:5001/favorites/remove", { data: { [key]: bookTitle } });
//                 setFavorites(res.data.favorites || []);
//             } else {
//                 const res = await axios.post("http://localhost:5001/favorites/add", { [key]: bookTitle });
//                 setFavorites(res.data.favorites || []);
//             }
//         } catch (err) {
//             console.error("Failed to update favorites:", err);
//         }
//     };
    
//     const handleRecommend = async (bookTitle, type) => {
//         if (!bookTitle.trim()) return;
        
//         const payload = { book: bookTitle }; // Correct payload key is 'book'
//         let endpoint = "";

//         // Correct endpoints are '/from-book/...'
//         if (type === 'similar') endpoint = "http://localhost:5001/crossrecommend/from-book/similar";
//         else if (type === 'movies') endpoint = "http://localhost:5001/crossrecommend/from-book/movies";
//         else if (type === 'songs') endpoint = "http://localhost:5001/crossrecommend/from-book/songs";
//         else return;


//         setLoading(true);

//         setShowRecommendOptions(false);
//         try {
//             const response = await axios.post(endpoint, payload);
//             setRecommendations({ type: response.data.target_domain || type, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations based on ${bookTitle}.` });
//             setRecommendationModalVisible(true);
//         } catch (error) {
//             console.error(`Recommendation error for ${type}:`, error);
//             setRecommendations({ type, items: [], explanation: `Failed to fetch recommendations.` });
//             setRecommendationModalVisible(true);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         setShowRecommendOptions(false);
//         if (query.length > 1) {
//             setSuggestions(booksDataset.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };
    
//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (book) => setSelectedBook(book);
//     const closeDetailModal = () => setSelectedBook(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredBooks = booksDataset.filter(b =>
//         (!ageFilter || b.age_group === ageFilter) &&
//         (!genreFilter || b.genres.includes(genreFilter)) &&
//         (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const favoriteBooks = favorites.filter(fav => allBookTitles.has(fav));

//     const renderRecommendationItem = (item, type, i) => {
//         let title = "N/A";
//         let detail = "";

//         if (type === "books") {
//             title = item.title || 'Untitled Book';
//             detail = `by ${item.authors || 'Unknown Author'}`;
//         } else if (type === "songs") {
//             title = item.track_name || 'Unknown Track';
//             detail = `by ${item.artist_name || 'Unknown Artist'}`;
//         } else if (type === "movies") {
//             title = item.title || 'Untitled Movie';
//             detail = item.genres ? item.genres.join(', ') : '';
//         }

//         return <li style={styles.recommendListItem} key={i}><strong>{title}</strong><br /><span style={{color: '#bbb'}}>{detail}</span></li>;
//     };

//     return (
//         <div style={styles.container}>
//             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
//             <nav style={styles.navbar}>
//                 <div style={styles.logo}>Cineverse ✨</div>
//                 <div>
//                     <button style={styles.navBtn} onClick={goToDashboard}>Dashboard</button>
//                     <button style={styles.navBtn} onClick={handleLogout}>Logout</button>
//                 </div>
//             </nav>

//             <header style={styles.header}>
//                 <h1 style={styles.mainTitle}>Find Your Next Obsession</h1>
//                 <div style={styles.controlsContainer}>
//                     <div style={{ position: 'relative' }}>
//                         <input type="text" placeholder="Search for a book or author..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
//                         {showSuggestions && suggestions.length > 0 && (
//                              <ul style={styles.suggestionsBox}>
//                                 {suggestions.map(s => <li key={s.title} style={styles.suggestionItem} onMouseDown={() => onSuggestionClick(s.title)}>{s.title}</li>)}
//                             </ul>
//                         )}
//                     </div>
//                      {searchQuery && !showRecommendOptions && (
//                         <button style={styles.recommendBtnSearch} onClick={() => setShowRecommendOptions(true)}>
//                             Recommend
//                         </button>
//                     )}
//                     <div style={{ position: 'relative' }}>
//                         <button onClick={() => setIsFilterPanelVisible(p => !p)} style={styles.filterToggleBtn}>
//                             <span role="img" aria-label="filters" style={{ marginRight: '8px' }}>🎨</span> Filters
//                         </button>
//                         {isFilterPanelVisible && (
//                             <div style={styles.filterDropdown}>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Age Group</label>
//                                     <div style={styles.buttonGroup}>
//                                         <button onClick={() => setAgeFilter('Kids')} style={ageFilter === 'Kids' ? styles.buttonActive : styles.buttonInactive}>Kids</button>
//                                         <button onClick={() => setAgeFilter('Teens')} style={ageFilter === 'Teens' ? styles.buttonActive : styles.buttonInactive}>Teens</button>
//                                         <button onClick={() => setAgeFilter('Adults')} style={ageFilter === 'Adults' ? styles.buttonActive : styles.buttonInactive}>Adults</button>
//                                     </div>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Genre</label>
//                                     <select style={styles.selectDropdown} value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}><option value="">All Genres</option>{uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}</select>
//                                 </div>
//                                 <button onClick={handleResetFilters} style={styles.resetBtn}>Reset Filters</button>
//                             </div>
//                         )}
//                     </div>
//                     <button style={styles.filterToggleBtn} onClick={() => setShowFavorites(!showFavorites)}>
//                         <span role="img" aria-label="favorites" style={{ marginRight: '8px' }}>⭐</span> {showFavorites ? 'Hide Favorites' : 'My Favorites'}
//                     </button>
//                 </div>
//                 {showRecommendOptions && (
//                     <div style={styles.recommendOptionsContainer}>
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>📚 Similar Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'movies')} style={styles.optionButton}>🎬 Movies</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'songs')} style={styles.optionButton}>🎵 Songs</button>
//                     </div>
//                 )}
//             </header>

//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h2 style={styles.favoritesTitle}>Your Favorite Books</h2>
//                     <div style={styles.bookGrid}>
//                         {favoriteBooks.map(favTitle => {
//                             const book = booksDataset.find(b => b.title === favTitle);
//                             if (!book) return null;
//                             return (
//                                 <div style={styles.bookCard} key={book.title}>
//                                     <img src={book.imageUrl} alt={book.title} style={styles.bookImage} onClick={() => openDetailModal(book)} />
//                                     <button 
//                                         style={styles.cardFavBtnActive} 
//                                         onClick={(e) => { e.stopPropagation(); toggleFavorite(book.title); }}
//                                     >
//                                         ♥
//                                     </button>
//                                     <div style={styles.cardOverlay} onClick={() => openDetailModal(book)}>
//                                         <h3 style={styles.cardTitle}>{book.title}</h3>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     {favoriteBooks.length === 0 && <p>You haven't added any favorite books yet.</p>}
//                 </div>
//             )}

//             <h2 style={styles.title}>Book Collection</h2>
//             <div style={styles.bookGrid}>
//                 {filteredBooks.map((book) => (
//                     <div style={styles.bookCard} key={book.title}>
//                         <img src={book.imageUrl} alt={book.title} style={styles.bookImage} onClick={() => openDetailModal(book)} />
//                         <button 
//                             style={favorites.includes(book.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { e.stopPropagation(); toggleFavorite(book.title); }}
//                         >
//                             {favorites.includes(book.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(book)}>
//                             <h3 style={styles.cardTitle}>{book.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedBook && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedBook.imageUrl})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedBook.imageUrl} alt={selectedBook.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <div style={styles.modalTitleWrapper}>
//                                     <h2 style={styles.modalTitle}>{selectedBook.title}</h2>
//                                     <button 
//                                         style={favorites.includes(selectedBook.title) ? styles.modalFavBtnActive : styles.modalFavBtn}
//                                         onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedBook.title); }}
//                                     >
//                                         {favorites.includes(selectedBook.title) ? "♥" : "♡"}
//                                     </button>
//                                 </div>
//                                 <p style={styles.modalMeta}>by {selectedBook.author} ({selectedBook.releaseYear})</p>
//                                 <p style={{...styles.modalMeta, fontStyle: 'italic'}}>{selectedBook.genres.join(" / ")}</p>
//                                 <p style={styles.modalDescription}>{selectedBook.description}</p>
                                
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedBook.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#D2691E'}}>Similar Books</button>
//                                     <button onClick={() => handleRecommend(selectedBook.title, 'movies')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Movies</button>
//                                     <button onClick={() => handleRecommend(selectedBook.title, 'songs')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Songs</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
            
//             {recommendationModalVisible && (
//                 <div style={styles.modalOverlay} onClick={closeRecommendationModal}>
//                     <div style={{...styles.modalContent, maxWidth: '600px', padding: '30px'}}>
//                         <button style={styles.closeButton} onClick={closeRecommendationModal}>×</button>
//                         <h2 style={styles.recModalTitle}>Recommendations</h2>
//                         {loading ? <p>Loading...</p> :
//                          recommendations.items.length > 0 ? 
//                          <ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.type, i))}</ul> :
//                          <p>No recommendations found.</p>
//                         }
//                         {recommendations.explanation && (
//                             <p style={styles.explanationText}><strong>AI Explanation:</strong> {recommendations.explanation}</p>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// const styles = {
//     container: { padding: "0 5% 40px 5%", backgroundColor: "#101010", color: "#f1f1f1", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" },
//     navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 0", backgroundColor: "transparent" },
//     logo: { fontSize: "1.8rem", fontWeight: "700", color: "#fff", letterSpacing: '1px' },
//     navBtn: { backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "10px 20px", borderRadius: "50px", cursor: "pointer", color: "#fff", fontWeight: "600", transition: "all 0.3s ease", marginLeft: '10px' },
//     header: { textAlign: 'center', margin: '40px 0' },
//     mainTitle: { fontSize: '3.5rem', fontWeight: '700', color: '#fff', marginBottom: '20px' },
//     title: { fontSize: "2rem", margin: "40px 0 20px 0", color: "#03DAC6", textAlign: "center", fontWeight: "600" },
//     controlsContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '15px' },
//     searchBar: { padding: "15px 25px", borderRadius: "50px", border: "1px solid #333", fontSize: "1rem", color: "#fff", backgroundColor: "#1a1a1a", width: '400px', outline: 'none' },
//     recommendBtnSearch: { backgroundColor: "#03DAC6", color: '#000', border: 'none', padding: '15px 25px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', fontSize: '1rem' },
//     filterToggleBtn: { backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: '15px 25px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '1rem', color: '#fff' },
//     filterDropdown: { position: 'absolute', top: 'calc(100% + 10px)', right: 0, backgroundColor: '#1e1e1e', borderRadius: '15px', padding: '20px', zIndex: 100, width: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid #333' },
//     filterGroup: { marginBottom: '15px' },
//     filterLabel: { display: 'block', marginBottom: '8px', fontWeight: '600', color: '#aaa', textAlign: 'left' },
//     buttonGroup: { display: 'flex', gap: '10px' },
//     buttonInactive: { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #444', background: '#333', color: '#fff', cursor: 'pointer' },
//     buttonActive: { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #03DAC6', background: '#03DAC6', color: '#000', fontWeight: '700', cursor: 'pointer' },
//     selectDropdown: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #444', background: '#333', color: '#fff' },
//     resetBtn: { width: '100%', padding: '10px', marginTop: '10px', borderRadius: '8px', border: 'none', background: '#e74c3c', color: '#fff', fontWeight: '600', cursor: 'pointer' },
//     suggestionsBox: { listStyle: 'none', padding: '5px', margin: 0, position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', marginTop: '5px', zIndex: 10, maxHeight: '200px', overflowY: 'auto', textAlign: 'left' },
//     suggestionItem: { padding: '10px 15px', cursor: 'pointer', borderRadius: '5px' },
    
//     recommendOptionsContainer: { display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', marginBottom: '25px' },
//     optionButton: { background: '#222', border: '1px solid #444', color: '#f1f1f1', padding: '12px 25px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' },
    
//     favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '100%', border: '1px solid #333' },
//     favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },

//     bookGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     bookCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     bookImage: { width: "100%", height: "330px", objectFit: "cover", display: 'block' },
//     cardFavBtn: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardFavBtnActive: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#e50914', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '330px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1 },
//     modalTitleWrapper: { display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' },
//     modalTitle: { margin: '0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1rem', color: '#bbb', margin: '4px 0' },
//     modalDescription: { fontSize: '1rem', color: '#ddd', lineHeight: 1.7, margin: '20px 0', flexGrow: 1 },
//     modalFavBtn: { background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '2.5rem' },
//     modalFavBtnActive: { background: 'transparent', border: 'none', color: '#e50914', cursor: 'pointer', fontSize: '2.5rem' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid #333' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '12px 0', borderBottom: '1px dotted #444', fontSize: '1rem' }
// };



// // (Assuming booksDataset, uniqueGenres, allBookTitles are imported or defined above)
// const uniqueGenres = Array.from(new Set(booksDataset.flatMap(b => b.genres)));
// const allBookTitles = new Set(booksDataset.map(b => b.title));


// function BookRecommendations() {
//     const [favorites, setFavorites] = useState([]);
//     // This state is correct: it holds ONE list at a time
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedBook, setSelectedBook] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     // This state is required to show the 3 buttons
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
//     const [showFavorites, setShowFavorites] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("http://localhost:5001/favorites")
//             .then(res => setFavorites(res.data.favorites || []))
//             .catch(err => console.error("Failed to fetch favorites:", err));
//     }, []);

//     const toggleFavorite = async (bookTitle) => {
//         const key = 'movie'; // Your backend uses 'movie' as a generic key
//         try {
//             if (favorites.includes(bookTitle)) {
//                 const res = await axios.delete("http://localhost:5001/favorites/remove", { data: { [key]: bookTitle } });
//                 setFavorites(res.data.favorites || []);
//             } else {
//                 const res = await axios.post("http://localhost:5001/favorites/add", { [key]: bookTitle });
//                 setFavorites(res.data.favorites || []);
//             }
//         } catch (err) {
//             console.error("Failed to update favorites:", err);
//         }
//     };
    
//     // --- THIS IS THE KEY FUNCTION ---
//     // It calls your ONE route, but only shows the 'type' you clicked on
//     const handleRecommend = async (bookTitle, type) => {
//         if (!bookTitle.trim()) return;
        
//         const payload = { book: bookTitle };
//         // --- CHANGED ---: All buttons call the SAME new endpoint
//         const endpoint = "http://localhost:5001/recommend/from-book"; 

//         setLoading(true);
//         setShowRecommendOptions(false); // Hide buttons after click
        
//         try {
//             // 1. Call the single endpoint
//             const response = await axios.post(endpoint, payload);
//             const data = response.data;
//             const explanation = data.explanation || `Recommendations based on ${bookTitle}.`;

//             // 2. Filter the result based on the button you clicked ('type')
//             if (type === 'similar') {
//                 setRecommendations({ 
//                     type: 'books', // We'll call it 'books' for the renderer
//                     items: data.recommendations.books || [], // Only get books
//                     explanation: explanation 
//                 });
//             } else if (type === 'movies') {
//                 setRecommendations({ 
//                     type: 'movies', 
//                     items: data.recommendations.movies || [], // Only get movies
//                     explanation: explanation 
//                 });
//             } else if (type === 'songs') {
//                  setRecommendations({ 
//                     type: 'songs', 
//                     items: data.recommendations.songs || [], // Only get songs
//                     explanation: explanation 
//                 });
//             }

//             setRecommendationModalVisible(true);
//         } catch (error) {
//             console.error(`Recommendation error for ${type}:`, error);
//             setRecommendations({ type, items: [], explanation: `Failed to fetch recommendations.` });
//             setRecommendationModalVisible(true);
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         setShowRecommendOptions(false); 
//         if (query.length > 1) {
//             setSuggestions(booksDataset.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };
    
//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (book) => setSelectedBook(book);
//     const closeDetailModal = () => setSelectedBook(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredBooks = booksDataset.filter(b =>
//         (!ageFilter || b.age_group === ageFilter) &&
//         (!genreFilter || b.genres.includes(genreFilter)) &&
//         (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const favoriteBooks = favorites.filter(fav => allBookTitles.has(fav));

//     // This function is correct. It renders the 'items' list
//     // based on the 'type' we set in handleRecommend
//     const renderRecommendationItem = (item, type, i) => {
//         let title = "N/A";
//         let detail = "";

//         if (type === "books") { // 'books' (set from 'similar' in handleRecommend)
//             title = item.title || 'Untitled Book';
//             detail = `by ${item.authors || 'Unknown Author'}`;
//         } else if (type === "songs") {
//             title = item.track_name || 'Unknown Track';
//             detail = `by ${item.artist_name || 'Unknown Artist'}`;
//         } else if (type === "movies") {
//             title = item.title || 'Untitled Movie';
//             detail = item.genres ? item.genres.join(', ') : '';
//         }

//         return <li style={styles.recommendListItem} key={i}><strong>{title}</strong><br /><span style={{color: '#bbb'}}>{detail}</span></li>;
//     };

//     return (
//         <div style={styles.container}>
//             <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
//             <nav style={styles.navbar}>
//                 <div style={styles.logo}>Cineverse ✨</div>
//                 <div>
//                     <button style={styles.navBtn} onClick={goToDashboard}>Dashboard</button>
//                     <button style={styles.navBtn} onClick={handleLogout}>Logout</button>
//                 </div>
//             </nav>

//             <header style={styles.header}>
//                 <h1 style={styles.mainTitle}>Find Your Next Obsession</h1>
//                 <div style={styles.controlsContainer}>
//                     <div style={{ position: 'relative' }}>
//                         <input type="text" placeholder="Search for a book or author..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
//                         {showSuggestions && suggestions.length > 0 && (
//                              <ul style={styles.suggestionsBox}>
//                                  {suggestions.map(s => <li key={s.title} style={styles.suggestionItem} onMouseDown={() => onSuggestionClick(s.title)}>{s.title}</li>)}
//                              </ul>
//                         )}
//                     </div>
//                     {/* This button SHOWS the 3 options */}
//                      {searchQuery && !showRecommendOptions && (
//                         <button style={styles.recommendBtnSearch} onClick={() => setShowRecommendOptions(true)}>
//                             Recommend
//                         </button>
//                     )}
//                     <div style={{ position: 'relative' }}>
//                         <button onClick={() => setIsFilterPanelVisible(p => !p)} style={styles.filterToggleBtn}>
//                             <span role="img" aria-label="filters" style={{ marginRight: '8px' }}>🎨</span> Filters
//                         </button>
//                         {isFilterPanelVisible && (
//                             <div style={styles.filterDropdown}>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Age Group</label>
//                                     <div style={styles.buttonGroup}>
//                                         <button onClick={() => setAgeFilter('Kids')} style={ageFilter === 'Kids' ? styles.buttonActive : styles.buttonInactive}>Kids</button>
//                                         <button onClick={() => setAgeFilter('Teens')} style={ageFilter === 'Teens' ? styles.buttonActive : styles.buttonInactive}>Teens</button>
//                                         <button onClick={() => setAgeFilter('Adults')} style={ageFilter === 'Adults' ? styles.buttonActive : styles.buttonInactive}>Adults</button>
//                                     </div>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Genre</label>
//                                     <select style={styles.selectDropdown} value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}><option value="">All Genres</option>{uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}</select>
//                                 </div>
//                                 <button onClick={handleResetFilters} style={styles.resetBtn}>Reset Filters</button>
//                             </div>
//                         )}
//                     </div>
//                     <button style={styles.filterToggleBtn} onClick={() => setShowFavorites(!showFavorites)}>
//                         <span role="img" aria-label="favorites" style={{ marginRight: '8px' }}>⭐</span> {showFavorites ? 'Hide Favorites' : 'My Favorites'}
//                     </button>
//                 </div>
                
//                 {/* These are the 3 SEPARATE buttons you want */}
//                 {showRecommendOptions && (
//                     <div style={styles.recommendOptionsContainer}>
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>📚 Similar Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'movies')} style={styles.optionButton}>🎬 Movies</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'songs')} style={styles.optionButton}>🎵 Songs</button>
//                     </div>
//                 )}
//             </header>

//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h2 style={styles.favoritesTitle}>Your Favorite Books</h2>
//                     <div style={styles.bookGrid}>
//                         {favoriteBooks.map(favTitle => {
//                             const book = booksDataset.find(b => b.title === favTitle);
//                             if (!book) return null;
//                             return (
//                                 <div style={styles.bookCard} key={book.title}>
//                                     <img src={book.imageUrl} alt={book.title} style={styles.bookImage} onClick={() => openDetailModal(book)} />
//                                     <button 
//                                         style={styles.cardFavBtnActive} 
//                                         onClick={(e) => { e.stopPropagation(); toggleFavorite(book.title); }}
//                                     >
//                                         ♥
//                                     </button>
//                                     <div style={styles.cardOverlay} onClick={() => openDetailModal(book)}>
//                                         <h3 style={styles.cardTitle}>{book.title}</h3>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                     {favoriteBooks.length === 0 && <p>You haven't added any favorite books yet.</p>}
//                 </div>
//             )}

//             <h2 style={styles.title}>Book Collection</h2>
//             <div style={styles.bookGrid}>
//                 {filteredBooks.map((book) => (
//                     <div style={styles.bookCard} key={book.title}>
//                         <img src={book.imageUrl} alt={book.title} style={styles.bookImage} onClick={() => openDetailModal(book)} />
//                         <button 
//                             style={favorites.includes(book.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { e.stopPropagation(); toggleFavorite(book.title); }}
//                         >
//                             {favorites.includes(book.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(book)}>
//                             <h3 style={styles.cardTitle}>{book.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedBook && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedBook.imageUrl})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedBook.imageUrl} alt={selectedBook.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <div style={styles.modalTitleWrapper}>
//                                     <h2 style={styles.modalTitle}>{selectedBook.title}</h2>
//                                     <button 
//                                         style={favorites.includes(selectedBook.title) ? styles.modalFavBtnActive : styles.modalFavBtn}
//                                         onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedBook.title); }}
//                                     >
//                                         {favorites.includes(selectedBook.title) ? "♥" : "♡"}
//                                     </button>
//                                 </div>
//                                 <p style={styles.modalMeta}>by {selectedBook.author} ({selectedBook.releaseYear})</p>
//                                 <p style={{...styles.modalMeta, fontStyle: 'italic'}}>{selectedBook.genres.join(" / ")}</p>
//                                 <p style={styles.modalDescription}>{selectedBook.description}</p>
                                
//                                 {/* These are the 3 SEPARATE buttons you want in the modal */}
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedBook.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#D2691E'}}>Similar Books</button>
//                                     <button onClick={() => handleRecommend(selectedBook.title, 'movies')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Movies</button>
//                                     <button onClick={() => handleRecommend(selectedBook.title, 'songs')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Songs</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
            
//             {/* This modal is correct: it displays the ONE list from 'recommendations.items' */}
//             {recommendationModalVisible && (
//                 <div style={styles.modalOverlay} onClick={closeRecommendationModal}>
//                     <div style={{...styles.modalContent, maxWidth: '600px', padding: '30px'}}>
//                         <button style={styles.closeButton} onClick={closeRecommendationModal}>×</button>
//                         <h2 style={styles.recModalTitle}>Recommendations</h2>
//                         {loading ? <p>Loading...</p> :
//                          recommendations.items.length > 0 ? 
//                          <ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.type, i))}</ul> :
//                          <p>No recommendations found.</p>
//                         }
//                         {recommendations.explanation && (
//                             <p style={styles.explanationText}><strong>AI Explanation:</strong> {recommendations.explanation}</p>
//                         )}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// // (Your full 'styles' object goes here)
// const styles = {
//     container: { padding: "0 5% 40px 5%", backgroundColor: "#101010", color: "#f1f1f1", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" },
//     navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 0", backgroundColor: "transparent" },
//     logo: { fontSize: "1.8rem", fontWeight: "700", color: "#fff", letterSpacing: '1px' },
//     navBtn: { backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "10px 20px", borderRadius: "50px", cursor: "pointer", color: "#fff", fontWeight: "600", transition: "all 0.3s ease", marginLeft: '10px' },
//     header: { textAlign: 'center', margin: '40px 0' },
//     mainTitle: { fontSize: '3.5rem', fontWeight: '700', color: '#fff', marginBottom: '20px' },
//     title: { fontSize: "2rem", margin: "40px 0 20px 0", color: "#03DAC6", textAlign: "center", fontWeight: "600" },
//     controlsContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '15px' },
//     searchBar: { padding: "15px 25px", borderRadius: "50px", border: "1px solid #333", fontSize: "1rem", color: "#fff", backgroundColor: "#1a1a1a", width: '400px', outline: 'none' },
//     recommendBtnSearch: { backgroundColor: "#03DAC6", color: '#000', border: 'none', padding: '15px 25px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', fontSize: '1rem' },
//     filterToggleBtn: { backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: '15px 25px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '1rem', color: '#fff' },
//     filterDropdown: { position: 'absolute', top: 'calc(100% + 10px)', right: 0, backgroundColor: '#1e1e1e', borderRadius: '15px', padding: '20px', zIndex: 100, width: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid #333' },
//     filterGroup: { marginBottom: '15px' },
//     filterLabel: { display: 'block', marginBottom: '8px', fontWeight: '600', color: '#aaa', textAlign: 'left' },
//     buttonGroup: { display: 'flex', gap: '10px' },
//     buttonInactive: { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #444', background: '#333', color: '#fff', cursor: 'pointer' },
//     buttonActive: { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #03DAC6', background: '#03DAC6', color: '#000', fontWeight: '700', cursor: 'pointer' },
//     selectDropdown: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #444', background: '#333', color: '#fff' },
//     resetBtn: { width: '100%', padding: '10px', marginTop: '10px', borderRadius: '8px', border: 'none', background: '#e74c3c', color: '#fff', fontWeight: '600', cursor: 'pointer' },
//     suggestionsBox: { listStyle: 'none', padding: '5px', margin: 0, position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', marginTop: '5px', zIndex: 10, maxHeight: '200px', overflowY: 'auto', textAlign: 'left' },
//     suggestionItem: { padding: '10px 15px', cursor: 'pointer', borderRadius: '5px' },
    
//     recommendOptionsContainer: { display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', marginBottom: '25px' },
//     optionButton: { background: '#222', border: '1px solid #444', color: '#f1f1f1', padding: '12px 25px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' },
    
//     favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '100%', border: '1px solid #333' },
//     favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },

//     bookGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     bookCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     bookImage: { width: "100%", height: "330px", objectFit: "cover", display: 'block' },
//     cardFavBtn: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardFavBtnActive: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#e50914', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '330px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1, minHeight: '330px' },
//     modalTitleWrapper: { display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' },
//     modalTitle: { margin: '0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1rem', color: '#bbb', margin: '4px 0' },
//     modalDescription: { fontSize: '1rem', color: '#ddd', lineHeight: 1.7, margin: '20px 0', flexGrow: 1 },
//     modalFavBtn: { background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '2.5rem' },
//     modalFavBtnActive: { background: 'transparent', border: 'none', color: '#e50914', cursor: 'pointer', fontSize: '2.5rem' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid #333' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1pm solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '12px 0', borderBottom: '1px dotted #444', fontSize: '1rem' }
// };


// // export default BookRecommendations;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// (Assuming booksDataset, uniqueGenres, allBookTitles are imported or defined above)
const uniqueGenres = Array.from(new Set(booksDataset.flatMap(b => b.genres)));
const allBookTitles = new Set(booksDataset.map(b => b.title));
// --- ADDED ---: 1. Create a list of unique languages from the dataset
// (Assuming books have a 'language' property like 'English', 'Spanish', etc.)
const uniqueLanguages = Array.from(new Set(booksDataset.map(b => b.language).filter(Boolean)));


function BookRecommendations() {
    const [favorites, setFavorites] = useState([]);
    // This state is correct: it holds ONE list at a time
    const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("");
    const [languageFilter, setLanguageFilter] = useState(""); // --- ADDED ---: 2. State for the new language filter
    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
    const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    // This state is required to show the 3 buttons
    const [showRecommendOptions, setShowRecommendOptions] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5001/favorites")
            .then(res => setFavorites(res.data.favorites || []))
            .catch(err => console.error("Failed to fetch favorites:", err));
    }, []);

    const toggleFavorite = async (bookTitle) => {
        const key = 'books'; // Your backend uses 'movie' as a generic key
        try {
            if (favorites.includes(bookTitle)) {
                const res = await axios.delete("http://localhost:5001/favorites/remove", { data: { [key]: bookTitle } });
                setFavorites(res.data.favorites || []);
            } else {
                const res = await axios.post("http://localhost:5001/favorites/add", { [key]: bookTitle });
                setFavorites(res.data.favorites || []);
            }
        } catch (err) {
            console.error("Failed to update favorites:", err);
        }
    };
    
    // --- THIS IS THE KEY FUNCTION ---
    // It calls your ONE route, but only shows the 'type' you clicked on
    const handleRecommend = async (bookTitle, type) => {
        if (!bookTitle.trim()) return;
        
        const payload = { book: bookTitle };
        // --- CHANGED ---: All buttons call the SAME new endpoint
        const endpoint = "http://localhost:5001/recommend/from-book"; 

        setLoading(true);
        setShowRecommendOptions(false); // Hide buttons after click
        
        try {
            // 1. Call the single endpoint
            const response = await axios.post(endpoint, payload);
            const data = response.data;
            const explanation = data.explanation || `Recommendations based on ${bookTitle}.`;

            // 2. Filter the result based on the button you clicked ('type')
            if (type === 'similar') {
                setRecommendations({ 
                    type: 'books', // We'll call it 'books' for the renderer
                    items: data.recommendations.books || [], // Only get books
                    explanation: explanation 
                });
            } else if (type === 'movies') {
                setRecommendations({ 
                    type: 'movies', 
                    items: data.recommendations.movies || [], // Only get movies
                    explanation: explanation 
                });
            } else if (type === 'songs') {
                 setRecommendations({ 
                    type: 'songs', 
                    items: data.recommendations.songs || [], // Only get songs
                    explanation: explanation 
                });
            }

            setRecommendationModalVisible(true);
        } catch (error) {
            console.error(`Recommendation error for ${type}:`, error);
            setRecommendations({ type, items: [], explanation: `Failed to fetch recommendations.` });
            setRecommendationModalVisible(true);
        } finally {
            setLoading(false);
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        setShowRecommendOptions(false); 
        if (query.length > 1) {
            setSuggestions(booksDataset.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase())));
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };
    
    const onSuggestionClick = (title) => {
        setSearchQuery(title);
        setShowSuggestions(false);
    };

    const openDetailModal = (book) => setSelectedBook(book);
    const closeDetailModal = () => setSelectedBook(null);
    const closeRecommendationModal = () => setRecommendationModalVisible(false);
    // --- UPDATED ---: 3. Add languageFilter reset
    const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); };
    const goToDashboard = () => navigate("/dashboard");
    const handleLogout = () => navigate("/");

    // --- UPDATED ---: 4. Add languageFilter to the filter logic
    const filteredBooks = booksDataset.filter(b =>
        (!ageFilter || b.age_group === ageFilter) &&
        (!genreFilter || b.genres.includes(genreFilter)) &&
        (!languageFilter || b.language === languageFilter) && 
        (b.title.toLowerCase().includes(searchQuery.toLowerCase()) || b.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const favoriteBooks = favorites.filter(fav => allBookTitles.has(fav));

    // This function is correct. It renders the 'items' list
    // based on the 'type' we set in handleRecommend
    const renderRecommendationItem = (item, type, i) => {
        let title = "N/A";
        let detail = "";

        if (type === "books") { // 'books' (set from 'similar' in handleRecommend)
            title = item.title || 'Untitled Book';
            detail = `by ${item.authors || 'Unknown Author'}`;
        } else if (type === "songs") {
            title = item.track_name || 'Unknown Track';
            detail = `by ${item.artist_name || 'Unknown Artist'}`;
        } else if (type === "movies") {
            title = item.title || 'Untitled Movie';
            detail = item.genres ? item.genres.join(', ') : '';
        }

        return <li style={styles.recommendListItem} key={i}><strong>{title}</strong><br /><span style={{color: '#bbb'}}>{detail}</span></li>;
    };

    return (
        <div style={styles.container}>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
            <nav style={styles.navbar}>
                <div style={styles.logo}>Cineverse ✨</div>
                <div>
                    <button style={styles.navBtn} onClick={goToDashboard}>Dashboard</button>
                    <button style={styles.navBtn} onClick={handleLogout}>Logout</button>
                </div>
            </nav>

            <header style={styles.header}>
                <h1 style={styles.mainTitle}>Find Your Next Obsession</h1>
                <div style={styles.controlsContainer}>
                    <div style={{ position: 'relative' }}>
                        <input type="text" placeholder="Search for a book or author..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
                        {showSuggestions && suggestions.length > 0 && (
                            <ul style={styles.suggestionsBox}>
                                {suggestions.map(s => <li key={s.title} style={styles.suggestionItem} onMouseDown={() => onSuggestionClick(s.title)}>{s.title}</li>)}
                            </ul>
                        )}
                    </div>
                    {/* This button SHOWS the 3 options */}
                     {searchQuery && !showRecommendOptions && (
                        <button style={styles.recommendBtnSearch} onClick={() => setShowRecommendOptions(true)}>
                            Recommend
                        </button>
                    )}
                    <div style={{ position: 'relative' }}>
                        <button onClick={() => setIsFilterPanelVisible(p => !p)} style={styles.filterToggleBtn}>
                            <span role="img" aria-label="filters" style={{ marginRight: '8px' }}>🎨</span> Filters
                        </button>
                        {isFilterPanelVisible && (
                            <div style={styles.filterDropdown}>
                                <div style={styles.filterGroup}>
                                    <label style={styles.filterLabel}>Age Group</label>
                                    <div style={styles.buttonGroup}>
                                        <button onClick={() => setAgeFilter('Kids')} style={ageFilter === 'Kids' ? styles.buttonActive : styles.buttonInactive}>Kids</button>
                                        <button onClick={() => setAgeFilter('Teens')} style={ageFilter === 'Teens' ? styles.buttonActive : styles.buttonInactive}>Teens</button>
                                        <button onClick={() => setAgeFilter('Adults')} style={ageFilter === 'Adults' ? styles.buttonActive : styles.buttonInactive}>Adults</button>
                                    </div>
                                </div>
                                <div style={styles.filterGroup}>
                                    <label style={styles.filterLabel}>Genre</label>
                                    <select style={styles.selectDropdown} value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}><option value="">All Genres</option>{uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}</select>
                                </div>
                                
                                {/* --- ADDED ---: 5. The new Language filter dropdown UI */}
                                <div style={styles.filterGroup}>
                                    <label style={styles.filterLabel}>Language</label>
                                    <select style={styles.selectDropdown} value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}>
                                        <option value="">All Languages</option>
                                        {uniqueLanguages.map((lang, i) => <option key={i} value={lang}>{lang}</option>)}
                                    </select>
                                </div>
                                {/* --- END OF ADDED SECTION --- */}

                                <button onClick={handleResetFilters} style={styles.resetBtn}>Reset Filters</button>
                            </div>
                        )}
                    </div>
                    <button style={styles.filterToggleBtn} onClick={() => setShowFavorites(!showFavorites)}>
                        <span role="img" aria-label="favorites" style={{ marginRight: '8px' }}>⭐</span> {showFavorites ? 'Hide Favorites' : 'My Favorites'}
                    </button>
                </div>
                
                {/* These are the 3 SEPARATE buttons you want */}
                {showRecommendOptions && (
                    <div style={styles.recommendOptionsContainer}>
                        <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>📚 Similar Books</button>
                        <button onClick={() => handleRecommend(searchQuery, 'movies')} style={styles.optionButton}>🎬 Movies</button>
                        <button onClick={() => handleRecommend(searchQuery, 'songs')} style={styles.optionButton}>🎵 Songs</button>
                    </div>
                )}
            </header>

            {showFavorites && (
                <div style={styles.favoritesSection}>
                    <h2 style={styles.favoritesTitle}>Your Favorite Books</h2>
                    <div style={styles.bookGrid}>
                        {favoriteBooks.map(favTitle => {
                            const book = booksDataset.find(b => b.title === favTitle);
                            if (!book) return null;
                            return (
                                <div style={styles.bookCard} key={book.title}>
                                    <img src={book.imageUrl} alt={book.title} style={styles.bookImage} onClick={() => openDetailModal(book)} />
                                    <button 
                                        style={styles.cardFavBtnActive} 
                                        onClick={(e) => { e.stopPropagation(); toggleFavorite(book.title); }}
                                    >
                                        ♥
                                    </button>
                                    <div style={styles.cardOverlay} onClick={() => openDetailModal(book)}>
                                        <h3 style={styles.cardTitle}>{book.title}</h3>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {favoriteBooks.length === 0 && <p>You haven't added any favorite books yet.</p>}
                </div>
            )}

            <h2 style={styles.title}>Book Collection</h2>
            <div style={styles.bookGrid}>
                {filteredBooks.map((book) => (
                    <div style={styles.bookCard} key={book.title}>
                        <img src={book.imageUrl} alt={book.title} style={styles.bookImage} onClick={() => openDetailModal(book)} />
                        <button 
                            style={favorites.includes(book.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
                            onClick={(e) => { e.stopPropagation(); toggleFavorite(book.title); }}
                        >
                            {favorites.includes(book.title) ? "♥" : "♡"}
                        </button>
                        <div style={styles.cardOverlay} onClick={() => openDetailModal(book)}>
                            <h3 style={styles.cardTitle}>{book.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedBook && (
                <div style={styles.modalOverlay} onClick={closeDetailModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedBook.imageUrl})`}}></div>
                        <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
                        <div style={styles.modalHeader}>
                            <img src={selectedBook.imageUrl} alt={selectedBook.title} style={styles.modalPoster} />
                            <div style={styles.modalInfo}>
                                <div style={styles.modalTitleWrapper}>
                                    <h2 style={styles.modalTitle}>{selectedBook.title}</h2>
                                    <button 
                                        style={favorites.includes(selectedBook.title) ? styles.modalFavBtnActive : styles.modalFavBtn}
                                        onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedBook.title); }}
                                    >
                                        {favorites.includes(selectedBook.title) ? "♥" : "♡"}
                                    </button>
                                </div>
                                <p style={styles.modalMeta}>by {selectedBook.author} ({selectedBook.releaseYear})</p>
                                <p style={{...styles.modalMeta, fontStyle: 'italic'}}>{selectedBook.genres.join(" / ")}</p>
                                <p style={styles.modalDescription}>{selectedBook.description}</p>
                                
                                {/* These are the 3 SEPARATE buttons you want in the modal */}
                                <div style={styles.recommendButtonsContainer}>
                                    <button onClick={() => handleRecommend(selectedBook.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#D2691E'}}>Similar Books</button>
                                    <button onClick={() => handleRecommend(selectedBook.title, 'movies')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Movies</button>
                                    <button onClick={() => handleRecommend(selectedBook.title, 'songs')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Songs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
            {/* This modal is correct: it displays the ONE list from 'recommendations.items' */}
            {recommendationModalVisible && (
                <div style={styles.modalOverlay} onClick={closeRecommendationModal}>
                    <div style={{...styles.modalContent, maxWidth: '600px', padding: '30px'}}>
                        <button style={styles.closeButton} onClick={closeRecommendationModal}>×</button>
                        <h2 style={styles.recModalTitle}>Recommendations</h2>
                        {loading ? <p>Loading...</p> :
                         recommendations.items.length > 0 ? 
                         <ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.type, i))}</ul> :
                         <p>No recommendations found.</p>
                        }
                        {recommendations.explanation && (
                            <p style={styles.explanationText}><strong>AI Explanation:</strong> {recommendations.explanation}</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// (Your full 'styles' object goes here)
const styles = {
    container: { padding: "0 5% 40px 5%", backgroundColor: "#101010", color: "#f1f1f1", minHeight: "100vh", fontFamily: "'Poppins', sans-serif" },
    navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "15px 0", backgroundColor: "transparent" },
    logo: { fontSize: "1.8rem", fontWeight: "700", color: "#fff", letterSpacing: '1px' },
    navBtn: { backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: "10px 20px", borderRadius: "50px", cursor: "pointer", color: "#fff", fontWeight: "600", transition: "all 0.3s ease", marginLeft: '10px' },
    header: { textAlign: 'center', margin: '40px 0' },
    mainTitle: { fontSize: '3.5rem', fontWeight: '700', color: '#fff', marginBottom: '20px' },
    title: { fontSize: "2rem", margin: "40px 0 20px 0", color: "#03DAC6", textAlign: "center", fontWeight: "600" },
    controlsContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px', marginBottom: '15px' },
    searchBar: { padding: "15px 25px", borderRadius: "50px", border: "1px solid #333", fontSize: "1rem", color: "#fff", backgroundColor: "#1a1a1a", width: '400px', outline: 'none' },
    recommendBtnSearch: { backgroundColor: "#03DAC6", color: '#000', border: 'none', padding: '15px 25px', borderRadius: '50px', fontWeight: '700', cursor: 'pointer', fontSize: '1rem' },
    filterToggleBtn: { backgroundColor: "rgba(255, 255, 255, 0.1)", border: "1px solid rgba(255, 255, 255, 0.2)", padding: '15px 25px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', fontSize: '1rem', color: '#fff' },
    filterDropdown: { position: 'absolute', top: 'calc(100% + 10px)', right: 0, backgroundColor: '#1e1e1e', borderRadius: '15px', padding: '20px', zIndex: 100, width: '300px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '1px solid #333' },
    filterGroup: { marginBottom: '15px' },
    filterLabel: { display: 'block', marginBottom: '8px', fontWeight: '600', color: '#aaa', textAlign: 'left' },
    buttonGroup: { display: 'flex', gap: '10px' },
    buttonInactive: { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #444', background: '#333', color: '#fff', cursor: 'pointer' },
    buttonActive: { flex: 1, padding: '10px', borderRadius: '8px', border: '1px solid #03DAC6', background: '#03DAC6', color: '#000', fontWeight: '700', cursor: 'pointer' },
    selectDropdown: { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #444', background: '#333', color: '#fff' },
    resetBtn: { width: '100%', padding: '10px', marginTop: '10px', borderRadius: '8px', border: 'none', background: '#e74c3c', color: '#fff', fontWeight: '600', cursor: 'pointer' },
    suggestionsBox: { listStyle: 'none', padding: '5px', margin: 0, position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', marginTop: '5px', zIndex: 10, maxHeight: '200px', overflowY: 'auto', textAlign: 'left' },
    suggestionItem: { padding: '10px 15px', cursor: 'pointer', borderRadius: '5px' },
    
    recommendOptionsContainer: { display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '20px', marginBottom: '25px' },
    optionButton: { background: '#222', border: '1px solid #444', color: '#f1f1f1', padding: '12px 25px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600', fontSize: '0.9rem' },
    
    favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '100%', border: '1px solid #333' },
    favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },

    bookGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
    bookCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
    bookImage: { width: "100%", height: "330px", objectFit: "cover", display: 'block' },
    cardFavBtn: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
    cardFavBtnActive: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#e50914', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
    cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
    cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
    modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
    modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
    closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
    modalPoster: { width: '220px', height: '330px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
    modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1, minHeight: '330px' },
    modalTitleWrapper: { display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' },
    modalTitle: { margin: '0', fontSize: '2.5rem', fontWeight: '700' },
    modalMeta: { fontSize: '1rem', color: '#bbb', margin: '4px 0' },
    modalDescription: { fontSize: '1rem', color: '#ddd', lineHeight: 1.7, margin: '20px 0', flexGrow: 1 },
    modalFavBtn: { background: 'transparent', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '2.5rem' },
    modalFavBtnActive: { background: 'transparent', border: 'none', color: '#e50914', cursor: 'pointer', fontSize: '2.5rem' },
    recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: 'auto', paddingTop: '15px', borderTop: '1px solid #333' },
    recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    
    recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
    explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1pm solid #333' },
    recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
    recommendListItem: { color: '#fff', padding: '12px 0', borderBottom: '1px dotted #444', fontSize: '1rem' }
};

export default BookRecommendations;