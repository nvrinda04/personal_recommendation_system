// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // This is the full dataset with real poster images
// const moviesDataset = [
//     // HINDI
//     { title: "Kahaani", genres: ["Drama", "Mystery", "Thriller"], language: "Hindi", age_group: "Adults", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgWAiq0rK460S91aiXcyz6EpCMY9ds-59D0OBUaWnYdAku-Oe1_U-uih5AVSbM__DLCTVx" },
//     { title: "3 Idiots", genres: ["Comedy", "Drama"], language: "Hindi", age_group: "Kids", image: "https://m.media-amazon.com/images/I/81TeJPHjP-L._UF1000,1000_QL80_.jpg" },
//     { title: "Barfi!", genres: ["Comedy", "Drama", "Romance"], language: "Hindi", age_group: "Kids", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_P8v3u_TqWjTujo6ACYc1jsOIyS5cgAIU4UNlXXcN6Fl3Xb1-WCGqleyzn6Tq9FfmtJn5wA" },
//     //{ title: "My Name Is Khan", genres: ["Drama"], language: "Hindi", age_group: "Adults", image: "https://m.media-amazon.com/images/M/MV5BMTUyMTA0NTA4MF5BMl5BanBnXkFtZTcwMjk4Mzc3Mg@@._V1_FMjpg_UX1000_.jpg" },
//     { title: "OMG: Oh My God!", genres: ["Comedy", "Drama", "Fantasy"], language: "Hindi", age_group: "Kids", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8mXcfEqaWbRqkNK2RUcsb_ffWZwFR938iClW0YYFWDKjC8KpGiiDwH1B8lXL1Bgjl1JtrLQ" },
//     { title: "Paan Singh Tomar", genres: ["Biography", "Crime", "Drama"], language: "Hindi", age_group: "Adults", image: "https://cdn.shopclues.com/images/thumbnails/4501/320/320/paansinghtomar400x400imad7wsxhyfsyy2q1399984547.jpg" },
//     // New Kids Movie
//     { title: "Taare Zameen Par", genres: ["Drama", "Family"], language: "Hindi", age_group: "Kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIFyKAL4ldG54LGrepUXMraXASXkEmk4b79Uv_tPy35dtC1fmCTz3VBAfC9wR-ZugQjiB" },

//     // ENGLISH
//     { title: "The Dark Knight Rises", genres: ["Action", "Thriller"], language: "English", age_group: "Adults", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBA5a1V4L0WZ7vOB8DLuZmWwdouli_6N1BUE9Lj46_Sx2Pzd5Hy9P7GNbXBL0a_fPcTrD" },
//     { title: "Inception", genres: ["Action", "Adventure", "Sci-Fi"], language: "English", age_group: "Adults", image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" },
//     { title: "The Avengers", genres: ["Action", "Adventure", "Sci-Fi"], language: "English", age_group: "Kids", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i" },
//     //{ title: "Django Unchained", genres: ["Drama", "Western"], language: "English", age_group: "Adults", image: "://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_FMjpg_UX1000_.jpghttps://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR5Lfa4ibICyzzbnwtcbK3BYxq-3Hq8Jb88h-iCVrlAreileTgmiEecVYgYNh-vMyncuq_z1w" },
//     // { title: "The Hunger Games", genres: ["Adventure", "Sci-Fi", "Thriller"], language: "English", age_group: "Adults", image: "https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTM0NTg5Ng@@._V1_FMjpg_UX1000_.jpg" },
//     { title: "Inception", genres: ["Action", "Sci-Fi"],language: "English", age_group: "Adults", image: "https://m.media-amazon.com/images/M/MV5BMjExMjkwNTQ0Nl5BMl5BanBnXkFtZTcwNTY0OTk1Mw@@._V1_.jpg" },
//     { title: "Spirited Away", genres: ["Animation", "Fantasy"],language: "English", age_group: "Kids", image: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg" },
//     { title: "The Dark Knight", genres: ["Action", "Crime"],language: "English", age_group: "Adults", image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
//     { title: "Interstellar", genres: ["Sci-Fi", "Adventure"],language: "English", age_group: "Adults", image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg" },
//     { title: "The Matrix", genres: ["Sci-Fi", "Action"], language: "English", age_group: "Adults", image: "https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg" },
//     { title: "Parasite", genres: ["Thriller", "Drama"],language: "English", age_group: "Adults", image: "https://m.media-amazon.com/images/I/71c05lTE03L.AC_SY679.jpg" },
//     { title: "Coco", genres: ["Animation", "Family"],language: "English", age_group: "Kids", image: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg" },
//     { title: "Joker", genres: ["Drama", "Crime"],language: "English", age_group: "Adults", image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
    
//     // New Kids Movie
//     { title: "Finding Nemo", genres: ["Animation", "Adventure", "Comedy"], language: "English", age_group: "Kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L85MrBiZe4VhDdeGczFkEryBaUSm9OxNBW79a2ABLzpLCTdH5qasRt11inzqTTUXk2-G" },
//     { title: "How to Train Your Dragon", genres: ["Animation", "Action", "Adventure"], language: "English", age_group: "Kids", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-" },

//     // KANNADA
//     { title: "Lucia", genres: ["Drama", "Sci-Fi", "Thriller"], language: "Kannada", age_group: "Adults", image: "https://sund-images.sunnxt.com/7879/1600x1200_Lucia_7879_9f31c4ca-0cc7-4655-9403-6937e4ed0216.jpg" },
//     { title: "Ugramm", genres: ["Action", "Drama", "Thriller"], language: "Kannada", age_group: "Adults", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRn22y4LDeE11LxgHyzlfzLBaCVsrNdXXFywjNtUXESn1nVum8QsH1ZySuY7aarn123W69q" },
//     { title: "RangiTaranga", genres: ["Mystery", "Thriller"], language: "Kannada", age_group: "Adults", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLUQIg0JjZFQroPVKqB7hTZsgUFP_9uRwiUvV_BXvSVsw1ztFmiqJXacHF8CvNTiBE_DGW" },
//     // New Kids Movie
//     { title: "Charlie 777", genres: ["Adventure", "Comedy", "Drama"], language: "Kannada", age_group: "Kids", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbbnIXfOYAI0VyoBzmi_2FspmrtsoWvhzHsFK0ihwmnRljDXakC1UtOSr4eB8ryDHCZ3OP" },
//     { title: "Mungaru Male", genres: ["Musical", "Romance"], language: "Kannada", age_group: "Kids", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4mhNFioUKhVIqbvWqNLnTgZI1MhihyhaIRRGHP7Fyn_cceoMyxYEu_X2f89xU-hTwcHvQ" },

//     // MALAYALAM
//     { title: "Drishyam", genres: ["Crime", "Drama", "Mystery"], language: "Malayalam", age_group: "Adults", image: "https://upload.wikimedia.org/wikipedia/en/9/9e/DrishyamMovie.jpg" },
//     { title: "Bangalore Days", genres: ["Comedy", "Drama", "Romance"], language: "Malayalam", age_group: "Kids", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8imdwzY7rRMGXd7zfNBacpee0YmPB471cPOnWKfLnw12wJx6zzn-Al4j-A3OlfVS12nESqg" },
//     { title: "Premam", genres: ["Comedy", "Drama", "Romance"], language: "Malayalam", age_group: "Adults", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtDk2nDidlUBpsu6Ih6GiM2tNlKTb3bqqNXuAEBvJDKT8s--0gDnaantskLYi5WnITHFSb" },
//     { title: "Ustad Hotel", genres: ["Comedy", "Drama", "Family"], language: "Malayalam", age_group: "Kids", image: "https://m.media-amazon.com/images/M/MV5BNTU2MzI3ZTMtNjRjOC00ZDBmLTkxYzctZjZjOTk2YTQxNTJlXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg" },
//     { title: "Kumbalangi Nights", genres: ["Comedy", "Drama"], language: "Malayalam", age_group: "Adults", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlGAq9jCw7NdBX3qUHEUmtM8b6pf9u_Tcs00qiSlcZeNKl54YURdHFUGoMiJWheFTmBZAahQ" },

//     // TAMIL
//     { title: "Anbe Sivam", genres: ["Adventure", "Comedy", "Drama"], language: "Tamil", age_group: "Kids", image: "https://static.toiimg.com/photo/61304921.cms" },
//     //{ title: "Pudhupettai", genres: ["Action", "Crime", "Drama"], language: "Tamil", age_group: "Adults", image: "https://m.media-amazon.com/images/M/MV5BMTc2M2ZjYzMtM2M5OC00NmM4LWFkZDMtMDI0ZTYzMWM1ZmFkXkEyXkFqcGdeQXVyMTA5MDIyOTEw.V1_FMjpg_UX1000.jpg" },
//     { title: "Soorarai Pottru", genres: ["Drama"], language: "Tamil", age_group: "Adults", image: "https://i.pinimg.com/736x/c6/2d/be/c62dbee4a43451ed9f97223865189631.jpg" },
//     { title: "Jigarthanda", genres: ["Action", "Comedy", "Crime"], language: "Tamil", age_group: "Adults", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIGv17shpLu3TuGVGtiGWnRlw2zq1EcRroCv9K9NpjW2c2cV0OT5iRb5Gtzx8AMv6HGTsH" },
//     // New Kids Movie
//     { title: "Pasanga", genres: ["Comedy", "Drama", "Family"], language: "Tamil", age_group: "Kids", image: "https://a.ltrbxd.com/resized/film-poster/9/1/3/5/0/91350-pasanga-0-230-0-345-crop.jpg?v=13d301bbef" },

//     // TELUGU
//     { title: "Eega", genres: ["Action", "Comedy", "Fantasy"], language: "Telugu", age_group: "Kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURRBBbodfBiWn0Rwl8AS0D3GxNIgCQXOeWMpkmK6OPyCLU1inVzvJF4eBnRqBlKjBXqBzCA" },
//     { title: "Baahubali: The Beginning", genres: ["Action", "Drama"], language: "Telugu", age_group: "Kids", image: "https://m.media-amazon.com/images/S/pv-target-images/274431b8945f779acab499a1625c2a3c9ebe1054d112aed3e55cd89c7d2ce41c.jpg" },
//     { title: "Srimanthudu", genres: ["Action", "Drama"], language: "Telugu", age_group: "Adults", image: "https://m.media-amazon.com/images/M/MV5BM2MxYWYyNzAtZmNiNC00OWQxLWE0ZjgtYTcxZWM2NWY0NTQ2XkEyXkFqcGc@.V1.jpg" },
//     //{ title: "Rangasthalam", genres: ["Action", "Drama"], language: "Telugu", age_group: "Adults", image: "https://m.media-amazon.com/images/M/MV5BMjQ1MjA1MTEzMl5BMl5BanBnXkFtZTgwMzkxOTAyNTM@.V1_FMjpg_UX1000.jpg" },
//     { title: "Mahanati", genres: ["Biography", "Drama"], language: "Telugu", age_group: "Kids", image: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg" },
//     { title: "Jersey", genres: ["Drama", "Sport"], language: "Telugu", age_group: "Kids", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWilyTtxsWZ3cnRjCHGckrnrPAOQCbYngqJeOaSCRIRFrtFe6iwBR_j85MFKU-MtV-nPbncA" },
// ];
// // Automatically extract unique genres and languages from the dataset
// const uniqueGenres = Array.from(new Set(moviesDataset.flatMap(movie => movie.genres)));
// const uniqueLanguages = Array.from(new Set(moviesDataset.map(movie => movie.language)));


// function MovieRecommendations() {
//     // NEW: Create a state to hold the shuffled list of movies
//     const [shuffledMovies, setShuffledMovies] = useState([]);
    
//     const [favorites, setFavorites] = useState([]);
//     const [ratings, setRatings] = useState({});
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loadingMovies, setLoadingMovies] = useState({});
//     const [showFavorites, setShowFavorites] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [customMovie, setCustomMovie] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [languageFilter, setLanguageFilter] = useState("");
//     const [showModal, setShowModal] = useState(false);
//     const navigate = useNavigate();

//     // NEW: useEffect hook to shuffle the movies when the component first loads
//     useEffect(() => {
//         // Fisher-Yates shuffle algorithm to randomize the movie list
//         const shuffleArray = (array) => {
//             let currentIndex = array.length, randomIndex;
//             const newArray = [...array]; // Create a copy to avoid mutating the original
//             while (currentIndex !== 0) {
//                 randomIndex = Math.floor(Math.random() * currentIndex);
//                 currentIndex--;
//                 [newArray[currentIndex], newArray[randomIndex]] = [
//                     newArray[randomIndex], newArray[currentIndex]];
//             }
//             return newArray;
//         };

//         setShuffledMovies(shuffleArray(moviesDataset));
//     }, []); // Empty dependency array ensures this runs only once on mount

//     useEffect(() => {
//         fetch("http://localhost:5001/favorites")
//             .then((res) => res.json())
//             .then((data) => setFavorites(data.favorites || []));
//     }, []);

//     const toggleFavorite = async (movieTitle) => {
//         if (favorites.includes(movieTitle)) {
//             const res = await fetch("http://localhost:5001/favorites/remove", {
//                 method: "DELETE",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ movie: movieTitle }),
//             });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         } else {
//             const res = await fetch("http://localhost:5001/favorites/add", {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ movie: movieTitle }),
//             });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         }
//     };

//     const handleRating = async (movieTitle, rating) => {
//         setRatings((prev) => ({ ...prev, [movieTitle]: rating }));
//         await fetch("http://localhost:5001/rate", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ movie: movieTitle, rating }),
//         });
//     };

//     const handleRecommend = async (movieTitle, type = 'similar') => {
//         if (!movieTitle) return;

//         let endpoint;
//         if (type === 'similar') {
//             endpoint = "http://localhost:5001/recommend";
//         } else if (type === 'books') {
//             endpoint = "http://localhost:5001/crossrecommend/books";
//         } else if (type === 'songs') {
//             endpoint = "http://localhost:5001/crossrecommend/songs";
//         } else {
//             return;
//         }

//         setLoadingMovies((prev) => ({ ...prev, [movieTitle]: true }));
//         setShowModal(false);

//         try {
//             const response = await axios.post(endpoint, { movie: movieTitle });
//             const data = response.data;
            
//             setRecommendations({
//                 type: type,
//                 items: data.recommendations || [],
//                 // FIX: Use backticks for template literal
//                 explanation: data.explanation || `Recommendations for ${type} based on ${movieTitle}.`,
//             });
            
//             setShowModal(true);
            
//         } catch (error) {
//             // FIX: Use backticks for template literal in console.error
//             console.error(`Recommendation error for ${type}:`, error);
//             setRecommendations({
//                 type: type,
//                 items: [],
//                 // FIX: Use backticks for template literal
//                 explanation: `Failed to fetch ${type} recommendations. Please check the server connection.`,
//             });
//             setShowModal(true);
//         } finally {
//             setLoadingMovies((prev) => ({ ...prev, [movieTitle]: false }));
//         }
//     };

//     const closeModal = () => {
//         setShowModal(false);
//         setRecommendations({ type: null, items: [], explanation: "" });
//     };

//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     // NEW: The filter now operates on the shuffledMovies state
//     const filteredMovies = shuffledMovies.filter(
//         (m) =>
//             (!ageFilter || m.age_group === ageFilter) &&
//             (!genreFilter || m.genres.includes(genreFilter)) &&
//             (!languageFilter || m.language === languageFilter) &&
//             (m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 m.genres.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())))
//     );

//     const renderRecommendationItem = (item, type, i) => {
//         if (type === 'similar' || type === 'books') {
//             const title = typeof item === 'string' ? item : item.title || 'Untitled';
//             const authors = typeof item === 'object' && item.authors ? ` (Author: ${item.authors})` : '';
//             const rating = typeof item === 'object' && item.average_rating ? ` (Rating: ${item.average_rating})` : '';
//             return <li key={i}>{title}{authors}{rating}</li>;
//         }

//         if (type === 'songs') {
//             const trackName = item.title || item.track_name || 'Unknown Track';
//             const artistName = item.artist || item.artist_name || 'Unknown Artist';
//             const genre = item.genre || item.track_genre || 'Unknown Genre';
//             return (
//                 <li key={i} style={{ marginBottom: '5px' }}>
//                     {trackName} by {artistName}
//                     <span style={{ color: '#aaa', marginLeft: '10px', fontSize: '0.9em' }}>
//                         [{genre}]
//                     </span>
//                 </li>
//             );
//         }
//         return <li key={i}>{JSON.stringify(item)}</li>;
//     };

//     return (
//         <div style={styles.container}>
//             {/* NAVBAR */}
//             <nav style={styles.navbar}>
//                 <div style={styles.logo}>🎬 MovieApp</div>
//                 <div style={styles.navLinks}>
//                     <button style={styles.navBtn} onClick={goToDashboard}>Dashboard</button>
//                     <button style={styles.navBtn} onClick={handleLogout}>Logout</button>
//                 </div>
//             </nav>

//             {/* FILTERS */}
//             <div style={{ textAlign: "center", marginBottom: "15px", marginTop: "20px" }}>
//                 <button
//                     onClick={() => setAgeFilter("Kids")}
//                     style={{ ...styles.navBtn, backgroundColor: ageFilter === "Kids" ? "#1abc9c" : "#e50914", marginRight: "10px" }}
//                 >
//                     Kids
//                 </button>
//                 <button
//                     onClick={() => setAgeFilter("Adults")}
//                     style={{ ...styles.navBtn, backgroundColor: ageFilter === "Adults" ? "#1abc9c" : "#e50914" }}
//                 >
//                     Adults
//                 </button>
//                 <button
//                     onClick={() => setAgeFilter("")}
//                     style={{ ...styles.navBtn, backgroundColor: ageFilter === "" ? "#1abc9c" : "#e50914", marginLeft: "10px" }}
//                 >
//                     All Ages
//                 </button>
//             </div>

//             <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: "20px" }}>
//                 <select
//                     value={genreFilter}
//                     onChange={(e) => setGenreFilter(e.target.value)}
//                     style={{ ...styles.searchBar, width: "200px", color: "#000" }}
//                 >
//                     <option value="">All Genres</option>
//                     {uniqueGenres.map((genre, idx) => (
//                         <option key={idx} value={genre}>{genre}</option>
//                     ))}
//                 </select>

//                 <select
//                     value={languageFilter}
//                     onChange={(e) => setLanguageFilter(e.target.value)}
//                     style={{ ...styles.searchBar, width: "200px", color: "#000" }}
//                 >
//                     <option value="">All Languages</option>
//                     {uniqueLanguages.map((lang, idx) => (
//                         <option key={idx} value={lang}>{lang}</option>
//                     ))}
//                 </select>
//             </div>

//             {/* CUSTOM MOVIE INPUT */}
//             <div style={{ textAlign: "center", marginBottom: "20px" }}>
//                 <input
//                     type="text"
//                     placeholder="Type any movie title..."
//                     value={customMovie}
//                     onChange={(e) => setCustomMovie(e.target.value)}
//                     style={{ ...styles.searchBar, width: "300px" }}
//                 />
//                 <button
//                     onClick={() => handleRecommend(customMovie, 'similar')}
//                     disabled={!customMovie.trim() || loadingMovies[customMovie]}
//                     style={{ ...styles.recommendBtn, marginLeft: "10px", backgroundColor: '#e50914' }}
//                 >
//                     {loadingMovies[customMovie] ? "Loading..." : "🔍 Recommend Similar"}
//                 </button>
//                 <button
//                     onClick={() => handleRecommend(customMovie, 'books')}
//                     disabled={!customMovie.trim() || loadingMovies[customMovie]}
//                     style={{ ...styles.recommendBtn, marginLeft: "10px", backgroundColor: "#007bff" }}
//                 >
//                     {loadingMovies[customMovie] ? "Loading..." : "📚 Books"}
//                 </button>
//                 <button
//                     onClick={() => handleRecommend(customMovie, 'songs')}
//                     disabled={!customMovie.trim() || loadingMovies[customMovie]}
//                     style={{ ...styles.recommendBtn, marginLeft: "10px", backgroundColor: "#1abc9c" }}
//                 >
//                     {loadingMovies[customMovie] ? "Loading..." : "🎵 Songs"}
//                 </button>
//             </div>

//             {/* FAVORITES TOGGLE */}
//             <div style={{ textAlign: "center", margin: "15px 0" }}>
//                 <button
//                     style={{ ...styles.navBtn, backgroundColor: showFavorites ? "#1abc9c" : "#e50914" }}
//                     onClick={() => setShowFavorites(!showFavorites)}
//                 >
//                     {showFavorites ? "Hide Favorites" : "Show Favorites"}
//                 </button>
//             </div>

//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h3 style={{ color: "#1abc9c" }}>⭐ Your Favorites</h3>
//                     {favorites.length > 0 ? (
//     <ul style={styles.favList}>
//         {Array.from(new Set(favorites.map(f => f.trim()))).map((fav, i) => (
//             <li key={i}>{fav}</li>
//         ))}
//     </ul>
// ) : (
//     <p style={{ color: "#aaa" }}>No favorites added yet.</p>
// )}

//                 </div>
//             )}

//             <h2 style={styles.title}>Movie Recommendation System</h2>

//             {/* MOVIE GRID */}
//             <div style={styles.movieGrid}>
//                 {filteredMovies.map((movie, idx) => (
//                     <div style={styles.movieCard} key={idx}>
//                         <img src={movie.image} alt={movie.title} style={styles.movieImage} />
//                         <h3 style={styles.movieTitle}>{movie.title}</h3>
//                         <p style={styles.movieGenres}>{movie.genres.join(", ")}</p>

//                         <button
//                             style={{ ...styles.favBtn, backgroundColor: favorites.includes(movie.title) ? "#e50914" : "#007bff" }}
//                             onClick={() => toggleFavorite(movie.title)}
//                         >
//                             {favorites.includes(movie.title) ? "Remove Favorite" : "Add to Favorites"}
//                         </button>

//                         <div style={styles.rating}>
//                             {[1, 2, 3, 4, 5].map((star) => (
//                                 <span key={star} style={{...styles.star, color: ratings[movie.title] >= star ? "gold" : "#555"}} onClick={() => handleRating(movie.title, star)}>
//                                     ★
//                                 </span>
//                             ))}
//                         </div>

//                         <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
//                             <button
//                                 onClick={() => handleRecommend(movie.title, 'similar')}
//                                 disabled={loadingMovies[movie.title]}
//                                 style={{ ...styles.recommendBtn, width: "100%", backgroundColor: '#e50914' }}
//                             >
//                                 {loadingMovies[movie.title] ? "Loading..." : "🔍 Similar Movies"}
//                             </button>
//                             <div style={{ display: 'flex', justifyContent: 'space-between', gap: '5px' }}>
//                                 <button onClick={() => handleRecommend(movie.title, 'books')} disabled={loadingMovies[movie.title]} style={{ ...styles.recommendBtn, flex: 1, backgroundColor: '#007bff', fontSize: '0.85rem' }}>
//                                     📚 Books
//                                 </button>
//                                 <button onClick={() => handleRecommend(movie.title, 'songs')} disabled={loadingMovies[movie.title]} style={{ ...styles.recommendBtn, flex: 1, backgroundColor: '#1abc9c', fontSize: '0.85rem' }}>
//                                     🎵 Songs
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {/* RECOMMENDATIONS MODAL */}
//             {showModal && (
//                 <div style={styles.modalOverlay} onClick={closeModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <button style={styles.closeButton} onClick={closeModal}>×</button>

//                         <h3 style={styles.recommendTitle}>
//                             {recommendations.type === 'similar' ? '📽 Similar Movies' :
//                                 recommendations.type === 'books' ? '📚 Recommended Books' :
//                                     recommendations.type === 'songs' ? '🎵 Recommended Songs' :
//                                         'Recommendations'}
//                         </h3>

//                         {recommendations.items.length > 0 ? (
//                             <ul style={styles.recommendList}>
//                                 {recommendations.items.map((rec, i) => (
//                                     renderRecommendationItem(rec, recommendations.type, i)
//                                 ))}
//                             </ul>
//                         ) : (
//                             <p style={{ color: '#aaa', textAlign: 'center', margin: '20px 0' }}>No recommendations found.</p>
//                         )}

//                         <div style={styles.explanationBox}>
//                             <p style={{ color: "#9b59b6", fontStyle: 'italic', fontWeight: 'bold' }}>
//                                 AI Explanation:
//                             </p>
//                             <p>{recommendations.explanation}</p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// // STYLES OBJECT (No changes here)
// const styles = {
//     container: { padding: "0 20px 40px 20px", backgroundColor: "#141414", color: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
//     navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#1c1c1c", borderBottom: "1px solid #333", position: "sticky", top: 0, zIndex: 1000 },
//     logo: { fontSize: "1.5rem", fontWeight: "bold", color: "#e50914" },
//     navLinks: { display: "flex", gap: "10px" },
//     navBtn: { backgroundColor: "#e50914", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer", color: "#fff", fontWeight: "bold", transition: "background-color 0.2s" },
//     searchBar: { padding: "10px", borderRadius: "8px", border: "1px solid #444", fontSize: "1rem", color: "#fff", backgroundColor: "#333" },
//     title: { fontSize: "2rem", margin: "20px 0", color: "#e50914", textAlign: "center" },
//     movieGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "20px" },
//     movieCard: { background: "#1c1c1c", borderRadius: "15px", padding: "15px", boxShadow: "0 4px 6px rgba(0,0,0,0.5)", display: 'flex', flexDirection: 'column' },
//     movieImage: { width: "100%", height: "320px", objectFit: "cover", borderRadius: "10px", marginBottom: "10px" },
//     movieTitle: { margin: "10px 0 5px 0", fontSize: "1.2rem", flexGrow: 1 },
//     movieGenres: { fontSize: "0.9rem", color: "#ccc", marginBottom: "10px" },
//     favBtn: { marginTop: "10px", padding: "8px 12px", border: "none", borderRadius: "8px", cursor: "pointer", color: "white", fontWeight: "bold" },
//     rating: { marginTop: "10px", fontSize: "1.5rem", cursor: "pointer" },
//     star: { transition: "color 0.2s", margin: "0 2px" },
//     recommendBtn: { padding: "10px 18px", color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", cursor: "pointer", transition: "opacity 0.2s" },
//     favoritesSection: { backgroundColor: "#1c1c1c", padding: "15px", borderRadius: "10px", margin: "20px auto", maxWidth: "600px" },
//     favList: { listStyle: "none", padding: 0 },
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.7)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 },
//     modalContent: { backgroundColor: '#1c1c1c', padding: '30px', borderRadius: '15px', width: '90%', maxWidth: '600px', maxHeight: '80vh', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)', position: 'relative', border: '2px solid #e50914', display: 'flex', flexDirection: 'column' },
//     closeButton: { position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', fontWeight: 'bold', padding: '5px 10px' },
//     recommendTitle: { color: "#1abc9c", marginBottom: "10px", textAlign: 'center' },
//     recommendList: { paddingLeft: '20px', flexGrow: 1, overflowY: 'auto', margin: '10px 0' },
//     explanationBox: { backgroundColor: '#333', padding: '15px', borderRadius: '10px', marginTop: '20px', maxHeight: '150px', overflowY: 'auto' }
// };

// export default MovieRecommendations;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // NEW: Updated dataset with richer movie details
// const moviesDataset = [
//     // HINDI
//     {
//         title: "Kahaani",
//         genres: ["Drama", "Mystery", "Thriller"],
//         language: "Hindi",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgWAiq0rK460S91aiXcyz6EpCMY9ds-59D0OBUaWnYdAku-Oe1_U-uih5AVSbM__DLCTVx",
//         description: "A pregnant woman's relentless search for her missing husband in Kolkata unearths a web of secrets and lies.",
//         releaseYear: 2012,
//         director: "Sujoy Ghosh",
//         cast: ["Vidya Balan", "Parambrata Chatterjee", "Nawazuddin Siddiqui"]
//     },
//     {
//         title: "Barfi!",
//         genres: ["Comedy", "Drama", "Romance"],
//         language: "Hindi",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_P8v3u_TqWjTujo6ACYc1jsOIyS5cgAIU4UNlXXcN6Fl3Xb1-WCGqleyzn6Tq9FfmtJn5wA",
//         description: "A charming, deaf-mute man, Barfi, falls in love with two women, Shruti and Jhilmil, navigating life's challenges with a smile.",
//         releaseYear: 2012,
//         director: "Anurag Basu",
//         cast: ["Ranbir Kapoor", "Priyanka Chopra", "Ileana D'Cruz"]
//     },
//     {
//         title: "OMG: Oh My God!",
//         genres: ["Comedy", "Drama", "Fantasy"],
//         language: "Hindi",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8mXcfEqaWbRqkNK2RUcsb_ffWZwFR938iClW0YYFWDKjC8KpGiiDwH1B8lXL1Bgjl1JtrLQ",
//         description: "An atheist shopkeeper sues God after an earthquake destroys his shop, leading to an extraordinary legal battle.",
//         releaseYear: 2012,
//         director: "Umesh Shukla",
//         cast: ["Paresh Rawal", "Akshay Kumar", "Mithun Chakraborty"]
//     },
//     {
//         title: "Paan Singh Tomar",
//         genres: ["Biography", "Crime", "Drama"],
//         language: "Hindi",
//         age_group: "Adults",
//         imageUrl: "https://cdn.shopclues.com/images/thumbnails/4501/320/320/paansinghtomar400x400imad7wsxhyfsyy2q1399984547.jpg",
//         description: "The true story of an Indian athlete who becomes a dacoit (bandit) after facing injustice.",
//         releaseYear: 2012,
//         director: "Tigmanshu Dhulia",
//         cast: ["Irrfan Khan", "Mahie Gill", "Vipin Sharma"]
//     },
//     {
//         title: "Taare Zameen Par",
//         genres: ["Drama", "Family"],
//         language: "Hindi",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIFyKAL4ldG54LGrepUXMraXASXkEmk4b79Uv_tPy35dtC1fmCTz3VBAfC9wR-ZugQjiB",
//         description: "An 8-year-old boy is thought to be a lazy troublemaker, until the new art teacher discovers he has dyslexia and helps him to discover his true potential.",
//         releaseYear: 2007,
//         director: "Aamir Khan",
//         cast: ["Darsheel Safary", "Aamir Khan", "Tisca Chopra"]
//     },

//     // ENGLISH
//     {
//         title: "The Dark Knight Rises",
//         genres: ["Action", "Thriller"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBA5a1V4L0WZ7vOB8DLuZmWwdouli_6N1BUE9Lj46_Sx2Pzd5Hy9P7GNbXBL0a_fPcTrD",
//         description: "Eight years after the Joker's reign of anarchy, Batman is forced to return from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
//         releaseYear: 2012,
//         director: "Christopher Nolan",
//         cast: ["Christian Bale", "Tom Hardy", "Anne Hathaway"]
//     },
//     {
//         title: "Inception",
//         genres: ["Action", "Adventure", "Sci-Fi"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
//         description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
//         releaseYear: 2010,
//         director: "Christopher Nolan",
//         cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
//     },
//     {
//         title: "The Avengers",
//         genres: ["Action", "Adventure", "Sci-Fi"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i",
//         description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
//         releaseYear: 2012,
//         director: "Joss Whedon",
//         cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
//     },
//     {
//         title: "Spirited Away",
//         genres: ["Animation", "Fantasy"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
//         description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
//         releaseYear: 2001,
//         director: "Hayao Miyazaki",
//         cast: ["Daveigh Chase", "Suzanne Pleshette", "Jason Marsden"]
//     },
//     {
//         title: "The Dark Knight",
//         genres: ["Action", "Crime"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//         description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//         releaseYear: 2008,
//         director: "Christopher Nolan",
//         cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
//     },
//     {
//         title: "Interstellar",
//         genres: ["Sci-Fi", "Adventure"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//         description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         releaseYear: 2014,
//         director: "Christopher Nolan",
//         cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
//     },
//     {
//         title: "The Matrix",
//         genres: ["Sci-Fi", "Action"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.AC.jpg",
//         description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//         releaseYear: 1999,
//         director: "The Wachowskis",
//         cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
//     },
//     {
//         title: "Parasite",
//         genres: ["Thriller", "Drama"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/I/71c05lTE03L.AC_SY679.jpg",
//         description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim family.",
//         releaseYear: 2019,
//         director: "Bong Joon Ho",
//         cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
//     },
//     {
//         title: "Coco",
//         genres: ["Animation", "Family"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
//         description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
//         releaseYear: 2017,
//         director: "Lee Unkrich",
//         cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]
//     },
//     {
//         title: "Joker",
//         genres: ["Drama", "Crime"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//         description: "A mentally troubled comedian embarks on a downward spiral that leads him to embrace his alter-ego: the Joker.",
//         releaseYear: 2019,
//         director: "Todd Phillips",
//         cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
//     },
//     {
//         title: "Finding Nemo",
//         genres: ["Animation", "Adventure", "Comedy"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L85MrBiZe4VhDdeGczFkEryBaUSm9OxNBW79a2ABLzpLCTdH5qasRt11inzqTTUXk2-G",
//         description: "After his son Nemo is captured from the Great Barrier Reef, a clownfish named Marlin, along with a forgetful fish named Dory, embarks on a journey to find him.",
//         releaseYear: 2003,
//         director: "Andrew Stanton",
//         cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"]
//     },
//     {
//         title: "How to Train Your Dragon",
//         genres: ["Animation", "Action", "Adventure"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-",
//         description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
//         releaseYear: 2010,
//         director: "Dean DeBlois, Chris Sanders",
//         cast: ["Jay Baruchel", "Gerard Butler", "Craig Ferguson"]
//     },

//     // KANNADA
//     {
//         title: "Lucia",
//         genres: ["Drama", "Sci-Fi", "Thriller"],
//         language: "Kannada",
//         age_group: "Adults",
//         imageUrl: "https://sund-images.sunnxt.com/7879/1600x1200_Lucia_7879_9f31c4ca-0cc7-4655-9403-6937e4ed0216.jpg",
//         description: "A projectionist suffering from insomnia finds a strange pill that grants him vivid, lucid dreams, blurring the lines between reality and his dream world.",
//         releaseYear: 2013,
//         director: "Pawan Kumar",
//         cast: ["Sathish Ninasam", "Sruti Hariharan", "Achyuth Kumar"]
//     },
//     {
//         title: "Ugramm",
//         genres: ["Action", "Drama", "Thriller"],
//         language: "Kannada",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRn22y4LDeE11LxgHyzlfzLBaCVsrNdXXFywjNtUXESn1nVum8QsH1ZySuY7aarn123W69q",
//         description: "A man with a mysterious past gets involved in a gang war to protect a woman, uncovering a deeper conspiracy.",
//         releaseYear: 2014,
//         director: "Prashanth Neel",
//         cast: ["Srimurali", "Haripriya", "Thilak Shekar"]
//     },
//     {
//         title: "RangiTaranga",
//         genres: ["Mystery", "Thriller"],
//         language: "Kannada",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLUQIg0JjZFQroPVKqB7hTZsgUFP_9uRwiUvV_BXvSVsw1ztFmiqJXacHF8CvNTiBE_DGW",
//         description: "A writer visits his ancestral village with his wife, where a series of mysterious events and an ancient legend unfold.",
//         releaseYear: 2015,
//         director: "Anup Bhandari",
//         cast: ["Nirup Bhandari", "Radhika Chetan", "Avantika Shetty"]
//     },
//     {
//         title: "Charlie 777",
//         genres: ["Adventure", "Comedy", "Drama"],
//         language: "Kannada",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbbnIXfOYAI0VyoBzmi_2FspmrtsoWvhzHsFK0ihwmnRljDXakC1UtOSr4eB8ryDHCZ3OP",
//         description: "A lone, grumpy man's life changes forever when a stray labrador retriever named Charlie enters his life.",
//         releaseYear: 2022,
//         director: "Kiranraj K.",
//         cast: ["Rakshit Shetty", "Charlie (Dog)", "Sangeetha Sringeri"]
//     },
//     {
//         title: "Mungaru Male",
//         genres: ["Musical", "Romance"],
//         language: "Kannada",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4mhNFioUKhVIqbvWqNLnTgZI1MhihyhaIRRGHP7Fyn_cceoMyxYEu_X2f89xU-hTwcHvQ",
//         description: "A young man falls in love with a woman he meets on a rainy day, but fate has other plans as he discovers she is engaged to someone else.",
//         releaseYear: 2006,
//         director: "Yogaraj Bhat",
//         cast: ["Ganesh", "Pooja Gandhi", "Anant Nag"]
//     },

//     // MALAYALAM
//     {
//         title: "Drishyam",
//         genres: ["Crime", "Drama", "Mystery"],
//         language: "Malayalam",
//         age_group: "Adults",
//         imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/DrishyamMovie.jpg",
//         description: "A man takes desperate measures to save his family from the law after they commit an accidental crime.",
//         releaseYear: 2013,
//         director: "Jeethu Joseph",
//         cast: ["Mohanlal", "Meena", "Ansiba Hassan"]
//     },
//     {
//         title: "Bangalore Days",
//         genres: ["Comedy", "Drama", "Romance"],
//         language: "Malayalam",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8imdwzY7rRMGXd7zfNBacpee0YmPB471cPOnWKfLnw12wJx6zzn-Al4j-A3OlfVS12nESqg",
//         description: "Three cousins move to Bangalore and discover themselves, their relationships, and the true meaning of friendship and love.",
//         releaseYear: 2014,
//         director: "Anjali Menon",
//         cast: ["Dulquer Salmaan", "Nivin Pauly", "Nazriya Nazim"]
//     },
//     {
//         title: "Premam",
//         genres: ["Comedy", "Drama", "Romance"],
//         language: "Malayalam",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtDk2nDidlUBpsu6Ih6GiM2tNlKTb3bqqNXuAEBvJDKT8s--0gDnaantskLYi5WnITHFSb",
//         description: "The film follows George and his friends from their teenage years to adulthood as they navigate through love and heartbreak.",
//         releaseYear: 2015,
//         director: "Alphonse Puthren",
//         cast: ["Nivin Pauly", "Sai Pallavi", "Anupama Parameswaran"]
//     },
//     {
//         title: "Ustad Hotel",
//         genres: ["Comedy", "Drama", "Family"],
//         language: "Malayalam",
//         age_group: "Kids",
//         imageUrl: "https://m.media-amazon.com/images/M/MV5BNTU2MzI3ZTMtNjRjOC00ZDBmLTkxYzctZjZjOTk2YTQxNTJlXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
//         description: "A young, ambitious chef, aspiring to work in a top restaurant abroad, is forced to run his grandfather's traditional restaurant in Kozhikode.",
//         releaseYear: 2012,
//         director: "Anwar Rasheed",
//         cast: ["Dulquer Salmaan", "Thilakan", "Nithya Menen"]
//     },
//     {
//         title: "Kumbalangi Nights",
//         genres: ["Comedy", "Drama"],
//         language: "Malayalam",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlGAq9jCw7NdBX3qUHEUmtM8b6pf9u_Tcs00qiSlcZeNKl54YURdHFUGoMiJWheFTmBZAahQ",
//         description: "Four brothers who share a love-hate relationship with each other face various challenges in their lives, leading to emotional growth and understanding.",
//         releaseYear: 2019,
//         director: "Madhu C. Narayanan",
//         cast: ["Soubin Shahir", "Shane Nigam", "Fahadh Faasil"]
//     },

//     // TAMIL
//     {
//         title: "Anbe Sivam",
//         genres: ["Adventure", "Comedy", "Drama"],
//         language: "Tamil",
//         age_group: "Kids",
//         imageUrl: "https://static.toiimg.com/photo/61304921.cms",
//         description: "Two men with contrasting ideologies are forced to travel together, leading to a journey of self-discovery and changing perspectives.",
//         releaseYear: 2003,
//         director: "Sundar C.",
//         cast: ["Kamal Haasan", "Madhavan", "Kiran Rathod"]
//     },
//     {
//         title: "Soorarai Pottru",
//         genres: ["Drama"],
//         language: "Tamil",
//         age_group: "Adults",
//         imageUrl: "https://i.pinimg.com/736x/c6/2d/be/c62dbee4a43451ed9f97223865189631.jpg",
//         description: "Inspired by the life of G. R. Gopinath, the founder of Air Deccan, this film tells the story of a common man's dream to start a low-cost airline.",
//         releaseYear: 2020,
//         director: "Sudha Kongara",
//         cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal"]
//     },
//     {
//         title: "Jigarthanda",
//         genres: ["Action", "Comedy", "Crime"],
//         language: "Tamil",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIGv17shpLu3TuGVGtiGWnRlw2zq1EcRroCv9K9NpjW2c2cV0OT5iRb5Gtzx8AMv6HGTsH",
//         description: "A budding filmmaker tries to make a gangster film and gets entangled with a real gangster, whose life he intends to base his film on.",
//         releaseYear: 2014,
//         director: "Karthik Subbaraj",
//         cast: ["Siddharth", "Bobby Simha", "Lakshmi Menon"]
//     },
//     {
//         title: "Pasanga",
//         genres: ["Comedy", "Drama", "Family"],
//         language: "Tamil",
//         age_group: "Kids",
//         imageUrl: "https://a.ltrbxd.com/resized/film-poster/9/1/3/5/0/91350-pasanga-0-230-0-345-crop.jpg?v=13d301bbef",
//         description: "A heartwarming tale of school children, their innocent rivalries, friendships, and the complexities of their world.",
//         releaseYear: 2009,
//         director: "Pandiraj",
//         cast: ["Kishore", "Sree Raam", "Vimal"]
//     },

//     // TELUGU
//     {
//         title: "Mahanati",
//         genres: ["Action", "Comedy", "Fantasy"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURRBBbodfBiWn0Rwl8AS0D3GxNIgCQXOeWMpkmK6OPyCLU1inVzvJF4eBnRqBlKjBXqBzCA",
//         description: "A murdered man is reincarnated as a housefly and seeks revenge on the man who killed him and abducted the woman he loves.",
//         releaseYear: 2012,
//         director: "S. S. Rajamouli",
//         cast: ["Nani", "Samantha Ruth Prabhu", "Sudeep"]
//     },
//     {
//         title: "Baahubali: The Beginning",
//         genres: ["Action", "Drama"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/274431b8945f779acab499a1625c2a3c9ebe1054d112aed3e55cd89c7d2ce41c.jpg",
//         description: "In ancient India, an adventurous and powerful man discovers his true heritage and sets out to reclaim his rightful place as the king of Mahishmati.",
//         releaseYear: 2015,
//         director: "S. S. Rajamouli",
//         cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
//     },
//     {
//         title: "Srimanthudu",
//         genres: ["Action", "Drama"],
//         language: "Telugu",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MxYWYyNzAtZmNiNC00OWQxLWE0ZjgtYTcxZWM2NWY0NTQ2XkEyXkFqcGc@.V1.jpg",
//         description: "A rich man adopts a village and decides to improve its infrastructure, facing opposition from a corrupt politician.",
//         releaseYear: 2015,
//         director: "Koratala Siva",
//         cast: ["Mahesh Babu", "Shruti Haasan", "Jagapathi Babu"]
//     },
//     {
//         title: "Rangasthalam",
//         genres: ["Biography", "Drama"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg",
//         description: "The biographical film traces the life and career of legendary South Indian actress Savitri, from her humble beginnings to her iconic stardom.",
//         releaseYear: 2018,
//         director: "Nag Ashwin",
//         cast: ["Keerthy Suresh", "Dulquer Salmaan", "Samantha Ruth Prabhu"]
//     },
//     {
//         title: "Jersey",
//         genres: ["Drama", "Sport"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWilyTtxsWZ3cnRjCHGckrnrPAOQCbYngqJeOaSCRIRFrtFe6iwBR_j85MFKU-MtV-nPbncA",
//         description: "A talented but failed cricketer decides to revive his career in his late 30s to fulfill his son's wish for a jersey.",
//         releaseYear: 2019,
//         director: "Gowtam Tinnanuri",
//         cast: ["Nani", "Shraddha Srinath", "Ronit Kamra"]
//     },
// ];
// const uniqueGenres = Array.from(new Set(moviesDataset.flatMap(movie => movie.genres)));
// const uniqueLanguages = Array.from(new Set(moviesDataset.map(movie => movie.language)));

// function MovieRecommendations() {
//     const [shuffledMovies, setShuffledMovies] = useState([]);
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loadingMovies, setLoadingMovies] = useState({});
//     const [showFavorites, setShowFavorites] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [customMovie, setCustomMovie] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [languageFilter, setLanguageFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
    
//     // NEW: State for the clicked movie detail modal
//     const [selectedMovie, setSelectedMovie] = useState(null);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             let currentIndex = array.length, randomIndex;
//             const newArray = [...array];
//             while (currentIndex !== 0) {
//                 randomIndex = Math.floor(Math.random() * currentIndex);
//                 currentIndex--;
//                 [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
//             }
//             return newArray;
//         };
//         setShuffledMovies(shuffleArray(moviesDataset));
//     }, []);

//     useEffect(() => {
//         fetch("http://localhost:5001/favorites")
//             .then((res) => res.json())
//             .then((data) => setFavorites(data.favorites || []));
//     }, []);

//     const toggleFavorite = async (movieTitle) => {
//         // This stops the modal from opening when the favorite button is clicked
//         // event.stopPropagation(); 
//         if (favorites.includes(movieTitle)) {
//             const res = await fetch("http://localhost:5001/favorites/remove", {
//                 method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }),
//             });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         } else {
//             const res = await fetch("http://localhost:5001/favorites/add", {
//                 method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }),
//             });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         }
//     };

//     const handleRecommend = async (movieTitle, type = 'similar') => {
//         if (!movieTitle) return;
//         let endpoint = type === 'similar' ? "http://localhost:5001/recommend"
//                    : type === 'books'   ? "http://localhost:5001/crossrecommend/books"
//                    : type === 'songs'   ? "http://localhost:5001/crossrecommend/songs"
//                    : null;
//         if (!endpoint) return;

//         setLoadingMovies((prev) => ({ ...prev, [movieTitle]: true }));
//         setRecommendationModalVisible(false);

//         try {
//             const response = await axios.post(endpoint, { movie: movieTitle });
//             setRecommendations({
//                 type: type,
//                 items: response.data.recommendations || [],
//                 explanation: response.data.explanation || `Recommendations for ${type} based on ${movieTitle}.`,
//             });
//             setRecommendationModalVisible(true);
//         } catch (error) {
//             console.error(`Recommendation error for ${type}:`, error);
//             setRecommendations({
//                 type: type,
//                 items: [],
//                 explanation: `Failed to fetch ${type} recommendations. Please check the server connection.`,
//             });
//             setRecommendationModalVisible(true);
//         } finally {
//             setLoadingMovies((prev) => ({ ...prev, [movieTitle]: false }));
//         }
//     };

//     // --- MODAL HANDLERS ---
//     const openDetailModal = (movie) => setSelectedMovie(movie);
//     const closeDetailModal = () => setSelectedMovie(null);
//     const closeRecommendationModal = () => {
//         setRecommendationModalVisible(false);
//         setRecommendations({ type: null, items: [], explanation: "" });
//     };

//     const handleResetFilters = () => {
//         setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); setIsFilterPanelVisible(false);
//     };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredMovies = shuffledMovies.filter(
//         (m) =>
//             (!ageFilter || m.age_group === ageFilter) &&
//             (!genreFilter || m.genres.includes(genreFilter)) &&
//             (!languageFilter || m.language === languageFilter) &&
//             (m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 m.genres.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())))
//     );

//     const renderRecommendationItem = (item, type, i) => {
//         if (type === 'similar' || type === 'books') {
//             const title = typeof item === 'string' ? item : item.title || 'Untitled';
//             const authors = typeof item === 'object' && item.authors ? ` (Author: ${item.authors})` : '';
//             const rating = typeof item === 'object' && item.average_rating ? ` (Rating: ${item.average_rating})` : '';
//             return <li key={i}>{title}{authors}{rating}</li>;
//         }
//         if (type === 'songs') {
//             const trackName = item.title || item.track_name || 'Unknown Track';
//             const artistName = item.artist || item.artist_name || 'Unknown Artist';
//             const genre = item.genre || item.track_genre || 'Unknown Genre';
//             return (<li key={i} style={{ marginBottom: '5px' }}>{trackName} by {artistName}<span style={{ color: '#aaa', marginLeft: '10px', fontSize: '0.9em' }}>[{genre}]</span></li>);
//         }
//         return <li key={i}>{JSON.stringify(item)}</li>;
//     };

//     return (
//         <div style={styles.container}>
//             <nav style={styles.navbar}>
//                 <div style={styles.logo}>🎬 MovieApp</div>
//                 <div style={styles.navLinks}>
//                     <button style={styles.navBtn} onClick={goToDashboard}>Dashboard</button>
//                     <button style={styles.navBtn} onClick={handleLogout}>Logout</button>
//                 </div>
//             </nav>

//             <div style={styles.searchAndFilterContainer}>
//                 <div>
//                     <input type="text" placeholder="Type any movie title..." value={customMovie} onChange={(e) => setCustomMovie(e.target.value)} style={{ ...styles.searchBar, width: "300px" }}/>
//                     <button onClick={() => handleRecommend(customMovie, 'similar')} disabled={!customMovie.trim() || loadingMovies[customMovie]} style={{ ...styles.recommendBtn, marginLeft: "10px", backgroundColor: '#e50914' }}>
//                         {loadingMovies[customMovie] ? "Loading..." : "🔍 Recommend Similar"}
//                     </button>
//                     <button onClick={() => handleRecommend(customMovie, 'books')} disabled={!customMovie.trim() || loadingMovies[customMovie]} style={{ ...styles.recommendBtn, marginLeft: "10px", backgroundColor: "#007bff" }}>
//                         {loadingMovies[customMovie] ? "Loading..." : "📚 Books"}
//                     </button>
//                     <button onClick={() => handleRecommend(customMovie, 'songs')} disabled={!customMovie.trim() || loadingMovies[customMovie]} style={{ ...styles.recommendBtn, marginLeft: "10px", backgroundColor: "#1abc9c" }}>
//                         {loadingMovies[customMovie] ? "Loading..." : "🎵 Songs"}
//                     </button>
//                 </div>
//                 <div style={{ position: 'relative' }}>
//                     <button onClick={() => setIsFilterPanelVisible(prev => !prev)} style={{ ...styles.navBtn, backgroundColor: '#555' }}>
//                         📊 Filters
//                     </button>
//                     {isFilterPanelVisible && (
//                         <div style={styles.filterPanel}>
//                             <h4 style={styles.filterTitle}>Filter Movies</h4>
//                             <div style={styles.filterSection}><p style={styles.filterLabel}>By Age Group</p><button onClick={() => setAgeFilter("Kids")} style={{ ...styles.filterOptionBtn, backgroundColor: ageFilter === "Kids" ? "#1abc9c" : "#333" }}>Kids</button><button onClick={() => setAgeFilter("Adults")} style={{ ...styles.filterOptionBtn, backgroundColor: ageFilter === "Adults" ? "#1abc9c" : "#333" }}>Adults</button><button onClick={() => setAgeFilter("")} style={{ ...styles.filterOptionBtn, backgroundColor: ageFilter === "" ? "#1abc9c" : "#333" }}>All</button></div>
//                             <div style={styles.filterSection}><p style={styles.filterLabel}>By Genre</p><select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} style={styles.filterSelect}><option value="">All Genres</option>{uniqueGenres.map((genre, idx) => (<option key={idx} value={genre}>{genre}</option>))}</select></div>
//                             <div style={styles.filterSection}><p style={styles.filterLabel}>By Language</p><select value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)} style={styles.filterSelect}><option value="">All Languages</option>{uniqueLanguages.map((lang, idx) => (<option key={idx} value={lang}>{lang}</option>))}</select></div>
//                             <button onClick={handleResetFilters} style={styles.resetFilterBtn}>Clear All Filters</button>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             <div style={{ textAlign: "center", margin: "15px 0" }}><button style={{ ...styles.navBtn, backgroundColor: showFavorites ? "#1abc9c" : "#e50914" }} onClick={() => setShowFavorites(!showFavorites)}>{showFavorites ? "Hide Favorites" : "Show Favorites"}</button></div>
//             {showFavorites && (<div style={styles.favoritesSection}><h3 style={{ color: "#1abc9c" }}>⭐ Your Favorites</h3>{favorites.length > 0 ? (<ul style={styles.favList}>{Array.from(new Set(favorites.map(f => f.trim()))).map((fav, i) => (<li key={i}>{fav}</li>))}</ul>) : (<p style={{ color: "#aaa" }}>No favorites added yet.</p>)}</div>)}
//             <h2 style={styles.title}>Movie Recommendation System</h2>

//             {/* --- UPDATED MOVIE GRID --- */}
//             <div style={styles.simpleMovieGrid}>
//                 {filteredMovies.map((movie, idx) => (
//                     <div style={styles.simpleMovieCard} key={idx}>
//                         <img src={movie.imageUrl} alt={movie.title} style={styles.simpleMovieImage} onClick={() => openDetailModal(movie)}/>
//                         <div style={styles.simpleCardOverlay}>
//                             <h3 style={styles.simpleMovieTitle}>{movie.title}</h3>
//                         </div>
//                         <button
//                             onClick={(e) => { e.stopPropagation(); toggleFavorite(movie.title); }}
//                             style={{...styles.simpleFavBtn, ...(favorites.includes(movie.title) ? styles.favoritedBtn : {})}}
//                         >
//                             {favorites.includes(movie.title) ? "♥️" : "♡"}
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* --- NEW MOVIE DETAIL MODAL --- */}
//             {selectedMovie && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.movieDetailCard} onClick={(e) => e.stopPropagation()}>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <img src={selectedMovie.imageUrl} alt={selectedMovie.title} style={styles.movieDetailImage} />
//                         <div style={styles.movieDetailContent}>
//                             <div>
//                                 <h3 style={styles.movieDetailTitle}>{selectedMovie.title} ({selectedMovie.releaseYear})</h3>
//                                 <p style={styles.movieDetailGenres}>{selectedMovie.genres.join(" • ")}</p>
//                                 <p style={styles.movieDetailDescription}>{selectedMovie.description}</p>
//                             </div>
//                             <div>
//                                 <p style={styles.movieDetailCrew}><strong>Director:</strong> {selectedMovie.director}</p>
//                                 <p style={styles.movieDetailCrew}><strong>Cast:</strong> {selectedMovie.cast.join(", ")}</p>
//                             </div>
//                             <div style={styles.movieDetailActions}>
//                                 <button onClick={() => handleRecommend(selectedMovie.title, 'similar')} style={{...styles.actionBtn, ...styles.similarBtn}}>Similar</button>
//                                 <button onClick={() => handleRecommend(selectedMovie.title, 'books')} style={{...styles.actionBtn, ...styles.booksBtn}}>Books</button>
//                                 <button onClick={() => handleRecommend(selectedMovie.title, 'songs')} style={{...styles.actionBtn, ...styles.songsBtn}}>Songs</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {/* RECOMMENDATIONS MODAL (for custom search) */}
//             {recommendationModalVisible && (
//                 <div style={styles.modalOverlay} onClick={closeRecommendationModal}>
//                     <div style={styles.recommendationModalContent} onClick={(e) => e.stopPropagation()}>
//                         <button style={styles.closeButton} onClick={closeRecommendationModal}>×</button>
//                         <h3 style={styles.recommendTitle}>{recommendations.type === 'similar' ? '📽 Similar Movies' : recommendations.type === 'books' ? '📚 Recommended Books' : recommendations.type === 'songs' ? '🎵 Recommended Songs' : 'Recommendations'}</h3>
//                         {recommendations.items.length > 0 ? (<ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.type, i))}</ul>) : (<p style={{ color: '#aaa', textAlign: 'center', margin: '20px 0' }}>No recommendations found.</p>)}
//                         <div style={styles.explanationBox}><p style={{ color: "#9b59b6", fontStyle: 'italic', fontWeight: 'bold' }}>AI Explanation:</p><p>{recommendations.explanation}</p></div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// // STYLES OBJECT
// const styles = {
//     container: { padding: "0 20px 40px 20px", backgroundColor: "#141414", color: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
//     navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#1c1c1c", borderBottom: "1px solid #333", position: "sticky", top: 0, zIndex: 1000 },
//     logo: { fontSize: "1.5rem", fontWeight: "bold", color: "#e50914" },
//     navLinks: { display: "flex", gap: "10px" },
//     navBtn: { backgroundColor: "#e50914", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer", color: "#fff", fontWeight: "bold", transition: "background-color 0.2s" },
//     searchBar: { padding: "10px", borderRadius: "8px", border: "1px solid #444", fontSize: "1rem", color: "#fff", backgroundColor: "#333" },
//     title: { fontSize: "2rem", margin: "20px 0", color: "#e50914", textAlign: "center" },
//     recommendBtn: { padding: "10px 18px", color: "#fff", border: "none", borderRadius: "8px", fontSize: "15px", cursor: "pointer", transition: "opacity 0.2s" },
//     favoritesSection: { backgroundColor: "#1c1c1c", padding: "15px", borderRadius: "10px", margin: "20px auto", maxWidth: "600px" },
//     favList: { listStyle: "none", padding: 0 },
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 },
//     recommendationModalContent: { backgroundColor: '#1c1c1c', padding: '30px', borderRadius: '15px', width: '90%', maxWidth: '600px', maxHeight: '80vh', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)', position: 'relative', border: '2px solid #e50914', display: 'flex', flexDirection: 'column' },
//     closeButton: { position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', fontWeight: 'bold', padding: '5px 10px', zIndex: 10 },
//     recommendTitle: { color: "#1abc9c", marginBottom: "10px", textAlign: 'center' },
//     recommendList: { paddingLeft: '20px', flexGrow: 1, overflowY: 'auto', margin: '10px 0' },
//     explanationBox: { backgroundColor: '#333', padding: '15px', borderRadius: '10px', marginTop: '20px', maxHeight: '150px', overflowY: 'auto' },
//     searchAndFilterContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: "20px", marginTop: "20px", flexWrap: 'wrap' },
//     filterPanel: { position: 'absolute', top: 'calc(100% + 10px)', right: 0, backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '10px', padding: '15px', zIndex: 10, width: '280px', boxShadow: '0 5px 15px rgba(0,0,0,0.5)', textAlign: 'left' },
//     filterTitle: { margin: 0, marginBottom: '15px', color: '#1abc9c' },
//     filterSection: { marginBottom: '15px' },
//     filterLabel: { margin: '0 0 5px 0', fontSize: '0.9rem', color: '#ccc' },
//     filterOptionBtn: { padding: '5px 10px', marginRight: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer', color: 'white' },
//     filterSelect: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#333', color: 'white' },
//     resetFilterBtn: { width: '100%', padding: '8px', backgroundColor: '#c0392b', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' },

//     // --- STYLES FOR SIMPLE GRID CARDS ---
//     simpleMovieGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" },
//     simpleMovieCard: { position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', background: '#222' },
//     simpleMovieImage: { width: '100%', display: 'block', aspectRatio: '2 / 3', objectFit: 'cover', transition: 'transform 0.2s ease-in-out' },
//     simpleCardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '20px 10px 10px 10px' },
//     simpleMovieTitle: { margin: 0, fontSize: '1rem', color: 'white', textAlign: 'center' },
//     simpleFavBtn: { position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },

//     // --- STYLES FOR DETAILED MOVIE MODAL ---
//     movieDetailCard: { background: "#1c1c1c", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 6px rgba(0,0,0,0.5)", display: 'flex', gap: '20px', width: '90%', maxWidth: '800px', position: 'relative' },
//     movieDetailImage: { width: "240px", height: "360px", objectFit: "cover", borderRadius: "10px", flexShrink: 0 },
//     movieDetailContent: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, minWidth: 0 },
//     movieDetailTitle: { margin: "0 0 5px 0", fontSize: "1.8rem", color: '#fff' },
//     movieDetailGenres: { fontSize: "0.9rem", color: "#aaa", marginBottom: "15px", fontStyle: 'italic' },
//     movieDetailDescription: { fontSize: '1rem', color: '#ccc', lineHeight: 1.5, flexGrow: 1 },
//     movieDetailCrew: { fontSize: '0.9rem', color: '#bbb', margin: '3px 0' },
//     movieDetailActions: { display: 'flex', gap: '10px', marginTop: '15px' },
//     actionBtn: { border: 'none', borderRadius: '5px', padding: '10px 15px', cursor: 'pointer', fontWeight: 'bold', color: 'white', fontSize: '0.9rem', flex: 1 },
//     favoritedBtn: { backgroundColor: '#e50914' },
//     similarBtn: { backgroundColor: '#d35400' },
//     booksBtn: { backgroundColor: '#2980b9' },
//     songsBtn: { backgroundColor: '#27ae60' }
// };

// export default MovieRecommendations;
//-----------------------------------------------------------------
// const uniqueGenres = Array.from(new Set(moviesDataset.flatMap(movie => movie.genres)));
// const uniqueLanguages = Array.from(new Set(moviesDataset.map(movie => movie.language)));

// function MovieRecommendations() {
//     const [shuffledMovies, setShuffledMovies] = useState([]);
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loadingMovies, setLoadingMovies] = useState({});
//     const [showFavorites, setShowFavorites] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [languageFilter, setLanguageFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedMovie, setSelectedMovie] = useState(null);
    
//     // NEW: States for live search suggestions
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             let currentIndex = array.length, randomIndex;
//             const newArray = [...array];
//             while (currentIndex !== 0) {
//                 randomIndex = Math.floor(Math.random() * currentIndex);
//                 currentIndex--;
//                 [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
//             }
//             return newArray;
//         };
//         setShuffledMovies(shuffleArray(moviesDataset));
//     }, []);

//     useEffect(() => {
//         fetch("http://localhost:5001/favorites")
//             .then((res) => res.json())
//             .then((data) => setFavorites(data.favorites || []));
//     }, []);

//     const toggleFavorite = async (movieTitle) => {
//         if (favorites.includes(movieTitle)) {
//             const res = await fetch("http://localhost:5001/favorites/remove", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         } else {
//             const res = await fetch("http://localhost:5001/favorites/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         }
//     };

//     const handleRecommend = async (movieTitle, type = 'similar') => {
//         if (!movieTitle.trim()) return;
//         let endpoint = type === 'similar' ? "http://localhost:5001/recommend"
//                    : type === 'books'   ? "http://localhost:5001/crossrecommend/books"
//                    : type === 'songs'   ? "http://localhost:5001/crossrecommend/songs"
//                    : null;
//         if (!endpoint) return;

//         setLoadingMovies((prev) => ({ ...prev, [movieTitle]: true }));
//         setRecommendationModalVisible(false);

//         try {
//             const response = await axios.post(endpoint, { movie: movieTitle });
//             setRecommendations({
//                 type: type, items: response.data.recommendations || [],
//                 explanation: response.data.explanation || `Recommendations for ${type} based on ${movieTitle}.`,
//             });
//             setRecommendationModalVisible(true);
//         } catch (error) {
//             console.error(`Recommendation error for ${type}:`, error);
//             setRecommendations({
//                 type: type, items: [],
//                 explanation: `Failed to fetch ${type} recommendations. Please check the server connection.`,
//             });
//             setRecommendationModalVisible(true);
//         } finally {
//             setLoadingMovies((prev) => ({ ...prev, [movieTitle]: false }));
//         }
//     };

//     // --- LIVE SEARCH HANDLERS ---
//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         if (query.length > 0) {
//             const filteredSuggestions = moviesDataset.filter(movie =>
//                 movie.title.toLowerCase().includes(query.toLowerCase())
//             );
//             setSuggestions(filteredSuggestions);
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };

//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (movie) => setSelectedMovie(movie);
//     const closeDetailModal = () => setSelectedMovie(null);
//     const closeRecommendationModal = () => {
//         setRecommendationModalVisible(false);
//         setRecommendations({ type: null, items: [], explanation: "" });
//     };

//     const handleResetFilters = () => {
//         setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); setIsFilterPanelVisible(false);
//     };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredMovies = shuffledMovies.filter(
//         (m) =>
//             (!ageFilter || m.age_group === ageFilter) &&
//             (!genreFilter || m.genres.includes(genreFilter)) &&
//             (!languageFilter || m.language === languageFilter) &&
//             (m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                 m.genres.some((g) => g.toLowerCase().includes(searchQuery.toLowerCase())))
//     );

//     const renderRecommendationItem = (item, type, i) => {
//         if (type === 'similar' || type === 'books') {
//             const title = typeof item === 'string' ? item : item.title || 'Untitled';
//             const authors = typeof item === 'object' && item.authors ? ` (Author: ${item.authors})` : '';
//             const rating = typeof item === 'object' && item.average_rating ? ` (Rating: ${item.average_rating})` : '';
//             return <li key={i}>{title}{authors}{rating}</li>;
//         }
//         if (type === 'songs') {
//             const trackName = item.title || item.track_name || 'Unknown Track';
//             const artistName = item.artist || item.artist_name || 'Unknown Artist';
//             const genre = item.genre || item.track_genre || 'Unknown Genre';
//             return (<li key={i} style={{ marginBottom: '5px' }}>{trackName} by {artistName}<span style={{ color: '#aaa', marginLeft: '10px', fontSize: '0.9em' }}>[{genre}]</span></li>);
//         }
//         return <li key={i}>{JSON.stringify(item)}</li>;
//     };

//     return (
//         <div style={styles.container}>
//             <nav style={styles.navbar}>
//                 <div style={styles.logo}>🎬 MovieApp</div>
//                 <div style={styles.navLinks}>
//                     <button style={styles.navBtn} onClick={goToDashboard}>Dashboard</button>
//                     <button style={styles.navBtn} onClick={handleLogout}>Logout</button>
//                 </div>
//             </nav>

//             {/* --- NEW COMPACT CONTROL BAR --- */}
//             <div style={styles.controlBar}>
//                 <div style={styles.searchContainer} onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}>
//                     <input type="text" placeholder="Search movies or get recommendations..." value={searchQuery} onChange={handleSearchChange} style={styles.mainSearchInput} />
//                     {showSuggestions && suggestions.length > 0 && (
//                         <div style={styles.suggestionsBox}>
//                             {suggestions.map(suggestion => (
//                                 <div key={suggestion.title} style={styles.suggestionItem} onClick={() => onSuggestionClick(suggestion.title)}>
//                                     {suggestion.title}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//                 <div style={styles.buttonGroup}>
//                     <button onClick={() => handleRecommend(searchQuery, 'similar')} disabled={!searchQuery.trim()} style={styles.compactRecommendBtn}>🔍 Similar</button>
//                     <button onClick={() => handleRecommend(searchQuery, 'books')} disabled={!searchQuery.trim()} style={styles.compactRecommendBtn}>📚 Books</button>
//                     <button onClick={() => handleRecommend(searchQuery, 'songs')} disabled={!searchQuery.trim()} style={styles.compactRecommendBtn}>🎵 Songs</button>
//                     <div style={{ position: 'relative' }}>
//                         <button onClick={() => setIsFilterPanelVisible(prev => !prev)} style={styles.filterToggleBtn}>📊 Filters</button>
//                         {isFilterPanelVisible && (
//                             <div style={styles.filterPanel}>
//                                 <h4 style={styles.filterTitle}>Filter Movies</h4>
//                                 <div style={styles.filterSection}><p style={styles.filterLabel}>By Age Group</p><button onClick={() => setAgeFilter("Kids")} style={{ ...styles.filterOptionBtn, backgroundColor: ageFilter === "Kids" ? "#1abc9c" : "#333" }}>Kids</button><button onClick={() => setAgeFilter("Adults")} style={{ ...styles.filterOptionBtn, backgroundColor: ageFilter === "Adults" ? "#1abc9c" : "#333" }}>Adults</button><button onClick={() => setAgeFilter("")} style={{ ...styles.filterOptionBtn, backgroundColor: ageFilter === "" ? "#1abc9c" : "#333" }}>All</button></div>
//                                 <div style={styles.filterSection}><p style={styles.filterLabel}>By Genre</p><select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)} style={styles.filterSelect}><option value="">All Genres</option>{uniqueGenres.map((genre, idx) => (<option key={idx} value={genre}>{genre}</option>))}</select></div>
//                                 <div style={styles.filterSection}><p style={styles.filterLabel}>By Language</p><select value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)} style={styles.filterSelect}><option value="">All Languages</option>{uniqueLanguages.map((lang, idx) => (<option key={idx} value={lang}>{lang}</option>))}</select></div>
//                                 <button onClick={handleResetFilters} style={styles.resetFilterBtn}>Clear All Filters</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             <div style={{ textAlign: "center", margin: "15px 0" }}><button style={{ ...styles.navBtn, backgroundColor: showFavorites ? "#1abc9c" : "#e50914" }} onClick={() => setShowFavorites(!showFavorites)}>{showFavorites ? "Hide Favorites" : "Show Favorites"}</button></div>
//             {showFavorites && (<div style={styles.favoritesSection}><h3 style={{ color: "#1abc9c" }}>⭐ Your Favorites</h3>{favorites.length > 0 ? (<ul style={styles.favList}>{Array.from(new Set(favorites.map(f => f.trim()))).map((fav, i) => (<li key={i}>{fav}</li>))}</ul>) : (<p style={{ color: "#aaa" }}>No favorites added yet.</p>)}</div>)}
//             <h2 style={styles.title}>Movie Collection</h2>

//             <div style={styles.simpleMovieGrid}>
//                 {filteredMovies.map((movie, idx) => (
//                     <div style={styles.simpleMovieCard} key={idx}>
//                         <img src={movie.imageUrl} alt={movie.title} style={styles.simpleMovieImage} onClick={() => openDetailModal(movie)}/>
//                         <div style={styles.simpleCardOverlay}><h3 style={styles.simpleMovieTitle}>{movie.title}</h3></div>
//                         <button onClick={(e) => { e.stopPropagation(); toggleFavorite(movie.title); }} style={{...styles.simpleFavBtn, ...(favorites.includes(movie.title) ? styles.favoritedBtn : {})}}>
//                             {favorites.includes(movie.title) ? "♥️" : "♡"}
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {selectedMovie && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.movieDetailCard} onClick={(e) => e.stopPropagation()}>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <img src={selectedMovie.imageUrl} alt={selectedMovie.title} style={styles.movieDetailImage} />
//                         <div style={styles.movieDetailContent}>
//                             <div><h3 style={styles.movieDetailTitle}>{selectedMovie.title} ({selectedMovie.releaseYear})</h3><p style={styles.movieDetailGenres}>{selectedMovie.genres.join(" • ")}</p><p style={styles.movieDetailDescription}>{selectedMovie.description}</p></div>
//                             <div><p style={styles.movieDetailCrew}><strong>Director:</strong> {selectedMovie.director}</p><p style={styles.movieDetailCrew}><strong>Cast:</strong> {selectedMovie.cast.join(", ")}</p></div>
//                             <div style={styles.movieDetailActions}><button onClick={() => handleRecommend(selectedMovie.title, 'similar')} style={{...styles.actionBtn, ...styles.similarBtn}}>Similar</button><button onClick={() => handleRecommend(selectedMovie.title, 'books')} style={{...styles.actionBtn, ...styles.booksBtn}}>Books</button><button onClick={() => handleRecommend(selectedMovie.title, 'songs')} style={{...styles.actionBtn, ...styles.songsBtn}}>Songs</button></div>
//                         </div>
//                     </div>
//                 </div>
//             )}

//             {recommendationModalVisible && (
//                 <div style={styles.modalOverlay} onClick={closeRecommendationModal}>
//                     <div style={styles.recommendationModalContent} onClick={(e) => e.stopPropagation()}>
//                         <button style={styles.closeButton} onClick={closeRecommendationModal}>×</button>
//                         <h3 style={styles.recommendTitle}>{recommendations.type === 'similar' ? '📽 Similar Movies' : recommendations.type === 'books' ? '📚 Recommended Books' : recommendations.type === 'songs' ? '🎵 Recommended Songs' : 'Recommendations'}</h3>
//                         {recommendations.items.length > 0 ? (<ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.type, i))}</ul>) : (<p style={{ color: '#aaa', textAlign: 'center', margin: '20px 0' }}>No recommendations found.</p>)}
//                         <div style={styles.explanationBox}><p style={{ color: "#9b59b6", fontStyle: 'italic', fontWeight: 'bold' }}>AI Explanation:</p><p>{recommendations.explanation}</p></div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// // STYLES OBJECT
// const styles = {
//     container: { padding: "0 20px 40px 20px", backgroundColor: "#141414", color: "#fff", minHeight: "100vh", fontFamily: "Arial, sans-serif" },
//     navbar: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#1c1c1c", borderBottom: "1px solid #333", position: "sticky", top: 0, zIndex: 1000 },
//     logo: { fontSize: "1.5rem", fontWeight: "bold", color: "#e50914" },
//     navLinks: { display: "flex", gap: "10px" },
//     navBtn: { backgroundColor: "#e50914", border: "none", padding: "8px 15px", borderRadius: "5px", cursor: "pointer", color: "#fff", fontWeight: "bold", transition: "background-color 0.2s" },
//     title: { fontSize: "2rem", margin: "20px 0", color: "#e50914", textAlign: "center" },
//     favoritesSection: { backgroundColor: "#1c1c1c", padding: "15px", borderRadius: "10px", margin: "20px auto", maxWidth: "600px" },
//     favList: { listStyle: "none", padding: 0 },
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000 },
//     recommendationModalContent: { backgroundColor: '#1c1c1c', padding: '30px', borderRadius: '15px', width: '90%', maxWidth: '600px', maxHeight: '80vh', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.8)', position: 'relative', border: '2px solid #e50914', display: 'flex', flexDirection: 'column' },
//     closeButton: { position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', fontWeight: 'bold', padding: '5px 10px', zIndex: 10 },
//     recommendTitle: { color: "#1abc9c", marginBottom: "10px", textAlign: 'center' },
//     recommendList: { paddingLeft: '20px', flexGrow: 1, overflowY: 'auto', margin: '10px 0' },
//     explanationBox: { backgroundColor: '#333', padding: '15px', borderRadius: '10px', marginTop: '20px', maxHeight: '150px', overflowY: 'auto' },
//     filterPanel: { position: 'absolute', top: 'calc(100% + 10px)', right: 0, backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '10px', padding: '15px', zIndex: 10, width: '280px', boxShadow: '0 5px 15px rgba(0,0,0,0.5)', textAlign: 'left' },
//     filterTitle: { margin: 0, marginBottom: '15px', color: '#1abc9c' },
//     filterSection: { marginBottom: '15px' },
//     filterLabel: { margin: '0 0 5px 0', fontSize: '0.9rem', color: '#ccc' },
//     filterOptionBtn: { padding: '5px 10px', marginRight: '5px', border: 'none', borderRadius: '5px', cursor: 'pointer', color: 'white' },
//     filterSelect: { width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #444', backgroundColor: '#333', color: 'white' },
//     resetFilterBtn: { width: '100%', padding: '8px', backgroundColor: '#c0392b', border: 'none', borderRadius: '5px', color: 'white', cursor: 'pointer', marginTop: '10px', fontWeight: 'bold' },

//     // --- NEW STYLES FOR SLEEK CONTROL BAR & LIVE SEARCH ---
//     controlBar: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', padding: '20px 0', flexWrap: 'wrap' },
//     searchContainer: { position: 'relative', flex: '1 1 400px', maxWidth: '500px' },
//     mainSearchInput: { width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #555', backgroundColor: '#222', color: 'white', fontSize: '1rem' },
//     suggestionsBox: { position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', marginTop: '5px', zIndex: 10, maxHeight: '200px', overflowY: 'auto' },
//     suggestionItem: { padding: '10px 15px', cursor: 'pointer', borderBottom: '1px solid #444', '&:hover': { backgroundColor: '#333' } },
//     buttonGroup: { display: 'flex', gap: '8px' },
//     compactRecommendBtn: { padding: '10px 12px', fontSize: '0.9rem', backgroundColor: '#333', border: '1px solid #555', color: 'white', borderRadius: '8px', cursor: 'pointer' },
//     filterToggleBtn: { padding: '10px 12px', fontSize: '0.9rem', backgroundColor: '#333', border: '1px solid #555', color: 'white', borderRadius: '8px', cursor: 'pointer' },

//     // --- SIMPLE GRID CARD STYLES ---
//     simpleMovieGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" },
//     simpleMovieCard: { position: 'relative', borderRadius: '10px', overflow: 'hidden', cursor: 'pointer', background: '#222', transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.05)' } },
//     simpleMovieImage: { width: '100%', display: 'block', aspectRatio: '2 / 3', objectFit: 'cover' },
//     simpleCardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '20px 10px 10px 10px' },
//     simpleMovieTitle: { margin: 0, fontSize: '1rem', color: 'white', textAlign: 'center' },
//     simpleFavBtn: { position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },

//     // --- DETAILED MOVIE MODAL STYLES ---
//     movieDetailCard: { background: "#1c1c1c", borderRadius: "15px", padding: "20px", boxShadow: "0 4px 6px rgba(0,0,0,0.5)", display: 'flex', gap: '20px', width: '90%', maxWidth: '800px', position: 'relative' },
//     movieDetailImage: { width: "240px", height: "360px", objectFit: "cover", borderRadius: "10px", flexShrink: 0 },
//     movieDetailContent: { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, minWidth: 0 },
//     movieDetailTitle: { margin: "0 0 5px 0", fontSize: "1.8rem", color: '#fff' },
//     movieDetailGenres: { fontSize: "0.9rem", color: "#aaa", marginBottom: "15px", fontStyle: 'italic' },
//     movieDetailDescription: { fontSize: '1rem', color: '#ccc', lineHeight: 1.5, flexGrow: 1 },
//     movieDetailCrew: { fontSize: '0.9rem', color: '#bbb', margin: '3px 0' },
//     movieDetailActions: { display: 'flex', gap: '10px', marginTop: '15px' },
//     actionBtn: { border: 'none', borderRadius: '5px', padding: '10px 15px', cursor: 'pointer', fontWeight: 'bold', color: 'white', fontSize: '0.9rem', flex: 1 },
//     favoritedBtn: { backgroundColor: '#e50914' },
//     similarBtn: { backgroundColor: '#d35400' },
//     booksBtn: { backgroundColor: '#2980b9' },
//     songsBtn: { backgroundColor: '#27ae60' }
// };

// export default MovieRecommendations;-
//-------------------------------------perefectly working code 
// / NOTE: The moviesDataset array is omitted as requested for brevity.
// // Ensure you have the full moviesDataset declared above this component in your file.

// const uniqueGenres = Array.from(new Set(moviesDataset.flatMap(movie => movie.genres)));
// const uniqueLanguages = Array.from(new Set(moviesDataset.map(movie => movie.language)));

// function MovieRecommendations() {
//     const [shuffledMovies, setShuffledMovies] = useState([]);
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [languageFilter, setLanguageFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedMovie, setSelectedMovie] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
    
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
    
//     // RE-ADDED: State for showing the favorites list
//     const [showFavorites, setShowFavorites] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             let currentIndex = array.length, randomIndex;
//             const newArray = [...array];
//             while (currentIndex !== 0) {
//                 randomIndex = Math.floor(Math.random() * currentIndex);
//                 currentIndex--;
//                 [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
//             }
//             return newArray;
//         };
//         setShuffledMovies(shuffleArray(moviesDataset));
//     }, []);

//     useEffect(() => {
//         fetch("http://localhost:5001/favorites")
//             .then((res) => res.json())
//             .then((data) => setFavorites(data.favorites || []));
//     }, []);

//     const toggleFavorite = async (movieTitle) => {
//         if (favorites.includes(movieTitle)) {
//             const res = await fetch("http://localhost:5001/favorites/remove", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         } else {
//             const res = await fetch("http://localhost:5001/favorites/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         }
//     };

//     const handleRecommend = async (movieTitle, type) => {
//         if (!movieTitle.trim()) return;
//         let endpoint;
//         if (type === 'similar') endpoint = "http://localhost:5001/recommend";
//         else if (type === 'books') endpoint = "http://localhost:5001/crossrecommend/books";
//         else if (type === 'songs') endpoint = "http://localhost:5001/crossrecommend/songs";
//         else return;

//         setLoading(true);
//         setShowRecommendOptions(false);
//         try {
//             const response = await axios.post(endpoint, { movie: movieTitle });
//             setRecommendations({ type, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations based on ${movieTitle}.` });
//             setRecommendationModalVisible(true);
//         } catch (error) {
//             console.error(`Recommendation error:`, error);
//             setRecommendations({ type, items: [], explanation: `Failed to fetch recommendations. Please check server.` });
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
//             setSuggestions(moviesDataset.filter(m => m.title.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };
    
//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (movie) => setSelectedMovie(movie);
//     const closeDetailModal = () => setSelectedMovie(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredMovies = shuffledMovies.filter(m =>
//         (!ageFilter || m.age_group === ageFilter) &&
//         (!genreFilter || m.genres.includes(genreFilter)) &&
//         (!languageFilter || m.language === languageFilter) &&
//         (m.title.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const renderRecommendationItem = (item, type, i) => {
//         if (type === 'similar' || type === 'books') {
//             const title = typeof item === 'string' ? item : item.title || 'Untitled';
//             const authors = typeof item === 'object' && item.authors ? ` (Author: ${item.authors})` : '';
//             return <li style={styles.recommendListItem} key={i}>{title}{authors}</li>;
//         }
//         if (type === 'songs') {
//             const trackName = item.title || item.track_name || 'Unknown Track';
//             const artistName = item.artist || item.artist_name || 'Unknown Artist';
//             return <li style={styles.recommendListItem} key={i}>{trackName} by {artistName}</li>;
//         }
//         return <li style={styles.recommendListItem} key={i}>{JSON.stringify(item)}</li>;
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
//                         <input type="text" placeholder="Search for a movie or genre..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
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
//                                     <label style={styles.filterLabel}>Age Rating</label>
//                                     <div style={styles.buttonGroup}>
//                                         <button onClick={() => setAgeFilter('Kids')} style={ageFilter === 'Kids' ? styles.buttonActive : styles.buttonInactive}>Kids</button>
//                                         <button onClick={() => setAgeFilter('Adults')} style={ageFilter === 'Adults' ? styles.buttonActive : styles.buttonInactive}>Adults</button>
//                                     </div>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Genre</label>
//                                     <select style={styles.selectDropdown} value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}><option value="">All Genres</option>{uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}</select>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Language</label>
//                                     <select style={styles.selectDropdown} value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}><option value="">All Languages</option>{uniqueLanguages.map((l, i) => <option key={i} value={l}>{l}</option>)}</select>
//                                 </div>
//                                 <button onClick={handleResetFilters} style={styles.resetBtn}>Reset Filters</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//                 {showRecommendOptions && (
//                     <div style={styles.recommendOptionsContainer}>
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎬 Similar Movies</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'songs')} style={styles.optionButton}>🎵 Songs</button>
//                     </div>
//                 )}
//             </header>

//             {/* RE-ADDED: Show Favorites Button and Section */}
//             <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//                 <button style={styles.showFavButton} onClick={() => setShowFavorites(!showFavorites)}>
//                     {showFavorites ? 'Hide Favorites' : 'Show My Favorites ⭐'}
//                 </button>
//             </div>

//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h2 style={styles.favoritesTitle}>Your Favorite Movies</h2>
//                     {favorites.length > 0 ? (
//                         <ul style={styles.favList}>
//                             {favorites.map((fav, i) => <li key={i}>{fav}</li>)}
//                         </ul>
//                     ) : (
//                         <p>You haven't added any favorites yet.</p>
//                     )}
//                 </div>
//             )}


//             <h2 style={styles.title}>Movie Collection</h2>
//             <div style={styles.movieGrid}>
//                 {filteredMovies.map((movie) => (
//                     <div style={styles.movieCard} key={movie.title} >
//                         <img src={movie.imageUrl} alt={movie.title} style={styles.movieImage} onClick={() => openDetailModal(movie)} />
//                         <button 
//                             style={favorites.includes(movie.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { 
//                                 e.stopPropagation(); 
//                                 toggleFavorite(movie.title);
//                             }}
//                         >
//                             {favorites.includes(movie.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(movie)}>
//                             <h3 style={styles.cardTitle}>{movie.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedMovie && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedMovie.imageUrl})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedMovie.imageUrl} alt={selectedMovie.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <h2 style={styles.modalTitle}>{selectedMovie.title} ({selectedMovie.releaseYear})</h2>
//                                 <p style={styles.modalMeta}>{selectedMovie.genres.join(" / ")}</p>
//                                 <p style={styles.modalDescription}>{selectedMovie.description}</p>
//                                 <p style={styles.modalMeta}><strong>Director:</strong> {selectedMovie.director}</p>
//                                 <p style={styles.modalMeta}><strong>Cast:</strong> {selectedMovie.cast.join(", ")}</p>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedMovie.title); }} style={favorites.includes(selectedMovie.title) ? styles.favBtnActive : styles.favBtn}>
//                                         {favorites.includes(selectedMovie.title) ? "♥ Favorited" : "♡ Add to Favorites"}
//                                     </button>
//                                 </div>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Similar Movies</button>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'songs')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Songs</button>
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

//     // RE-ADDED styles for favorites section
//     showFavButton: { backgroundColor: "rgba(3, 218, 198, 0.1)", border: "1px solid #03DAC6", color: '#03DAC6', padding: '10px 25px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' },
//     favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '800px', border: '1px solid #333' },
//     favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },
//     favList: { listStyle: 'decimal', paddingLeft: '20px' },

//     movieGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     movieCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     movieImage: { width: "100%", height: "330px", objectFit: "cover", display: 'block' },
//     cardFavBtn: {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         background: 'rgba(0,0,0,0.6)',
//         color: 'white',
//         border: 'none',
//         borderRadius: '50%',
//         width: '35px',
//         height: '35px',
//         fontSize: '1.2rem',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 5,
//     },
//     cardFavBtnActive: {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         background: 'rgba(0,0,0,0.6)',
//         color: '#e50914',
//         border: 'none',
//         borderRadius: '50%',
//         width: '35px',
//         height: '35px',
//         fontSize: '1.5rem',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 5,
//     },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '330px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1 },
//     modalTitle: { margin: '0 0 10px 0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1rem', color: '#bbb', margin: '4px 0' },
//     modalDescription: { fontSize: '1rem', color: '#ddd', lineHeight: 1.7, margin: '20px 0', flexGrow: 1 },
//     favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '15px' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '10px 0', borderBottom: '1px dotted #333' }
// };

// export default MovieRecommendations;

//-------------------------------------------------aftr better styling-------------

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// // NEW: Updated dataset with richer movie details
// const moviesDataset = [
//     // HINDI
//     {
//         title: "Kahaani",
//         genres: ["Drama", "Mystery", "Thriller"],
//         language: "Hindi",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgWAiq0rK460S91aiXcyz6EpCMY9ds-59D0OBUaWnYdAku-Oe1_U-uih5AVSbM__DLCTVx",
//         description: "A pregnant woman's relentless search for her missing husband in Kolkata unearths a web of secrets and lies.",
//         releaseYear: 2012,
//         director: "Sujoy Ghosh",
//         cast: ["Vidya Balan", "Parambrata Chatterjee", "Nawazuddin Siddiqui"]
//     },
//     {
//         title: "Barfi!",
//         genres: ["Comedy", "Drama", "Romance"],
//         language: "Hindi",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_P8v3u_TqWjTujo6ACYc1jsOIyS5cgAIU4UNlXXcN6Fl3Xb1-WCGqleyzn6Tq9FfmtJn5wA",
//         description: "A charming, deaf-mute man, Barfi, falls in love with two women, Shruti and Jhilmil, navigating life's challenges with a smile.",
//         releaseYear: 2012,
//         director: "Anurag Basu",
//         cast: ["Ranbir Kapoor", "Priyanka Chopra", "Ileana D'Cruz"]
//     },
//     {
//         title: "OMG: Oh My God!",
//         genres: ["Comedy", "Drama", "Fantasy"],
//         language: "Hindi",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8mXcfEqaWbRqkNK2RUcsb_ffWZwFR938iClW0YYFWDKjC8KpGiiDwH1B8lXL1Bgjl1JtrLQ",
//         description: "An atheist shopkeeper sues God after an earthquake destroys his shop, leading to an extraordinary legal battle.",
//         releaseYear: 2012,
//         director: "Umesh Shukla",
//         cast: ["Paresh Rawal", "Akshay Kumar", "Mithun Chakraborty"]
//     },
//     {
//         title: "Paan Singh Tomar",
//         genres: ["Biography", "Crime", "Drama"],
//         language: "Hindi",
//         age_group: "Adults",
//         imageUrl: "https://cdn.shopclues.com/images/thumbnails/4501/320/320/paansinghtomar400x400imad7wsxhyfsyy2q1399984547.jpg",
//         description: "The true story of an Indian athlete who becomes a dacoit (bandit) after facing injustice.",
//         releaseYear: 2012,
//         director: "Tigmanshu Dhulia",
//         cast: ["Irrfan Khan", "Mahie Gill", "Vipin Sharma"]
//     },
//     {
//         title: "Taare Zameen Par",
//         genres: ["Drama", "Family"],
//         language: "Hindi",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIFyKAL4ldG54LGrepUXMraXASXkEmk4b79Uv_tPy35dtC1fmCTz3VBAfC9wR-ZugQjiB",
//         description: "An 8-year-old boy is thought to be a lazy troublemaker, until the new art teacher discovers he has dyslexia and helps him to discover his true potential.",
//         releaseYear: 2007,
//         director: "Aamir Khan",
//         cast: ["Darsheel Safary", "Aamir Khan", "Tisca Chopra"]
//     },

//     // ENGLISH
//     {
//         title: "The Dark Knight Rises",
//         genres: ["Action", "Thriller"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBA5a1V4L0WZ7vOB8DLuZmWwdouli_6N1BUE9Lj46_Sx2Pzd5Hy9P7GNbXBL0a_fPcTrD",
//         description: "Eight years after the Joker's reign of anarchy, Batman is forced to return from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
//         releaseYear: 2012,
//         director: "Christopher Nolan",
//         cast: ["Christian Bale", "Tom Hardy", "Anne Hathaway"]
//     },
//     {
//         title: "Inception",
//         genres: ["Action", "Adventure", "Sci-Fi"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
//         description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
//         releaseYear: 2010,
//         director: "Christopher Nolan",
//         cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
//     },
//     {
//         title: "The Avengers",
//         genres: ["Action", "Adventure", "Sci-Fi"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i",
//         description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
//         releaseYear: 2012,
//         director: "Joss Whedon",
//         cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
//     },
//     {
//         title: "Spirited Away",
//         genres: ["Animation", "Fantasy"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
//         description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
//         releaseYear: 2001,
//         director: "Hayao Miyazaki",
//         cast: ["Daveigh Chase", "Suzanne Pleshette", "Jason Marsden"]
//     },
//     {
//         title: "The Dark Knight",
//         genres: ["Action", "Crime"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//         description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
//         releaseYear: 2008,
//         director: "Christopher Nolan",
//         cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
//     },
//     {
//         title: "Interstellar",
//         genres: ["Sci-Fi", "Adventure"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
//         description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         releaseYear: 2014,
//         director: "Christopher Nolan",
//         cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
//     },
//     {
//         title: "The Matrix",
//         genres: ["Sci-Fi", "Action"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.AC.jpg",
//         description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
//         releaseYear: 1999,
//         director: "The Wachowskis",
//         cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
//     },
//     {
//         title: "Parasite",
//         genres: ["Thriller", "Drama"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/I/71c05lTE03L.AC_SY679.jpg",
//         description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim family.",
//         releaseYear: 2019,
//         director: "Bong Joon Ho",
//         cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
//     },
//     {
//         title: "Coco",
//         genres: ["Animation", "Family"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
//         description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
//         releaseYear: 2017,
//         director: "Lee Unkrich",
//         cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]
//     },
//     {
//         title: "Joker",
//         genres: ["Drama", "Crime"],
//         language: "English",
//         age_group: "Adults",
//         imageUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//         description: "A mentally troubled comedian embarks on a downward spiral that leads him to embrace his alter-ego: the Joker.",
//         releaseYear: 2019,
//         director: "Todd Phillips",
//         cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
//     },
//     {
//         title: "Finding Nemo",
//         genres: ["Animation", "Adventure", "Comedy"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L85MrBiZe4VhDdeGczFkEryBaUSm9OxNBW79a2ABLzpLCTdH5qasRt11inzqTTUXk2-G",
//         description: "After his son Nemo is captured from the Great Barrier Reef, a clownfish named Marlin, along with a forgetful fish named Dory, embarks on a journey to find him.",
//         releaseYear: 2003,
//         director: "Andrew Stanton",
//         cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"]
//     },
//     {
//         title: "How to Train Your Dragon",
//         genres: ["Animation", "Action", "Adventure"],
//         language: "English",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-",
//         description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
//         releaseYear: 2010,
//         director: "Dean DeBlois, Chris Sanders",
//         cast: ["Jay Baruchel", "Gerard Butler", "Craig Ferguson"]
//     },

//     // KANNADA
//     {
//         title: "Lucia",
//         genres: ["Drama", "Sci-Fi", "Thriller"],
//         language: "Kannada",
//         age_group: "Adults",
//         imageUrl: "https://sund-images.sunnxt.com/7879/1600x1200_Lucia_7879_9f31c4ca-0cc7-4655-9403-6937e4ed0216.jpg",
//         description: "A projectionist suffering from insomnia finds a strange pill that grants him vivid, lucid dreams, blurring the lines between reality and his dream world.",
//         releaseYear: 2013,
//         director: "Pawan Kumar",
//         cast: ["Sathish Ninasam", "Sruti Hariharan", "Achyuth Kumar"]
//     },
//     {
//         title: "Ugramm",
//         genres: ["Action", "Drama", "Thriller"],
//         language: "Kannada",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRn22y4LDeE11LxgHyzlfzLBaCVsrNdXXFywjNtUXESn1nVum8QsH1ZySuY7aarn123W69q",
//         description: "A man with a mysterious past gets involved in a gang war to protect a woman, uncovering a deeper conspiracy.",
//         releaseYear: 2014,
//         director: "Prashanth Neel",
//         cast: ["Srimurali", "Haripriya", "Thilak Shekar"]
//     },
//     {
//         title: "RangiTaranga",
//         genres: ["Mystery", "Thriller"],
//         language: "Kannada",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLUQIg0JjZFQroPVKqB7hTZsgUFP_9uRwiUvV_BXvSVsw1ztFmiqJXacHF8CvNTiBE_DGW",
//         description: "A writer visits his ancestral village with his wife, where a series of mysterious events and an ancient legend unfold.",
//         releaseYear: 2015,
//         director: "Anup Bhandari",
//         cast: ["Nirup Bhandari", "Radhika Chetan", "Avantika Shetty"]
//     },
//     {
//         title: "Charlie 777",
//         genres: ["Adventure", "Comedy", "Drama"],
//         language: "Kannada",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbbnIXfOYAI0VyoBzmi_2FspmrtsoWvhzHsFK0ihwmnRljDXakC1UtOSr4eB8ryDHCZ3OP",
//         description: "A lone, grumpy man's life changes forever when a stray labrador retriever named Charlie enters his life.",
//         releaseYear: 2022,
//         director: "Kiranraj K.",
//         cast: ["Rakshit Shetty", "Charlie (Dog)", "Sangeetha Sringeri"]
//     },
//     {
//         title: "Mungaru Male",
//         genres: ["Musical", "Romance"],
//         language: "Kannada",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4mhNFioUKhVIqbvWqNLnTgZI1MhihyhaIRRGHP7Fyn_cceoMyxYEu_X2f89xU-hTwcHvQ",
//         description: "A young man falls in love with a woman he meets on a rainy day, but fate has other plans as he discovers she is engaged to someone else.",
//         releaseYear: 2006,
//         director: "Yogaraj Bhat",
//         cast: ["Ganesh", "Pooja Gandhi", "Anant Nag"]
//     },

//     // MALAYALAM
//     {
//         title: "Drishyam",
//         genres: ["Crime", "Drama", "Mystery"],
//         language: "Malayalam",
//         age_group: "Adults",
//         imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/DrishyamMovie.jpg",
//         description: "A man takes desperate measures to save his family from the law after they commit an accidental crime.",
//         releaseYear: 2013,
//         director: "Jeethu Joseph",
//         cast: ["Mohanlal", "Meena", "Ansiba Hassan"]
//     },
//     {
//         title: "Bangalore Days",
//         genres: ["Comedy", "Drama", "Romance"],
//         language: "Malayalam",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8imdwzY7rRMGXd7zfNBacpee0YmPB471cPOnWKfLnw12wJx6zzn-Al4j-A3OlfVS12nESqg",
//         description: "Three cousins move to Bangalore and discover themselves, their relationships, and the true meaning of friendship and love.",
//         releaseYear: 2014,
//         director: "Anjali Menon",
//         cast: ["Dulquer Salmaan", "Nivin Pauly", "Nazriya Nazim"]
//     },
//     {
//         title: "Premam",
//         genres: ["Comedy", "Drama", "Romance"],
//         language: "Malayalam",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtDk2nDidlUBpsu6Ih6GiM2tNlKTb3bqqNXuAEBvJDKT8s--0gDnaantskLYi5WnITHFSb",
//         description: "The film follows George and his friends from their teenage years to adulthood as they navigate through love and heartbreak.",
//         releaseYear: 2015,
//         director: "Alphonse Puthren",
//         cast: ["Nivin Pauly", "Sai Pallavi", "Anupama Parameswaran"]
//     },
//     {
//         title: "Ustad Hotel",
//         genres: ["Comedy", "Drama", "Family"],
//         language: "Malayalam",
//         age_group: "Kids",
//         imageUrl: "https://m.media-amazon.com/images/M/MV5BNTU2MzI3ZTMtNjRjOC00ZDBmLTkxYzctZjZjOTk2YTQxNTJlXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
//         description: "A young, ambitious chef, aspiring to work in a top restaurant abroad, is forced to run his grandfather's traditional restaurant in Kozhikode.",
//         releaseYear: 2012,
//         director: "Anwar Rasheed",
//         cast: ["Dulquer Salmaan", "Thilakan", "Nithya Menen"]
//     },
//     {
//         title: "Kumbalangi Nights",
//         genres: ["Comedy", "Drama"],
//         language: "Malayalam",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlGAq9jCw7NdBX3qUHEUmtM8b6pf9u_Tcs00qiSlcZeNKl54YURdHFUGoMiJWheFTmBZAahQ",
//         description: "Four brothers who share a love-hate relationship with each other face various challenges in their lives, leading to emotional growth and understanding.",
//         releaseYear: 2019,
//         director: "Madhu C. Narayanan",
//         cast: ["Soubin Shahir", "Shane Nigam", "Fahadh Faasil"]
//     },

//     // TAMIL
//     {
//         title: "Anbe Sivam",
//         genres: ["Adventure", "Comedy", "Drama"],
//         language: "Tamil",
//         age_group: "Kids",
//         imageUrl: "https://static.toiimg.com/photo/61304921.cms",
//         description: "Two men with contrasting ideologies are forced to travel together, leading to a journey of self-discovery and changing perspectives.",
//         releaseYear: 2003,
//         director: "Sundar C.",
//         cast: ["Kamal Haasan", "Madhavan", "Kiran Rathod"]
//     },
//     {
//         title: "Soorarai Pottru",
//         genres: ["Drama"],
//         language: "Tamil",
//         age_group: "Adults",
//         imageUrl: "https://i.pinimg.com/736x/c6/2d/be/c62dbee4a43451ed9f97223865189631.jpg",
//         description: "Inspired by the life of G. R. Gopinath, the founder of Air Deccan, this film tells the story of a common man's dream to start a low-cost airline.",
//         releaseYear: 2020,
//         director: "Sudha Kongara",
//         cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal"]
//     },
//     {
//         title: "Jigarthanda",
//         genres: ["Action", "Comedy", "Crime"],
//         language: "Tamil",
//         age_group: "Adults",
//         imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIGv17shpLu3TuGVGtiGWnRlw2zq1EcRroCv9K9NpjW2c2cV0OT5iRb5Gtzx8AMv6HGTsH",
//         description: "A budding filmmaker tries to make a gangster film and gets entangled with a real gangster, whose life he intends to base his film on.",
//         releaseYear: 2014,
//         director: "Karthik Subbaraj",
//         cast: ["Siddharth", "Bobby Simha", "Lakshmi Menon"]
//     },
//     {
//         title: "Pasanga",
//         genres: ["Comedy", "Drama", "Family"],
//         language: "Tamil",
//         age_group: "Kids",
//         imageUrl: "https://a.ltrbxd.com/resized/film-poster/9/1/3/5/0/91350-pasanga-0-230-0-345-crop.jpg?v=13d301bbef",
//         description: "A heartwarming tale of school children, their innocent rivalries, friendships, and the complexities of their world.",
//         releaseYear: 2009,
//         director: "Pandiraj",
//         cast: ["Kishore", "Sree Raam", "Vimal"]
//     },

//     // TELUGU
//     {
//         title: "Mahanati",
//         genres: ["Action", "Comedy", "Fantasy"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURRBBbodfBiWn0Rwl8AS0D3GxNIgCQXOeWMpkmK6OPyCLU1inVzvJF4eBnRqBlKjBXqBzCA",
//         description: "A murdered man is reincarnated as a housefly and seeks revenge on the man who killed him and abducted the woman he loves.",
//         releaseYear: 2012,
//         director: "S. S. Rajamouli",
//         cast: ["Nani", "Samantha Ruth Prabhu", "Sudeep"]
//     },
//     {
//         title: "Baahubali: The Beginning",
//         genres: ["Action", "Drama"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/274431b8945f779acab499a1625c2a3c9ebe1054d112aed3e55cd89c7d2ce41c.jpg",
//         description: "In ancient India, an adventurous and powerful man discovers his true heritage and sets out to reclaim his rightful place as the king of Mahishmati.",
//         releaseYear: 2015,
//         director: "S. S. Rajamouli",
//         cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
//     },
//     {
//         title: "Srimanthudu",
//         genres: ["Action", "Drama"],
//         language: "Telugu",
//         age_group: "Adults",
//         imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MxYWYyNzAtZmNiNC00OWQxLWE0ZjgtYTcxZWM2NWY0NTQ2XkEyXkFqcGc@.V1.jpg",
//         description: "A rich man adopts a village and decides to improve its infrastructure, facing opposition from a corrupt politician.",
//         releaseYear: 2015,
//         director: "Koratala Siva",
//         cast: ["Mahesh Babu", "Shruti Haasan", "Jagapathi Babu"]
//     },
//     {
//         title: "Rangasthalam",
//         genres: ["Biography", "Drama"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg",
//         description: "The biographical film traces the life and career of legendary South Indian actress Savitri, from her humble beginnings to her iconic stardom.",
//         releaseYear: 2018,
//         director: "Nag Ashwin",
//         cast: ["Keerthy Suresh", "Dulquer Salmaan", "Samantha Ruth Prabhu"]
//     },
//     {
//         title: "Jersey",
//         genres: ["Drama", "Sport"],
//         language: "Telugu",
//         age_group: "Kids",
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWilyTtxsWZ3cnRjCHGckrnrPAOQCbYngqJeOaSCRIRFrtFe6iwBR_j85MFKU-MtV-nPbncA",
//         description: "A talented but failed cricketer decides to revive his career in his late 30s to fulfill his son's wish for a jersey.",
//         releaseYear: 2019,
//         director: "Gowtam Tinnanuri",
//         cast: ["Nani", "Shraddha Srinath", "Ronit Kamra"]
//     },
// ];



// const uniqueGenres = Array.from(new Set(moviesDataset.flatMap(movie => movie.genres)));
// const uniqueLanguages = Array.from(new Set(moviesDataset.map(movie => movie.language)));

// function MovieRecommendations() {
//     const [shuffledMovies, setShuffledMovies] = useState([]);
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [languageFilter, setLanguageFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedMovie, setSelectedMovie] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
    
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
    
//     const [showFavorites, setShowFavorites] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             let currentIndex = array.length, randomIndex;
//             const newArray = [...array];
//             while (currentIndex !== 0) {
//                 randomIndex = Math.floor(Math.random() * currentIndex);
//                 currentIndex--;
//                 [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
//             }
//             return newArray;
//         };
//         setShuffledMovies(shuffleArray(moviesDataset));
//     }, []);

//     useEffect(() => {
//         fetch("http://localhost:5001/favorites")
//             .then((res) => res.json())
//             .then((data) => setFavorites(data.favorites || []));
//     }, []);

//     const toggleFavorite = async (movieTitle) => {
//         if (favorites.includes(movieTitle)) {
//             const res = await fetch("http://localhost:5001/favorites/remove", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         } else {
//             const res = await fetch("http://localhost:5001/favorites/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         }
//     };

//     const handleRecommend = async (movieTitle, type) => {
//         if (!movieTitle.trim()) return;
//         let endpoint;
//         if (type === 'similar') endpoint = "http://localhost:5001/recommend";
//         else if (type === 'books') endpoint = "http://localhost:5001/crossrecommend/books";
//         else if (type === 'songs') endpoint = "http://localhost:5001/crossrecommend/songs";
//         else return;

//         setLoading(true);
//         setShowRecommendOptions(false);
//         try {
//             const response = await axios.post(endpoint, { movie: movieTitle });
//             setRecommendations({ type, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations based on ${movieTitle}.` });
//             setRecommendationModalVisible(true);
//         } catch (error) {
//             console.error(`Recommendation error:`, error);
//             setRecommendations({ type, items: [], explanation: `Failed to fetch recommendations. Please check server.` });
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
//             setSuggestions(moviesDataset.filter(m => m.title.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };
    
//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (movie) => setSelectedMovie(movie);
//     const closeDetailModal = () => setSelectedMovie(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredMovies = shuffledMovies.filter(m =>
//         (!ageFilter || m.age_group === ageFilter) &&
//         (!genreFilter || m.genres.includes(genreFilter)) &&
//         (!languageFilter || m.language === languageFilter) &&
//         (m.title.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const renderRecommendationItem = (item, type, i) => {
//         if (type === 'similar' || type === 'books') {
//             const title = typeof item === 'string' ? item : item.title || 'Untitled';
//             const authors = typeof item === 'object' && item.authors ? ` (Author: ${item.authors})` : '';
//             return <li style={styles.recommendListItem} key={i}>{title}{authors}</li>;
//         }
//         if (type === 'songs') {
//             const trackName = item.title || item.track_name || 'Unknown Track';
//             const artistName = item.artist || item.artist_name || 'Unknown Artist';
//             return <li style={styles.recommendListItem} key={i}>{trackName} by {artistName}</li>;
//         }
//         return <li style={styles.recommendListItem} key={i}>{JSON.stringify(item)}</li>;
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
//                         <input type="text" placeholder="Search for a movie or genre..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
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
//                                     <label style={styles.filterLabel}>Age Rating</label>
//                                     <div style={styles.buttonGroup}>
//                                         <button onClick={() => setAgeFilter('Kids')} style={ageFilter === 'Kids' ? styles.buttonActive : styles.buttonInactive}>Kids</button>
//                                         <button onClick={() => setAgeFilter('Adults')} style={ageFilter === 'Adults' ? styles.buttonActive : styles.buttonInactive}>Adults</button>
//                                     </div>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Genre</label>
//                                     <select style={styles.selectDropdown} value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}><option value="">All Genres</option>{uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}</select>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Language</label>
//                                     <select style={styles.selectDropdown} value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}><option value="">All Languages</option>{uniqueLanguages.map((l, i) => <option key={i} value={l}>{l}</option>)}</select>
//                                 </div>
//                                 <button onClick={handleResetFilters} style={styles.resetBtn}>Reset Filters</button>
//                             </div>
//                         )}
//                     </div>
//                     {/* MOVED: Show Favorites Button */}
//                     <button style={styles.filterToggleBtn} onClick={() => setShowFavorites(!showFavorites)}>
//                         <span role="img" aria-label="favorites" style={{ marginRight: '8px' }}>⭐</span> {showFavorites ? 'Hide Favorites' : 'My Favorites'}
//                     </button>
//                 </div>
//                 {showRecommendOptions && (
//                     <div style={styles.recommendOptionsContainer}>
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎬 Similar Movies</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'songs')} style={styles.optionButton}>🎵 Songs</button>
//                     </div>
//                 )}
//             </header>

//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h2 style={styles.favoritesTitle}>Your Favorites</h2>
//                     {favorites.length > 0 ? (
//                         <ul style={styles.favList}>
//                             {favorites.map((fav, i) => <li key={i}>{fav}</li>)}
//                         </ul>
//                     ) : (
//                         <p>You haven't added any favorites yet.</p>
//                     )}
//                 </div>
//             )}

//             <h2 style={styles.title}>Movie Collection</h2>
//             <div style={styles.movieGrid}>
//                 {filteredMovies.map((movie) => (
//                     <div style={styles.movieCard} key={movie.title} >
//                         <img src={movie.imageUrl} alt={movie.title} style={styles.movieImage} onClick={() => openDetailModal(movie)} />
//                         <button 
//                             style={favorites.includes(movie.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { 
//                                 e.stopPropagation(); 
//                                 toggleFavorite(movie.title);
//                             }}
//                         >
//                             {favorites.includes(movie.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(movie)}>
//                             <h3 style={styles.cardTitle}>{movie.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedMovie && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedMovie.imageUrl})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedMovie.imageUrl} alt={selectedMovie.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <h2 style={styles.modalTitle}>{selectedMovie.title} ({selectedMovie.releaseYear})</h2>
//                                 <p style={styles.modalMeta}>{selectedMovie.genres.join(" / ")}</p>
//                                 <p style={styles.modalDescription}>{selectedMovie.description}</p>
//                                 <p style={styles.modalMeta}><strong>Director:</strong> {selectedMovie.director}</p>
//                                 <p style={styles.modalMeta}><strong>Cast:</strong> {selectedMovie.cast.join(", ")}</p>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedMovie.title); }} style={favorites.includes(selectedMovie.title) ? styles.favBtnActive : styles.favBtn}>
//                                         {favorites.includes(selectedMovie.title) ? "♥ Favorited" : "♡ Add to Favorites"}
//                                     </button>
//                                 </div>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Similar Movies</button>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'songs')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Songs</button>
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

//     favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '800px', border: '1px solid #333' },
//     favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },
//     favList: { listStyle: 'decimal', paddingLeft: '20px', textAlign: 'left' },

//     movieGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     movieCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     movieImage: { width: "100%", height: "330px", objectFit: "cover", display: 'block' },
//     cardFavBtn: {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         background: 'rgba(0,0,0,0.6)',
//         color: 'white',
//         border: 'none',
//         borderRadius: '50%',
//         width: '35px',
//         height: '35px',
//         fontSize: '1.2rem',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 5,
//     },
//     cardFavBtnActive: {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         background: 'rgba(0,0,0,0.6)',
//         color: '#e50914',
//         border: 'none',
//         borderRadius: '50%',
//         width: '35px',
//         height: '35px',
//         fontSize: '1.5rem',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 5,
//     },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '330px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1 },
//     modalTitle: { margin: '0 0 10px 0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1rem', color: '#bbb', margin: '4px 0' },
//     modalDescription: { fontSize: '1rem', color: '#ddd', lineHeight: 1.7, margin: '20px 0', flexGrow: 1 },
//     favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '15px' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '10px 0', borderBottom: '1px dotted #333' }
// };

// export default MovieRecommendations;


//-----------------------only movie favs
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const moviesDataset = [
    // HINDI
    {
        title: "Kahaani",
        genres: ["Drama", "Mystery", "Thriller"],
        language: "Hindi",
        age_group: "Adults",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTgWAiq0rK460S91aiXcyz6EpCMY9ds-59D0OBUaWnYdAku-Oe1_U-uih5AVSbM__DLCTVx",
        description: "A pregnant woman's relentless search for her missing husband in Kolkata unearths a web of secrets and lies.",
        releaseYear: 2012,
        director: "Sujoy Ghosh",
        cast: ["Vidya Balan", "Parambrata Chatterjee", "Nawazuddin Siddiqui"]
    },
    {
        title: "Barfi!",
        genres: ["Comedy", "Drama", "Romance"],
        language: "Hindi",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_P8v3u_TqWjTujo6ACYc1jsOIyS5cgAIU4UNlXXcN6Fl3Xb1-WCGqleyzn6Tq9FfmtJn5wA",
        description: "A charming, deaf-mute man, Barfi, falls in love with two women, Shruti and Jhilmil, navigating life's challenges with a smile.",
        releaseYear: 2012,
        director: "Anurag Basu",
        cast: ["Ranbir Kapoor", "Priyanka Chopra", "Ileana D'Cruz"]
    },
    {
        title: "OMG: Oh My God!",
        genres: ["Comedy", "Drama", "Fantasy"],
        language: "Hindi",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS8mXcfEqaWbRqkNK2RUcsb_ffWZwFR938iClW0YYFWDKjC8KpGiiDwH1B8lXL1Bgjl1JtrLQ",
        description: "An atheist shopkeeper sues God after an earthquake destroys his shop, leading to an extraordinary legal battle.",
        releaseYear: 2012,
        director: "Umesh Shukla",
        cast: ["Paresh Rawal", "Akshay Kumar", "Mithun Chakraborty"]
    },
    {
        title: "Paan Singh Tomar",
        genres: ["Biography", "Crime", "Drama"],
        language: "Hindi",
        age_group: "Adults",
        imageUrl: "https://cdn.shopclues.com/images/thumbnails/4501/320/320/paansinghtomar400x400imad7wsxhyfsyy2q1399984547.jpg",
        description: "The true story of an Indian athlete who becomes a dacoit (bandit) after facing injustice.",
        releaseYear: 2012,
        director: "Tigmanshu Dhulia",
        cast: ["Irrfan Khan", "Mahie Gill", "Vipin Sharma"]
    },
    {
        title: "Taare Zameen Par",
        genres: ["Drama", "Family"],
        language: "Hindi",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoIFyKAL4ldG54LGrepUXMraXASXkEmk4b79Uv_tPy35dtC1fmCTz3VBAfC9wR-ZugQjiB",
        description: "An 8-year-old boy is thought to be a lazy troublemaker, until the new art teacher discovers he has dyslexia and helps him to discover his true potential.",
        releaseYear: 2007,
        director: "Aamir Khan",
        cast: ["Darsheel Safary", "Aamir Khan", "Tisca Chopra"]
    },

    // ENGLISH
    {
        title: "The Dark Knight Rises",
        genres: ["Action", "Thriller"],
        language: "English",
        age_group: "Adults",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBA5a1V4L0WZ7vOB8DLuZmWwdouli_6N1BUE9Lj46_Sx2Pzd5Hy9P7GNbXBL0a_fPcTrD",
        description: "Eight years after the Joker's reign of anarchy, Batman is forced to return from his exile to save Gotham City from the brutal guerrilla terrorist Bane.",
        releaseYear: 2012,
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Tom Hardy", "Anne Hathaway"]
    },
    {
        title: "Inception",
        genres: ["Action", "Adventure", "Sci-Fi"],
        language: "English",
        age_group: "Adults",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        releaseYear: 2010,
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"]
    },
    {
        title: "The Avengers",
        genres: ["Action", "Adventure", "Sci-Fi"],
        language: "English",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQluFl3GfQDXohBaH-xG3GuRi8T4MDIQPRpCqUGLiE5tXdXbUO0hRFwnshvzg07igEgGg7i",
        description: "Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.",
        releaseYear: 2012,
        director: "Joss Whedon",
        cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"]
    },
    {
        title: "Spirited Away",
        genres: ["Animation", "Fantasy"],
        language: "English",
        age_group: "Kids",
        imageUrl: "https://image.tmdb.org/t/p/w500/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg",
        description: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        releaseYear: 2001,
        director: "Hayao Miyazaki",
        cast: ["Daveigh Chase", "Suzanne Pleshette", "Jason Marsden"]
    },
    {
        title: "The Dark Knight",
        genres: ["Action", "Crime"],
        language: "English",
        age_group: "Adults",
        imageUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        releaseYear: 2008,
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"]
    },
    {
        title: "Interstellar",
        genres: ["Sci-Fi", "Adventure"],
        language: "English",
        age_group: "Adults",
        imageUrl: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        releaseYear: 2014,
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    },
    {
        title: "The Matrix",
        genres: ["Sci-Fi", "Action"],
        language: "English",
        age_group: "Adults",
        imageUrl: "https://m.media-amazon.com/images/I/51EG732BV3L.AC.jpg",
        description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
        releaseYear: 1999,
        director: "The Wachowskis",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        title: "Parasite",
        genres: ["Thriller", "Drama"],
        language: "English",
        age_group: "Adults",
        imageUrl: "https://m.media-amazon.com/images/I/71c05lTE03L.AC_SY679.jpg",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim family.",
        releaseYear: 2019,
        director: "Bong Joon Ho",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"]
    },
    {
        title: "Coco",
        genres: ["Animation", "Family"],
        language: "English",
        age_group: "Kids",
        imageUrl: "https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg",
        description: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
        releaseYear: 2017,
        director: "Lee Unkrich",
        cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"]
    },
    {
        title: "Joker",
        genres: ["Drama", "Crime"],
        language: "English",
        age_group: "Adults",
        imageUrl: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "A mentally troubled comedian embarks on a downward spiral that leads him to embrace his alter-ego: the Joker.",
        releaseYear: 2019,
        director: "Todd Phillips",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"]
    },
    {
        title: "Finding Nemo",
        genres: ["Animation", "Adventure", "Comedy"],
        language: "English",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_L85MrBiZe4VhDdeGczFkEryBaUSm9OxNBW79a2ABLzpLCTdH5qasRt11inzqTTUXk2-G",
        description: "After his son Nemo is captured from the Great Barrier Reef, a clownfish named Marlin, along with a forgetful fish named Dory, embarks on a journey to find him.",
        releaseYear: 2003,
        director: "Andrew Stanton",
        cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"]
    },
    {
        title: "How to Train Your Dragon",
        genres: ["Animation", "Action", "Adventure"],
        language: "English",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-",
        description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.",
        releaseYear: 2010,
        director: "Dean DeBlois, Chris Sanders",
        cast: ["Jay Baruchel", "Gerard Butler", "Craig Ferguson"]
    },

    // KANNADA
    {
        title: "Lucia",
        genres: ["Drama", "Sci-Fi", "Thriller"],
        language: "Kannada",
        age_group: "Adults",
        imageUrl: "https://sund-images.sunnxt.com/7879/1600x1200_Lucia_7879_9f31c4ca-0cc7-4655-9403-6937e4ed0216.jpg",
        description: "A projectionist suffering from insomnia finds a strange pill that grants him vivid, lucid dreams, blurring the lines between reality and his dream world.",
        releaseYear: 2013,
        director: "Pawan Kumar",
        cast: ["Sathish Ninasam", "Sruti Hariharan", "Achyuth Kumar"]
    },
    {
        title: "Ugramm",
        genres: ["Action", "Drama", "Thriller"],
        language: "Kannada",
        age_group: "Adults",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRn22y4LDeE11LxgHyzlfzLBaCVsrNdXXFywjNtUXESn1nVum8QsH1ZySuY7aarn123W69q",
        description: "A man with a mysterious past gets involved in a gang war to protect a woman, uncovering a deeper conspiracy.",
        releaseYear: 2014,
        director: "Prashanth Neel",
        cast: ["Srimurali", "Haripriya", "Thilak Shekar"]
    },
    {
        title: "RangiTaranga",
        genres: ["Mystery", "Thriller"],
        language: "Kannada",
        age_group: "Adults",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRLUQIg0JjZFQroPVKqB7hTZsgUFP_9uRwiUvV_BXvSVsw1ztFmiqJXacHF8CvNTiBE_DGW",
        description: "A writer visits his ancestral village with his wife, where a series of mysterious events and an ancient legend unfold.",
        releaseYear: 2015,
        director: "Anup Bhandari",
        cast: ["Nirup Bhandari", "Radhika Chetan", "Avantika Shetty"]
    },
    {
        title: "Charlie 777",
        genres: ["Adventure", "Comedy", "Drama"],
        language: "Kannada",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbbnIXfOYAI0VyoBzmi_2FspmrtsoWvhzHsFK0ihwmnRljDXakC1UtOSr4eB8ryDHCZ3OP",
        description: "A lone, grumpy man's life changes forever when a stray labrador retriever named Charlie enters his life.",
        releaseYear: 2022,
        director: "Kiranraj K.",
        cast: ["Rakshit Shetty", "Charlie (Dog)", "Sangeetha Sringeri"]
    },
    {
        title: "Mungaru Male",
        genres: ["Musical", "Romance"],
        language: "Kannada",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ4mhNFioUKhVIqbvWqNLnTgZI1MhihyhaIRRGHP7Fyn_cceoMyxYEu_X2f89xU-hTwcHvQ",
        description: "A young man falls in love with a woman he meets on a rainy day, but fate has other plans as he discovers she is engaged to someone else.",
        releaseYear: 2006,
        director: "Yogaraj Bhat",
        cast: ["Ganesh", "Pooja Gandhi", "Anant Nag"]
    },

    // MALAYALAM
    {
        title: "Drishyam",
        genres: ["Crime", "Drama", "Mystery"],
        language: "Malayalam",
        age_group: "Adults",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/DrishyamMovie.jpg",
        description: "A man takes desperate measures to save his family from the law after they commit an accidental crime.",
        releaseYear: 2013,
        director: "Jeethu Joseph",
        cast: ["Mohanlal", "Meena", "Ansiba Hassan"]
    },
    {
        title: "Bangalore Days",
        genres: ["Comedy", "Drama", "Romance"],
        language: "Malayalam",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8imdwzY7rRMGXd7zfNBacpee0YmPB471cPOnWKfLnw12wJx6zzn-Al4j-A3OlfVS12nESqg",
        description: "Three cousins move to Bangalore and discover themselves, their relationships, and the true meaning of friendship and love.",
        releaseYear: 2014,
        director: "Anjali Menon",
        cast: ["Dulquer Salmaan", "Nivin Pauly", "Nazriya Nazim"]
    },
    {
        title: "Premam",
        genres: ["Comedy", "Drama", "Romance"],
        language: "Malayalam",
        age_group: "Adults",
        imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRtDk2nDidlUBpsu6Ih6GiM2tNlKTb3bqqNXuAEBvJDKT8s--0gDnaantskLYi5WnITHFSb",
        description: "The film follows George and his friends from their teenage years to adulthood as they navigate through love and heartbreak.",
        releaseYear: 2015,
        director: "Alphonse Puthren",
        cast: ["Nivin Pauly", "Sai Pallavi", "Anupama Parameswaran"]
    },
    {
        title: "Ustad Hotel",
        genres: ["Comedy", "Drama", "Family"],
        language: "Malayalam",
        age_group: "Kids",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BNTU2MzI3ZTMtNjRjOC00ZDBmLTkxYzctZjZjOTk2YTQxNTJlXkEyXkFqcGc@.V1_FMjpg_UX1000.jpg",
        description: "A young, ambitious chef, aspiring to work in a top restaurant abroad, is forced to run his grandfather's traditional restaurant in Kozhikode.",
        releaseYear: 2012,
        director: "Anwar Rasheed",
        cast: ["Dulquer Salmaan", "Thilakan", "Nithya Menen"]
    },
    {
        title: "Kumbalangi Nights",
        genres: ["Comedy", "Drama"],
        language: "Malayalam",
        age_group: "Adults",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlGAq9jCw7NdBX3qUHEUmtM8b6pf9u_Tcs00qiSlcZeNKl54YURdHFUGoMiJWheFTmBZAahQ",
        description: "Four brothers who share a love-hate relationship with each other face various challenges in their lives, leading to emotional growth and understanding.",
        releaseYear: 2019,
        director: "Madhu C. Narayanan",
        cast: ["Soubin Shahir", "Shane Nigam", "Fahadh Faasil"]
    },

    // TAMIL
    {
        title: "Anbe Sivam",
        genres: ["Adventure", "Comedy", "Drama"],
        language: "Tamil",
        age_group: "Kids",
        imageUrl: "https://static.toiimg.com/photo/61304921.cms",
        description: "Two men with contrasting ideologies are forced to travel together, leading to a journey of self-discovery and changing perspectives.",
        releaseYear: 2003,
        director: "Sundar C.",
        cast: ["Kamal Haasan", "Madhavan", "Kiran Rathod"]
    },
    {
        title: "Soorarai Pottru",
        genres: ["Drama"],
        language: "Tamil",
        age_group: "Adults",
        imageUrl: "https://i.pinimg.com/736x/c6/2d/be/c62dbee4a43451ed9f97223865189631.jpg",
        description: "Inspired by the life of G. R. Gopinath, the founder of Air Deccan, this film tells the story of a common man's dream to start a low-cost airline.",
        releaseYear: 2020,
        director: "Sudha Kongara",
        cast: ["Suriya", "Aparna Balamurali", "Paresh Rawal"]
    },
    {
        title: "Jigarthanda",
        genres: ["Action", "Comedy", "Crime"],
        language: "Tamil",
        age_group: "Adults",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTIGv17shpLu3TuGVGtiGWnRlw2zq1EcRroCv9K9NpjW2c2cV0OT5iRb5Gtzx8AMv6HGTsH",
        description: "A budding filmmaker tries to make a gangster film and gets entangled with a real gangster, whose life he intends to base his film on.",
        releaseYear: 2014,
        director: "Karthik Subbaraj",
        cast: ["Siddharth", "Bobby Simha", "Lakshmi Menon"]
    },
    {
        title: "Pasanga",
        genres: ["Comedy", "Drama", "Family"],
        language: "Tamil",
        age_group: "Kids",
        imageUrl: "https://a.ltrbxd.com/resized/film-poster/9/1/3/5/0/91350-pasanga-0-230-0-345-crop.jpg?v=13d301bbef",
        description: "A heartwarming tale of school children, their innocent rivalries, friendships, and the complexities of their world.",
        releaseYear: 2009,
        director: "Pandiraj",
        cast: ["Kishore", "Sree Raam", "Vimal"]
    },

    // TELUGU
    {
        title: "Mahanati",
        genres: ["Action", "Comedy", "Fantasy"],
        language: "Telugu",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURRBBbodfBiWn0Rwl8AS0D3GxNIgCQXOeWMpkmK6OPyCLU1inVzvJF4eBnRqBlKjBXqBzCA",
        description: "A murdered man is reincarnated as a housefly and seeks revenge on the man who killed him and abducted the woman he loves.",
        releaseYear: 2012,
        director: "S. S. Rajamouli",
        cast: ["Nani", "Samantha Ruth Prabhu", "Sudeep"]
    },
    {
        title: "Baahubali: The Beginning",
        genres: ["Action", "Drama"],
        language: "Telugu",
        age_group: "Kids",
        imageUrl: "https://m.media-amazon.com/images/S/pv-target-images/274431b8945f779acab499a1625c2a3c9ebe1054d112aed3e55cd89c7d2ce41c.jpg",
        description: "In ancient India, an adventurous and powerful man discovers his true heritage and sets out to reclaim his rightful place as the king of Mahishmati.",
        releaseYear: 2015,
        director: "S. S. Rajamouli",
        cast: ["Prabhas", "Rana Daggubati", "Anushka Shetty"]
    },
    {
        title: "Srimanthudu",
        genres: ["Action", "Drama"],
        language: "Telugu",
        age_group: "Adults",
        imageUrl: "https://m.media-amazon.com/images/M/MV5BM2MxYWYyNzAtZmNiNC00OWQxLWE0ZjgtYTcxZWM2NWY0NTQ2XkEyXkFqcGc@.V1.jpg",
        description: "A rich man adopts a village and decides to improve its infrastructure, facing opposition from a corrupt politician.",
        releaseYear: 2015,
        director: "Koratala Siva",
        cast: ["Mahesh Babu", "Shruti Haasan", "Jagapathi Babu"]
    },
    {
        title: "Rangasthalam",
        genres: ["Biography", "Drama"],
        language: "Telugu",
        age_group: "Kids",
        imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5d/Rangasthalam.jpg",
        description: "The biographical film traces the life and career of legendary South Indian actress Savitri, from her humble beginnings to her iconic stardom.",
        releaseYear: 2018,
        director: "Nag Ashwin",
        cast: ["Keerthy Suresh", "Dulquer Salmaan", "Samantha Ruth Prabhu"]
    },
    {
        title: "Jersey",
        genres: ["Drama", "Sport"],
        language: "Telugu",
        age_group: "Kids",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWilyTtxsWZ3cnRjCHGckrnrPAOQCbYngqJeOaSCRIRFrtFe6iwBR_j85MFKU-MtV-nPbncA",
        description: "A talented but failed cricketer decides to revive his career in his late 30s to fulfill his son's wish for a jersey.",
        releaseYear: 2019,
        director: "Gowtam Tinnanuri",
        cast: ["Nani", "Shraddha Srinath", "Ronit Kamra"]
    },
];

// const uniqueGenres = Array.from(new Set(moviesDataset.flatMap(movie => movie.genres)));
// const uniqueLanguages = Array.from(new Set(moviesDataset.map(movie => movie.language)));
// // Create a Set of all movie titles for efficient filtering of favorites
// const allMovieTitles = new Set(moviesDataset.map(movie => movie.title));

// function MovieRecommendations() {
//     const [shuffledMovies, setShuffledMovies] = useState([]);
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [languageFilter, setLanguageFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedMovie, setSelectedMovie] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
//     const [showFavorites, setShowFavorites] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         const shuffleArray = (array) => {
//             let currentIndex = array.length, randomIndex;
//             const newArray = [...array];
//             while (currentIndex !== 0) {
//                 randomIndex = Math.floor(Math.random() * currentIndex);
//                 currentIndex--;
//                 [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
//             }
//             return newArray;
//         };
//         setShuffledMovies(shuffleArray(moviesDataset));
//     }, []);

//     useEffect(() => {
//         fetch("http://localhost:5001/favorites")
//             .then((res) => res.json())
//             .then((data) => setFavorites(data.favorites || []));
//     }, []);

//     const toggleFavorite = async (movieTitle) => {
//         if (favorites.includes(movieTitle)) {
//             const res = await fetch("http://localhost:5001/favorites/remove", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         } else {
//             const res = await fetch("http://localhost:5001/favorites/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
//             const data = await res.json();
//             setFavorites(data.favorites || []);
//         }
//     };

//     const handleRecommend = async (movieTitle, type) => {
//         if (!movieTitle.trim()) return;
//         let endpoint;
//         if (type === 'similar') endpoint = "http://localhost:5001/recommend";
//         else if (type === 'books') endpoint = "http://localhost:5001/crossrecommend/books";
//         else if (type === 'songs') endpoint = "http://localhost:5001/crossrecommend/songs";
//         else return;

//         setLoading(true);
//         setShowRecommendOptions(false);
//         try {
//             const response = await axios.post(endpoint, { movie: movieTitle });
//             setRecommendations({ type, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations based on ${movieTitle}.` });
//             setRecommendationModalVisible(true);
//         } catch (error) {
//             console.error(`Recommendation error:`, error);
//             setRecommendations({ type, items: [], explanation: `Failed to fetch recommendations. Please check server.` });
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
//             setSuggestions(moviesDataset.filter(m => m.title.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };
    
//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (movie) => setSelectedMovie(movie);
//     const closeDetailModal = () => setSelectedMovie(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredMovies = shuffledMovies.filter(m =>
//         (!ageFilter || m.age_group === ageFilter) &&
//         (!genreFilter || m.genres.includes(genreFilter)) &&
//         (!languageFilter || m.language === languageFilter) &&
//         (m.title.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
    
//     // UPDATED: This now only includes favorites that are in the movies dataset
//     const favoriteMovies = favorites.filter(fav => allMovieTitles.has(fav));

//     const renderRecommendationItem = (item, type, i) => {
//         if (type === 'similar' || type === 'books') {
//             const title = typeof item === 'string' ? item : item.title || 'Untitled';
//             const authors = typeof item === 'object' && item.authors ? ` (Author: ${item.authors})` : '';
//             return <li style={styles.recommendListItem} key={i}>{title}{authors}</li>;
//         }
//         if (type === 'songs') {
//             const trackName = item.title || item.track_name || 'Unknown Track';
//             const artistName = item.artist || item.artist_name || 'Unknown Artist';
//             return <li style={styles.recommendListItem} key={i}>{trackName} by {artistName}</li>;
//         }
//         return <li style={styles.recommendListItem} key={i}>{JSON.stringify(item)}</li>;
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
//                         <input type="text" placeholder="Search for a movie or genre..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
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
//                                     <label style={styles.filterLabel}>Age Rating</label>
//                                     <div style={styles.buttonGroup}>
//                                         <button onClick={() => setAgeFilter('Kids')} style={ageFilter === 'Kids' ? styles.buttonActive : styles.buttonInactive}>Kids</button>
//                                         <button onClick={() => setAgeFilter('Adults')} style={ageFilter === 'Adults' ? styles.buttonActive : styles.buttonInactive}>Adults</button>
//                                     </div>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Genre</label>
//                                     <select style={styles.selectDropdown} value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}><option value="">All Genres</option>{uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}</select>
//                                 </div>
//                                 <div style={styles.filterGroup}>
//                                     <label style={styles.filterLabel}>Language</label>
//                                     <select style={styles.selectDropdown} value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}><option value="">All Languages</option>{uniqueLanguages.map((l, i) => <option key={i} value={l}>{l}</option>)}</select>
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
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎬 Similar Movies</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'songs')} style={styles.optionButton}>🎵 Songs</button>
//                     </div>
//                 )}
//             </header>

//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h2 style={styles.favoritesTitle}>Your Favorite Movies</h2>
//                     {favoriteMovies.length > 0 ? (
//                         <ul style={styles.favList}>
//                             {favoriteMovies.map((fav, i) => <li key={i}>{fav}</li>)}
//                         </ul>
//                     ) : (
//                         <p>You haven't added any favorite movies yet.</p>
//                     )}
//                 </div>
//             )}

//             <h2 style={styles.title}>Movie Collection</h2>
//             <div style={styles.movieGrid}>
//                 {filteredMovies.map((movie) => (
//                     <div style={styles.movieCard} key={movie.title} >
//                         <img src={movie.imageUrl} alt={movie.title} style={styles.movieImage} onClick={() => openDetailModal(movie)} />
//                         <button 
//                             style={favorites.includes(movie.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { 
//                                 e.stopPropagation(); 
//                                 toggleFavorite(movie.title);
//                             }}
//                         >
//                             {favorites.includes(movie.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(movie)}>
//                             <h3 style={styles.cardTitle}>{movie.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedMovie && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedMovie.imageUrl})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedMovie.imageUrl} alt={selectedMovie.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <h2 style={styles.modalTitle}>{selectedMovie.title} ({selectedMovie.releaseYear})</h2>
//                                 <p style={styles.modalMeta}>{selectedMovie.genres.join(" / ")}</p>
//                                 <p style={styles.modalDescription}>{selectedMovie.description}</p>
//                                 <p style={styles.modalMeta}><strong>Director:</strong> {selectedMovie.director}</p>
//                                 <p style={styles.modalMeta}><strong>Cast:</strong> {selectedMovie.cast.join(", ")}</p>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedMovie.title); }} style={favorites.includes(selectedMovie.title) ? styles.favBtnActive : styles.favBtn}>
//                                         {favorites.includes(selectedMovie.title) ? "♥ Favorited" : "♡ Add to Favorites"}
//                                     </button>
//                                 </div>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Similar Movies</button>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
//                                     <button onClick={() => handleRecommend(selectedMovie.title, 'songs')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Songs</button>
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

//     favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '800px', border: '1px solid #333' },
//     favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },
//     favList: { listStyle: 'decimal', paddingLeft: '20px', textAlign: 'left' },

//     movieGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     movieCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     movieImage: { width: "100%", height: "330px", objectFit: "cover", display: 'block' },
//     cardFavBtn: {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         background: 'rgba(0,0,0,0.6)',
//         color: 'white',
//         border: 'none',
//         borderRadius: '50%',
//         width: '35px',
//         height: '35px',
//         fontSize: '1.2rem',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 5,
//     },
//     cardFavBtnActive: {
//         position: 'absolute',
//         top: '10px',
//         right: '10px',
//         background: 'rgba(0,0,0,0.6)',
//         color: '#e50914',
//         border: 'none',
//         borderRadius: '50%',
//         width: '35px',
//         height: '35px',
//         fontSize: '1.5rem',
//         cursor: 'pointer',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         zIndex: 5,
//     },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '330px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1 },
//     modalTitle: { margin: '0 0 10px 0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1rem', color: '#bbb', margin: '4px 0' },
//     modalDescription: { fontSize: '1rem', color: '#ddd', lineHeight: 1.7, margin: '20px 0', flexGrow: 1 },
//     favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '15px' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '10px 0', borderBottom: '1px dotted #333' }
// };

// export default MovieRecommendations;


// (Assuming moviesDataset is imported or defined above)
const uniqueGenres = Array.from(new Set(moviesDataset.flatMap(movie => movie.genres)));
const uniqueLanguages = Array.from(new Set(moviesDataset.map(movie => movie.language)));
// Create a Set of all movie titles for efficient filtering of favorites
const allMovieTitles = new Set(moviesDataset.map(movie => movie.title));

function MovieRecommendations() {
    const [shuffledMovies, setShuffledMovies] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [recommendations, setRecommendations] = useState({ type: null, items: [], explanation: "" });
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("");
    const [languageFilter, setLanguageFilter] = useState("");
    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
    const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showRecommendOptions, setShowRecommendOptions] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const shuffleArray = (array) => {
            let currentIndex = array.length, randomIndex;
            const newArray = [...array];
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [newArray[currentIndex], newArray[randomIndex]] = [newArray[randomIndex], newArray[currentIndex]];
            }
            return newArray;
        };
        setShuffledMovies(shuffleArray(moviesDataset));
    }, []);

    useEffect(() => {
        fetch("http://localhost:5001/favorites")
            .then((res) => res.json())
            .then((data) => setFavorites(data.favorites || []));
    }, []);

    const toggleFavorite = async (movieTitle) => {
        if (favorites.includes(movieTitle)) {
            const res = await fetch("http://localhost:5001/favorites/remove", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
            const data = await res.json();
            setFavorites(data.favorites || []);
        } else {
            const res = await fetch("http://localhost:5001/favorites/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ movie: movieTitle }) });
            const data = await res.json();
            setFavorites(data.favorites || []);
        }
    };

    const handleRecommend = async (movieTitle, type) => {
        if (!movieTitle.trim()) return;
        let endpoint;
        if (type === 'similar') endpoint = "http://localhost:5001/recommend";
        else if (type === 'books') endpoint = "http://localhost:5001/crossrecommend/books";
        else if (type === 'songs') endpoint = "http://localhost:5001/crossrecommend/songs";
        else return;

        setLoading(true);
        setShowRecommendOptions(false);
        try {
            const response = await axios.post(endpoint, { movie: movieTitle });
            setRecommendations({ type, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations based on ${movieTitle}.` });
            setRecommendationModalVisible(true);
        } catch (error) {
            console.error(`Recommendation error:`, error);
            setRecommendations({ type, items: [], explanation: `Failed to fetch recommendations. Please check server.` });
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
            setSuggestions(moviesDataset.filter(m => m.title.toLowerCase().includes(query.toLowerCase())));
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };
    
    const onSuggestionClick = (title) => {
        setSearchQuery(title);
        setShowSuggestions(false);
    };

    const openDetailModal = (movie) => setSelectedMovie(movie);
    const closeDetailModal = () => setSelectedMovie(null);
    const closeRecommendationModal = () => setRecommendationModalVisible(false);
    const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); };
    const goToDashboard = () => navigate("/dashboard");
    const handleLogout = () => navigate("/");

    const filteredMovies = shuffledMovies.filter(m =>
        (!ageFilter || m.age_group === ageFilter) &&
        (!genreFilter || m.genres.includes(genreFilter)) &&
        (!languageFilter || m.language === languageFilter) &&
        (m.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    // This is an array of movie *titles* that are in your favorites
    const favoriteMovies = favorites.filter(fav => allMovieTitles.has(fav));

    const renderRecommendationItem = (item, type, i) => {
        if (type === 'similar' || type === 'books') {
            const title = typeof item === 'string' ? item : item.title || 'Untitled';
            const authors = typeof item === 'object' && item.authors ? ` (Author: ${item.authors})` : '';
            return <li style={styles.recommendListItem} key={i}>{title}{authors}</li>;
        }
        if (type === 'songs') {
            const trackName = item.title || item.track_name || 'Unknown Track';
            const artistName = item.artist || item.artist_name || 'Unknown Artist';
            return <li style={styles.recommendListItem} key={i}>{trackName} by {artistName}</li>;
        }
        return <li style={styles.recommendListItem} key={i}>{JSON.stringify(item)}</li>;
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

            {/* --- THIS HEADER IS NOW RESTORED --- */}
            <header style={styles.header}>
                <h1 style={styles.mainTitle}>Find Your Next Obsession</h1>
                <div style={styles.controlsContainer}>
                    <div style={{ position: 'relative' }}>
                        <input type="text" placeholder="Search for a movie or genre..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
                        {showSuggestions && suggestions.length > 0 && (
                             <ul style={styles.suggestionsBox}>
                                 {suggestions.map(s => <li key={s.title} style={styles.suggestionItem} onMouseDown={() => onSuggestionClick(s.title)}>{s.title}</li>)}
                             </ul>
                        )}
                    </div>
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
                                    <label style={styles.filterLabel}>Age Rating</label>
                                    <div style={styles.buttonGroup}>
                                        <button onClick={() => setAgeFilter('Kids')} style={ageFilter === 'Kids' ? styles.buttonActive : styles.buttonInactive}>Kids</button>
                                        <button onClick={() => setAgeFilter('Adults')} style={ageFilter === 'Adults' ? styles.buttonActive : styles.buttonInactive}>Adults</button>
                                    </div>
                                </div>
                                <div style={styles.filterGroup}>
                                    <label style={styles.filterLabel}>Genre</label>
                                    <select style={styles.selectDropdown} value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}><option value="">All Genres</option>{uniqueGenres.map((g, i) => <option key={i} value={g}>{g}</option>)}</select>
                                </div>
                                <div style={styles.filterGroup}>
                                    <label style={styles.filterLabel}>Language</label>
                                    <select style={styles.selectDropdown} value={languageFilter} onChange={(e) => setLanguageFilter(e.target.value)}><option value="">All Languages</option>{uniqueLanguages.map((l, i) => <option key={i} value={l}>{l}</option>)}</select>
                                </div>
                                <button onClick={handleResetFilters} style={styles.resetBtn}>Reset Filters</button>
                            </div>
                        )}
                    </div>
                    <button style={styles.filterToggleBtn} onClick={() => setShowFavorites(!showFavorites)}>
                        <span role="img" aria-label="favorites" style={{ marginRight: '8px' }}>⭐</span> {showFavorites ? 'Hide Favorites' : 'My Favorites'}
                    </button>
                </div>
                {showRecommendOptions && (
                    <div style={styles.recommendOptionsContainer}>
                        <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎬 Similar Movies</button>
                        <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
                        <button onClick={() => handleRecommend(searchQuery, 'songs')} style={styles.optionButton}>🎵 Songs</button>
                    </div>
                )}
            </header>
            {/* --- END OF RESTORED HEADER --- */}


            {/* --- THIS BLOCK IS MODIFIED --- */}
            {showFavorites && (
                <div style={styles.favoritesSection}>
                    <h2 style={styles.favoritesTitle}>Your Favorite Movies</h2>
                    {favoriteMovies.length > 0 ? (
                        <div style={styles.movieGrid}>
                            {favoriteMovies.map((favTitle) => {
                                // Find the full movie object from the dataset
                                const movie = moviesDataset.find(m => m.title === favTitle);
                                // If for some reason it's not found, skip rendering
                                if (!movie) return null; 

                                // Render the movie card
                                return (
                                    <div style={styles.movieCard} key={movie.title} >
                                        <img src={movie.imageUrl} alt={movie.title} style={styles.movieImage} onClick={() => openDetailModal(movie)} />
                                        <button 
                                            // Button is always active in this section
                                            style={styles.cardFavBtnActive} 
                                            onClick={(e) => { 
                                                e.stopPropagation(); 
                                                toggleFavorite(movie.title); // Click to remove
                                            }}
                                        >
                                            {"♥"}
                                        </button>
                                        <div style={styles.cardOverlay} onClick={() => openDetailModal(movie)}>
                                            <h3 style={styles.cardTitle}>{movie.title}</h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p>You haven't added any favorite movies yet.</p>
                    )}
                </div>
            )}
            {/* --- END OF MODIFIED BLOCK --- */}


            <h2 style={styles.title}>Movie Collection</h2>
            <div style={styles.movieGrid}>
                {filteredMovies.map((movie) => (
                    <div style={styles.movieCard} key={movie.title} >
                        <img src={movie.imageUrl} alt={movie.title} style={styles.movieImage} onClick={() => openDetailModal(movie)} />
                        <button 
                            style={favorites.includes(movie.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
                            onClick={(e) => { 
                                e.stopPropagation(); 
                                toggleFavorite(movie.title);
                            }}
                        >
                            {favorites.includes(movie.title) ? "♥" : "♡"}
                        </button>
                        <div style={styles.cardOverlay} onClick={() => openDetailModal(movie)}>
                            <h3 style={styles.cardTitle}>{movie.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedMovie && (
                <div style={styles.modalOverlay} onClick={closeDetailModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedMovie.imageUrl})`}}></div>
                        <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
                        <div style={styles.modalHeader}>
                            <img src={selectedMovie.imageUrl} alt={selectedMovie.title} style={styles.modalPoster} />
                            <div style={styles.modalInfo}>
                                <h2 style={styles.modalTitle}>{selectedMovie.title} ({selectedMovie.releaseYear})</h2>
                                <p style={styles.modalMeta}>{selectedMovie.genres.join(" / ")}</p>
                                <p style={styles.modalDescription}>{selectedMovie.description}</p>
                                <p style={styles.modalMeta}><strong>Director:</strong> {selectedMovie.director}</p>
                                <p style={styles.modalMeta}><strong>Cast:</strong> {selectedMovie.cast.join(", ")}</p>
                                <div style={styles.recommendButtonsContainer}>
                                    <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedMovie.title); }} style={favorites.includes(selectedMovie.title) ? styles.favBtnActive : styles.favBtn}>
                                        {favorites.includes(selectedMovie.title) ? "♥ Favorited" : "♡ Add to Favorites"}
                                    </button>
                                </div>
                                <div style={styles.recommendButtonsContainer}>
                                    <button onClick={() => handleRecommend(selectedMovie.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Similar Movies</button>
                                    <button onClick={() => handleRecommend(selectedMovie.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
                                    <button onClick={() => handleRecommend(selectedMovie.title, 'songs')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Songs</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            
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

// (Your full styles object)
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
    favList: { listStyle: 'decimal', paddingLeft: '20px', textAlign: 'left' },

    movieGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
    movieCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
    movieImage: { width: "100%", height: "330px", objectFit: "cover", display: 'block' },
    cardFavBtn: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.6)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        fontSize: '1.2rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
    },
    cardFavBtnActive: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(0,0,0,0.6)',
        color: '#e50914',
        border: 'none',
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        fontSize: '1.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 5,
    },
    cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
    cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
    modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
    modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
    closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
    modalPoster: { width: '220px', height: '330px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
    modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1 },
    modalTitle: { margin: '0 0 10px 0', fontSize: '2.5rem', fontWeight: '700' },
    modalMeta: { fontSize: '1rem', color: '#bbb', margin: '4px 0' },
    modalDescription: { fontSize: '1rem', color: '#ddd', lineHeight: 1.7, margin: '20px 0', flexGrow: 1 },
    favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
    favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
    recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '15px' },
    recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
    explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
    recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
    recommendListItem: { color: '#fff', padding: '10px 0', borderBottom: '1px dotted #333' }
};

export default MovieRecommendations;