// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // Expanded dataset with 20 popular songs for UI
// const songsDataset = [
//   // English
//   { title: "Blinding Lights", artist: "The Weeknd", genres: ["Pop", "R&B"], age_group: "Adults", language: "English", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXbix8OHgT51TfsZDlRFGC_CgyB0ABFF5qg&s" },
//   { title: "Shape of You", artist: "Ed Sheeran", genres: ["Pop", "Dancehall"], age_group: "Adults", language: "English", image: "https://i.ytimg.com/vi/Vds8ddYXYZY/mqdefault.jpg" },
//   { title: "Levitating", artist: "Dua Lipa", genres: ["Pop", "Disco"], age_group: "Adults", language: "English", image: "https://i.ytimg.com/vi/d28NLh9IT14/sddefault.jpg" },
//   { title: "Watermelon Sugar", artist: "Harry Styles", genres: ["Pop", "Rock"], age_group: "Adults", language: "English", image: "https://images.genius.com/fad220dc51b6e78496fd3b71780ec2d3.548x548x1.jpg" },
//   { title: "Good 4 U", artist: "Olivia Rodrigo", genres: ["Pop", "Pop Punk"], age_group: "Teens", language: "English", image: "https://i.ytimg.com/vi/byfiQA8HRaE/maxresdefault.jpg" },
//   { title: "Stay", artist: "The Kid LAROI", genres: ["Pop", "Hip-Hop"], age_group: "Teens", language: "English", image: "https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg" },

//   // Hindi
//   { title: "Tum Hi Ho", artist: "Arijit Singh", genres: ["Romantic", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://upload.wikimedia.org/wikipedia/en/f/ff/Tum_Hi_Ho_cover.jpeg" },
//   { title: "Kesariya", artist: "Arijit Singh", genres: ["Romantic", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://www.theindianwire.com/wp-content/uploads/2022/07/Kesariya.jpg" },
//   { title: "Ghungroo", artist: "Arijit Singh", genres: ["Dance", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://a10.gaanacdn.com/gn_img/albums/Rz4W87v3xD/z4W8g7RJ3x/size_m_1588055035.jpg" },
//   { title: "Jai Jai Shivshankar", artist: "Vishal-Shekhar", genres: ["Dance", "Bollywood"], age_group: "Teens", language: "Hindi", image: "https://tse4.mm.bing.net/th/id/OIP.Tn5hOVeILpawBJvHkvlmZAHaHa?pid=Api&P=0&h=180" },
//   { title: "Shayad", artist: "Arijit Singh", genres: ["Romantic", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/27/3e/14/273e1405-41f2-8290-679e-10c75f2ff4ec/886449193172.jpg/1200x1200bf-60.jpg" },

//   // Telugu
//   { title: "Butta Bomma", artist: "Armaan Malik", genres: ["Romantic", "Tollywood"], age_group: "Adults", language: "Telugu", image: "https://i.ytimg.com/vi/zU6O0mmdYJc/maxresdefault.jpg" },
//   { title: "Ramuloo Ramulaa", artist: "Anurag Kulkarni", genres: ["Dance", "Tollywood"], age_group: "Teens", language: "Telugu", image: "https://tse2.mm.bing.net/th/id/OIP.fF3hc0ePSZv1D8Zm0opwCwHaFj?pid=Api&P=0&h=180" },
//   { title: "Samajavaragamana", artist: "Sid Sriram", genres: ["Romantic", "Tollywood"], age_group: "Adults", language: "Telugu", image: "https://tse2.mm.bing.net/th/id/OIP.mlWXyCWL8SK9v3VgYH0rVwHaLH?pid=Api&P=0&h=180" },
//   { title: "Mind Block", artist: "Vishal-Shekhar", genres: ["Dance", "Tollywood"], age_group: "Teens", language: "Telugu", image: "https://i.ytimg.com/vi/J7Qf8bQRPuc/maxresdefault.jpg" },
//   { title: "Seeti Maar", artist: "Chinmayi", genres: ["Dance", "Tollywood"], age_group: "Teens", language: "Telugu", image: "https://i.ytimg.com/vi/WLD0kUKybeE/maxresdefault.jpg" },
  
//   // Tamil
//   { title: "Vaathi Coming", artist: "Anirudh Ravichander", genres: ["Dance", "Kollywood"], age_group: "Teens", language: "Tamil", image: "https://i.pinimg.com/originals/f2/26/17/f2261796e792d394ca6338211bcbfb5a.jpg" },
//   { title: "Rowdy Baby", artist: "Dhanush", genres: ["Dance", "Kollywood"], age_group: "Teens", language: "Tamil", image: "https://i.ytimg.com/vi/x6Q7c9RyMzk/maxresdefault.jpg" },
//   { title: "Enjoy Enjaami", artist: "Dhee", genres: ["Folk", "Kollywood"], age_group: "Adults", language: "Tamil", image: "https://static.moviecrow.com/gallery/20210323/184475-ExJruH8U8AE8g_p.jpg" },
//   { title: "Butta Bomma Tamil", artist: "Sid Sriram", genres: ["Romantic", "Kollywood"], age_group: "Adults", language: "Tamil", image: "https://i.ytimg.com/vi/zU6O0mmdYJc/maxresdefault.jpg" },
//   { title: "Kutty Story", artist: "Thalapathy", genres: ["Romantic", "Kollywood"], age_group: "Teens", language: "Tamil", image: "https://tse1.mm.bing.net/th/id/OIP.00xeVrk6SnKhp3aoeC9yFQHaLG?pid=Api&P=0&h=180" },

//   // Malayalam
//   { title: "Entammede Jimikki Kammal", artist: "Vineeth Sreenivasan", genres: ["Folk", "Mollywood"], age_group: "Teens", language: "Malayalam", image: "https://www.filmibeat.com/img/2017/09/entammedejimikkikammalsong-18-1505737842.jpg" },
//   { title: "Jimikki Kammal", artist: "Vineeth Sreenivasan", genres: ["Dance", "Mollywood"], age_group: "Teens", language: "Malayalam", image: "https://i.ytimg.com/vi/qFFELx7fqOY/hqdefault.jpg" },
//   { title: "Pavizhamazhaye", artist: "K S Harisankar", genres: ["Romantic", "Mollywood"], age_group: "Adults", language: "Malayalam", image: "https://c.saavncdn.com/358/Pavizha-Mazha-Athiran-Malayalam-English-209-20200303041659-500x500.jpg" },
//   { title: "Uyiril Thodum", artist: "Vineeth Sreenivasan", genres: ["Romantic", "Mollywood"], age_group: "Adults", language: "Malayalam", image: "https://i.ytimg.com/vi/C440OcgOchk/maxresdefault.jpg" },
//   { title: "Aaradhike", artist: "Vineeth Sreenivasan", genres: ["Romantic", "Mollywood"], age_group: "Adults", language: "Malayalam", image: "https://a10.gaanacdn.com/gn_img/song/Bp1bAnK029/1bA4naR7W0/size_l_1564577866.jpg" },
// ];


// const uniqueGenres = Array.from(new Set(songsDataset.flatMap(song => song.genres)));

// function SongRecommendations() {
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ domain: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedSong, setSelectedSong] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
//     const [showFavorites, setShowFavorites] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("http://localhost:5001/favorites")
//           .then((res) => setFavorites(Array.from(new Set(res.data.favorites || []))))
//           .catch((err) => console.error("Failed to fetch favorites:", err));
//     }, []);

//     const toggleFavorite = async (songTitle) => {
//         try {
//             const url = "http://localhost:5001/favorites/";
//             let res;
//             if (favorites.includes(songTitle)) {
//                 res = await axios.delete(url + "remove", { data: { movie: songTitle } });
//             } else {
//                 res = await axios.post(url + "add", { movie: songTitle });
//             }
//             setFavorites(Array.from(new Set(res.data.favorites || [])));
//         } catch (err) {
//             console.error("Failed to update favorites:", err);
//         }
//     };

//     const handleRecommend = async (songTitle, domain) => {
//         if (!songTitle.trim()) return;
//         let endpoint = "";
//         if (domain === 'similar') endpoint = "http://localhost:5001/crossrecommend/from-song/similar";
//         else if (domain === 'books') endpoint = "http://localhost:5001/crossrecommend/from-song/books";
//         else if (domain === 'movies') endpoint = "http://localhost:5001/crossrecommend/from-song/movies";
//         else return;

//         setLoading(true);
//         setShowRecommendOptions(false);
//         try {
//             const response = await axios.post(endpoint, { song: songTitle });
//             setRecommendations({ domain: response.data.target_domain, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations for ${domain} based on ${songTitle}.` });
//             setRecommendationModalVisible(true);
//         } catch (err) {
//             console.error("Recommendation error:", err);
//             setRecommendations({ domain, items: [], explanation: `Failed to fetch recommendations.` });
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
//             setSuggestions(songsDataset.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.artist.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };

//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (song) => setSelectedSong(song);
//     const closeDetailModal = () => setSelectedSong(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/");

//     const filteredSongs = songsDataset.filter(s =>
//         (!ageFilter || s.age_group === ageFilter) &&
//         (!genreFilter || s.genres.includes(genreFilter)) &&
//         (s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.artist.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const renderRecommendationItem = (item, domain, i) => {
//         let title = "N/A";
//         let detail = "";

//         if (domain === "songs") {
//             title = item.track_name || 'Unknown Track';
//             detail = `by ${item.artist_name || 'Unknown Artist'}`;
//         } else if (domain === "books") {
//             title = item.title || 'Untitled Book';
//             detail = `by ${item.authors || 'Unknown Author'}`;
//         } else if (domain === "movies") {
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
//                         <input type="text" placeholder="Search for a song or artist..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
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
//                 </div>
//                 {showRecommendOptions && (
//                     <div style={styles.recommendOptionsContainer}>
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎶 Similar Songs</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'movies')} style={styles.optionButton}>🎬 Movies</button>
//                     </div>
//                 )}
//             </header>

//             <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//                 <button style={styles.showFavButton} onClick={() => setShowFavorites(!showFavorites)}>
//                     {showFavorites ? 'Hide Favorites' : 'Show My Favorites ⭐'}
//                 </button>
//             </div>

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

//             <h2 style={styles.title}>Song Collection</h2>
//             <div style={styles.songGrid}>
//                 {filteredSongs.map((song) => (
//                     <div style={styles.songCard} key={song.title}>
//                         <img src={song.image} alt={song.title} style={styles.songImage} onClick={() => openDetailModal(song)} />
//                         <button 
//                             style={favorites.includes(song.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { e.stopPropagation(); toggleFavorite(song.title); }}
//                         >
//                             {favorites.includes(song.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(song)}>
//                             <h3 style={styles.cardTitle}>{song.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedSong && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedSong.image})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedSong.image} alt={selectedSong.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <h2 style={styles.modalTitle}>{selectedSong.title}</h2>
//                                 <p style={styles.modalMeta}>by {selectedSong.artist}</p>
//                                 <p style={{...styles.modalMeta, fontStyle: 'italic'}}>{selectedSong.genres.join(" / ")}</p>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedSong.title); }} style={favorites.includes(selectedSong.title) ? styles.favBtnActive : styles.favBtn}>
//                                         {favorites.includes(selectedSong.title) ? "♥ Favorited" : "♡ Add to Favorites"}
//                                     </button>
//                                 </div>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Similar Songs</button>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'movies')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Movies</button>
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
//                          <ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.domain, i))}</ul> :
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
    
//     showFavButton: { backgroundColor: "rgba(3, 218, 198, 0.1)", border: "1px solid #03DAC6", color: '#03DAC6', padding: '10px 25px', borderRadius: '50px', fontWeight: '600', cursor: 'pointer', fontSize: '1rem' },
//     favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '800px', border: '1px solid #333' },
//     favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },
//     favList: { listStyle: 'decimal', paddingLeft: '20px', textAlign: 'left' },

//     songGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     songCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     songImage: { width: "100%", height: "220px", objectFit: "cover", display: 'block' },
//     cardFavBtn: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardFavBtnActive: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#e50914', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '220px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1, justifyContent: 'center' },
//     modalTitle: { margin: '0 0 5px 0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1.1rem', color: '#bbb', margin: '4px 0' },
//     favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '20px' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '12px 0', borderBottom: '1px dotted #444', fontSize: '1rem' }
// };

// export default SongRecommendations;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Expanded dataset with 20 popular songs for UI
const songsDataset = [
  // English
  { title: "Blinding Lights", artist: "The Weeknd", genres: ["Pop", "R&B"], age_group: "Adults", language: "English", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXbix8OHgT51TfsZDlRFGC_CgyB0ABFF5qg&s" },
  { title: "Shape of You", artist: "Ed Sheeran", genres: ["Pop", "Dancehall"], age_group: "Adults", language: "English", image: "https://i.ytimg.com/vi/Vds8ddYXYZY/mqdefault.jpg" },
  { title: "Levitating", artist: "Dua Lipa", genres: ["Pop", "Disco"], age_group: "Adults", language: "English", image: "https://i.ytimg.com/vi/d28NLh9IT14/sddefault.jpg" },
  { title: "Watermelon Sugar", artist: "Harry Styles", genres: ["Pop", "Rock"], age_group: "Adults", language: "English", image: "https://images.genius.com/fad220dc51b6e78496fd3b71780ec2d3.548x548x1.jpg" },
  { title: "Good 4 U", artist: "Olivia Rodrigo", genres: ["Pop", "Pop Punk"], age_group: "Teens", language: "English", image: "https://i.ytimg.com/vi/byfiQA8HRaE/maxresdefault.jpg" },
  { title: "Stay", artist: "The Kid LAROI", genres: ["Pop", "Hip-Hop"], age_group: "Teens", language: "English", image: "https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg" },

  // Hindi
  { title: "Tum Hi Ho", artist: "Arijit Singh", genres: ["Romantic", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://upload.wikimedia.org/wikipedia/en/f/ff/Tum_Hi_Ho_cover.jpeg" },
  { title: "Kesariya", artist: "Arijit Singh", genres: ["Romantic", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://www.theindianwire.com/wp-content/uploads/2022/07/Kesariya.jpg" },
  { title: "Ghungroo", artist: "Arijit Singh", genres: ["Dance", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://a10.gaanacdn.com/gn_img/albums/Rz4W87v3xD/z4W8g7RJ3x/size_m_1588055035.jpg" },
  { title: "Jai Jai Shivshankar", artist: "Vishal-Shekhar", genres: ["Dance", "Bollywood"], age_group: "Teens", language: "Hindi", image: "https://tse4.mm.bing.net/th/id/OIP.Tn5hOVeILpawBJvHkvlmZAHaHa?pid=Api&P=0&h=180" },
  { title: "Shayad", artist: "Arijit Singh", genres: ["Romantic", "Bollywood"], age_group: "Adults", language: "Hindi", image: "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/27/3e/14/273e1405-41f2-8290-679e-10c75f2ff4ec/886449193172.jpg/1200x1200bf-60.jpg" },

  // Telugu
  { title: "Butta Bomma", artist: "Armaan Malik", genres: ["Romantic", "Tollywood"], age_group: "Adults", language: "Telugu", image: "https://i.ytimg.com/vi/zU6O0mmdYJc/maxresdefault.jpg" },
  { title: "Ramuloo Ramulaa", artist: "Anurag Kulkarni", genres: ["Dance", "Tollywood"], age_group: "Teens", language: "Telugu", image: "https://tse2.mm.bing.net/th/id/OIP.fF3hc0ePSZv1D8Zm0opwCwHaFj?pid=Api&P=0&h=180" },
  { title: "Samajavaragamana", artist: "Sid Sriram", genres: ["Romantic", "Tollywood"], age_group: "Adults", language: "Telugu", image: "https://tse2.mm.bing.net/th/id/OIP.mlWXyCWL8SK9v3VgYH0rVwHaLH?pid=Api&P=0&h=180" },
  { title: "Mind Block", artist: "Vishal-Shekhar", genres: ["Dance", "Tollywood"], age_group: "Teens", language: "Telugu", image: "https://i.ytimg.com/vi/J7Qf8bQRPuc/maxresdefault.jpg" },
  { title: "Seeti Maar", artist: "Chinmayi", genres: ["Dance", "Tollywood"], age_group: "Teens", language: "Telugu", image: "https://i.ytimg.com/vi/WLD0kUKybeE/maxresdefault.jpg" },
  
  // Tamil
  { title: "Vaathi Coming", artist: "Anirudh Ravichander", genres: ["Dance", "Kollywood"], age_group: "Teens", language: "Tamil", image: "https://i.pinimg.com/originals/f2/26/17/f2261796e792d394ca6338211bcbfb5a.jpg" },
  { title: "Rowdy Baby", artist: "Dhanush", genres: ["Dance", "Kollywood"], age_group: "Teens", language: "Tamil", image: "https://i.ytimg.com/vi/x6Q7c9RyMzk/maxresdefault.jpg" },
  { title: "Enjoy Enjaami", artist: "Dhee", genres: ["Folk", "Kollywood"], age_group: "Adults", language: "Tamil", image: "https://static.moviecrow.com/gallery/20210323/184475-ExJruH8U8AE8g_p.jpg" },
  { title: "Butta Bomma Tamil", artist: "Sid Sriram", genres: ["Romantic", "Kollywood"], age_group: "Adults", language: "Tamil", image: "https://i.ytimg.com/vi/zU6O0mmdYJc/maxresdefault.jpg" },
  { title: "Kutty Story", artist: "Thalapathy", genres: ["Romantic", "Kollywood"], age_group: "Teens", language: "Tamil", image: "https://tse1.mm.bing.net/th/id/OIP.00xeVrk6SnKhp3aoeC9yFQHaLG?pid=Api&P=0&h=180" },

  // Malayalam
  { title: "Entammede Jimikki Kammal", artist: "Vineeth Sreenivasan", genres: ["Folk", "Mollywood"], age_group: "Teens", language: "Malayalam", image: "https://www.filmibeat.com/img/2017/09/entammedejimikkikammalsong-18-1505737842.jpg" },
  { title: "Jimikki Kammal", artist: "Vineeth Sreenivasan", genres: ["Dance", "Mollywood"], age_group: "Teens", language: "Malayalam", image: "https://i.ytimg.com/vi/qFFELx7fqOY/hqdefault.jpg" },
  { title: "Pavizhamazhaye", artist: "K S Harisankar", genres: ["Romantic", "Mollywood"], age_group: "Adults", language: "Malayalam", image: "https://c.saavncdn.com/358/Pavizha-Mazha-Athiran-Malayalam-English-209-20200303041659-500x500.jpg" },
  { title: "Uyiril Thodum", artist: "Vineeth Sreenivasan", genres: ["Romantic", "Mollywood"], age_group: "Adults", language: "Malayalam", image: "https://i.ytimg.com/vi/C440OcgOchk/maxresdefault.jpg" },
  { title: "Aaradhike", artist: "Vineeth Sreenivasan", genres: ["Romantic", "Mollywood"], age_group: "Adults", language: "Malayalam", image: "https://a10.gaanacdn.com/gn_img/song/Bp1bAnK029/1bA4naR7W0/size_l_1564577866.jpg" },
];




// NOTE: The songsDataset array is omitted as requested for brevity.
// Ensure you have the full songsDataset declared above this component in your file.

// const uniqueGenres = Array.from(new Set(songsDataset.flatMap(song => song.genres)));
// const allSongTitles = new Set(songsDataset.map(song => song.title));

// function SongRecommendations() {
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ domain: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedSong, setSelectedSong] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
//     const [showFavorites, setShowFavorites] = useState(false);

//     // ❗ FIX: Initialize useNavigate
//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("http://localhost:5001/favorites")
//           .then((res) => setFavorites(Array.from(new Set(res.data.favorites || []))))
//           .catch((err) => console.error("Failed to fetch favorites:", err));
//     }, []);

//     const toggleFavorite = async (songTitle) => {
//         try {
//             const url = "http://localhost:5001/favorites/";
//             let res;
//             if (favorites.includes(songTitle)) {
//                 res = await axios.delete(url + "remove", { data: { movie: songTitle } });
//             } else {
//                 res = await axios.post(url + "add", { movie: songTitle });
//             }
//             setFavorites(Array.from(new Set(res.data.favorites || [])));
//         } catch (err) {
//             console.error("Failed to update favorites:", err);
//         }
//     };

//     const handleRecommend = async (songTitle, domain) => {
//         if (!songTitle.trim()) return;
//         let endpoint = "";
//         if (domain === 'similar') endpoint = "http://localhost:5001/crossrecommend/from-song/similar";
//         else if (domain === 'books') endpoint = "http://localhost:5001/crossrecommend/from-song/books";
//         else if (domain === 'movies') endpoint = "http://localhost:5001/crossrecommend/from-song/movies";
//         else return;

//         setLoading(true);
//         setShowRecommendOptions(false);
//         try {
//             const response = await axios.post(endpoint, { song: songTitle });
//             setRecommendations({ domain: response.data.target_domain, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations for ${domain} based on ${songTitle}.` });
//             setRecommendationModalVisible(true);
//         } catch (err) {
//             console.error("Recommendation error:", err);
//             setRecommendations({ domain, items: [], explanation: `Failed to fetch recommendations.` });
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
//             setSuggestions(songsDataset.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.artist.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };

//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (song) => setSelectedSong(song);
//     const closeDetailModal = () => setSelectedSong(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/"); 

//     const filteredSongs = songsDataset.filter(s =>
//         (!ageFilter || s.age_group === ageFilter) &&
//         (!genreFilter || s.genres.includes(genreFilter)) &&
//         (s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.artist.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const favoriteSongs = favorites.filter(fav => allSongTitles.has(fav));

//     const renderRecommendationItem = (item, domain, i) => {
//         let title = "N/A";
//         let detail = "";

//         if (domain === "songs") {
//             title = item.track_name || 'Unknown Track';
//             detail = `by ${item.artist_name || 'Unknown Artist'}`;
//         } else if (domain === "books") {
//             title = item.title || 'Untitled Book';
//             detail = `by ${item.authors || 'Unknown Author'}`;
//         } else if (domain === "movies") {
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
//                         <input type="text" placeholder="Search for a song or artist..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
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
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎶 Similar Songs</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'movies')} style={styles.optionButton}>🎬 Movies</button>
//                     </div>
//                 )}
//             </header>

//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h2 style={styles.favoritesTitle}>Your Favorite Songs</h2>
//                     {favoriteSongs.length > 0 ? (
//                         <ul style={styles.favList}>
//                             {favoriteSongs.map((fav, i) => <li key={i}>{fav}</li>)}
//                         </ul>
//                     ) : (
//                         <p>You haven't added any favorite songs yet.</p>
//                     )}
//                 </div>
//             )}

//             <h2 style={styles.title}>Song Collection</h2>
//             <div style={styles.songGrid}>
//                 {filteredSongs.map((song) => (
//                     <div style={styles.songCard} key={song.title}>
//                         <img src={song.image} alt={song.title} style={styles.songImage} onClick={() => openDetailModal(song)} />
//                         <button 
//                             style={favorites.includes(song.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { e.stopPropagation(); toggleFavorite(song.title); }}
//                         >
//                             {favorites.includes(song.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(song)}>
//                             <h3 style={styles.cardTitle}>{song.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedSong && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedSong.image})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedSong.image} alt={selectedSong.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <h2 style={styles.modalTitle}>{selectedSong.title}</h2>
//                                 <p style={styles.modalMeta}>by {selectedSong.artist}</p>
//                                 <p style={{...styles.modalMeta, fontStyle: 'italic'}}>{selectedSong.genres.join(" / ")}</p>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedSong.title); }} style={favorites.includes(selectedSong.title) ? styles.favBtnActive : styles.favBtn}>
//                                         {favorites.includes(selectedSong.title) ? "♥ Favorited" : "♡ Add to Favorites"}
//                                     </button>
//                                 </div>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Similar Songs</button>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'movies')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Movies</button>
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
//                          <ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.domain, i))}</ul> :
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

//     songGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     songCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     songImage: { width: "100%", height: "220px", objectFit: "cover", display: 'block' },
//     cardFavBtn: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardFavBtnActive: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#e50914', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '220px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1, justifyContent: 'center' },
//     modalTitle: { margin: '0 0 5px 0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1.1rem', color: '#bbb', margin: '4px 0' },
//     favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '20px' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '12px 0', borderBottom: '1px dotted #444', fontSize: '1rem' }
// };

// export default SongRecommendations;



// (Assuming songsDataset is imported or defined above)
// const uniqueGenres = Array.from(new Set(songsDataset.flatMap(song => song.genres)));
// const allSongTitles = new Set(songsDataset.map(song => song.title));

// function SongRecommendations() {
//     const [favorites, setFavorites] = useState([]);
//     const [recommendations, setRecommendations] = useState({ domain: null, items: [], explanation: "" });
//     const [loading, setLoading] = useState(false);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [ageFilter, setAgeFilter] = useState("");
//     const [genreFilter, setGenreFilter] = useState("");
//     const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
//     const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
//     const [selectedSong, setSelectedSong] = useState(null);
//     const [suggestions, setSuggestions] = useState([]);
//     const [showSuggestions, setShowSuggestions] = useState(false);
//     const [showRecommendOptions, setShowRecommendOptions] = useState(false);
//     const [showFavorites, setShowFavorites] = useState(false);

//     const navigate = useNavigate();

//     useEffect(() => {
//         axios.get("http://localhost:5001/favorites")
//             .then((res) => setFavorites(Array.from(new Set(res.data.favorites || []))))
//             .catch((err) => console.error("Failed to fetch favorites:", err));
//     }, []);

//     const toggleFavorite = async (songTitle) => {
//         try {
//             const url = "http://localhost:5001/favorites/";
//             let res;
//             if (favorites.includes(songTitle)) {
//                 res = await axios.delete(url + "remove", { data: { movie: songTitle } }); // 'movie' key is used by backend
//             } else {
//                 res = await axios.post(url + "add", { movie: songTitle }); // 'movie' key is used by backend
//             }
//             setFavorites(Array.from(new Set(res.data.favorites || [])));
//         } catch (err) {
//             console.error("Failed to update favorites:", err);
//         }
//     };

//     // const handleRecommend = async (songTitle, domain) => {
//     //     if (!songTitle.trim()) return;
//     //     let endpoint = "";
//     //     if (domain === 'similar') endpoint = "http://localhost:5001/crossrecommend/from-song/similar";
//     //     else if (domain === 'books') endpoint = "http://localhost:5001/crossrecommend/from-song/books";
//     //     else if (domain === 'movies') endpoint = "http://localhost:5001/crossrecommend/from-song/movies";
//     //     else return;

//     //     setLoading(true);
//     //     setShowRecommendOptions(false);
//     //     try {
//     //         const response = await axios.post(endpoint, { song: songTitle });
//     //         setRecommendations({ domain: response.data.target_domain, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations for ${domain} based on ${songTitle}.` });
//     //         setRecommendationModalVisible(true);
//     //     } catch (err) {
//     //         console.error("Recommendation error:", err);
//     //         setRecommendations({ domain, items: [], explanation: `Failed to fetch recommendations.` });
//     //         setRecommendationModalVisible(true);
//     //     } finally {
//     //         setLoading(false);
//     //     }
//     // };

//     // In SongRecommendations.js

// const handleRecommend = async (songTitle, domain) => {
//     if (!songTitle.trim()) return;
//     let endpoint = "";
//     if (domain === 'similar') endpoint = "http://localhost:5001/crossrecommend/from-song/similar";
//     else if (domain === 'books') endpoint = "http://localhost:5001/crossrecommend/from-song/books";
//     else if (domain === 'movies') endpoint = "http://localhost:5001/crossrecommend/from-song/movies";
//     else return;

//     // --- START OF CHANGE ---
//     // Find the song in your dataset to get its genres
//     const songObject = songsDataset.find(s => s.title === songTitle);
//     const songGenres = songObject ? songObject.genres : null; // Get genres or null if not found

//     // Create the payload with both song title and genres
//     const payload = { 
//         song: songTitle,
//         genres: songGenres 
//     };
//     // --- END OF CHANGE ---

//     setLoading(true);
//     setShowRecommendOptions(false);
//     try {
//         // --- CHANGED ---: Send the new, more detailed payload
//         const response = await axios.post(endpoint, payload); 
//         setRecommendations({ domain: response.data.target_domain, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations for ${domain} based on ${songTitle}.` });
//         setRecommendationModalVisible(true);
//     } catch (err) {
//         console.error("Recommendation error:", err);
//         setRecommendations({ domain, items: [], explanation: `Failed to fetch recommendations.` });
//         setRecommendationModalVisible(true);
//     } finally {
//         setLoading(false);
//     }
// };

//     const handleSearchChange = (e) => {
//         const query = e.target.value;
//         setSearchQuery(query);
//         setShowRecommendOptions(false);
//         if (query.length > 1) {
//             setSuggestions(songsDataset.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.artist.toLowerCase().includes(query.toLowerCase())));
//             setShowSuggestions(true);
//         } else {
//             setShowSuggestions(false);
//         }
//     };

//     const onSuggestionClick = (title) => {
//         setSearchQuery(title);
//         setShowSuggestions(false);
//     };

//     const openDetailModal = (song) => setSelectedSong(song);
//     const closeDetailModal = () => setSelectedSong(null);
//     const closeRecommendationModal = () => setRecommendationModalVisible(false);
//     const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); };
//     const goToDashboard = () => navigate("/dashboard");
//     const handleLogout = () => navigate("/"); 

//     const filteredSongs = songsDataset.filter(s =>
//         (!ageFilter || s.age_group === ageFilter) &&
//         (!genreFilter || s.genres.includes(genreFilter)) &&
//         (s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.artist.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const favoriteSongs = favorites.filter(fav => allSongTitles.has(fav));

//     const renderRecommendationItem = (item, domain, i) => {
//         let title = "N/A";
//         let detail = "";

//         if (domain === "songs") {
//             title = item.track_name || 'Unknown Track';
//             detail = `by ${item.artist_name || 'Unknown Artist'}`;
//         } else if (domain === "books") {
//             title = item.title || 'Untitled Book';
//             detail = `by ${item.authors || 'Unknown Author'}`;
//         } else if (domain === "movies") {
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
//                         <input type="text" placeholder="Search for a song or artist..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
//                         {showSuggestions && suggestions.length > 0 && (
//                              <ul style={styles.suggestionsBox}>
//                                  {suggestions.map(s => <li key={s.title} style={styles.suggestionItem} onMouseDown={() => onSuggestionClick(s.title)}>{s.title}</li>)}
//                              </ul>
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
//                         <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎶 Similar Songs</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
//                         <button onClick={() => handleRecommend(searchQuery, 'movies')} style={styles.optionButton}>🎬 Movies</button>
//                     </div>
//                 )}
//             </header>

//             {/* --- THIS BLOCK IS MODIFIED --- */}
//             {showFavorites && (
//                 <div style={styles.favoritesSection}>
//                     <h2 style={styles.favoritesTitle}>Your Favorite Songs</h2>
//                     {favoriteSongs.length > 0 ? (
//                         <div style={styles.songGrid}>
//                             {favoriteSongs.map((favTitle) => {
//                                 // Find the full song object from the dataset
//                                 const song = songsDataset.find(s => s.title === favTitle);
//                                 // If for some reason it's not found, skip rendering
//                                 if (!song) return null;

//                                 // Render the song card
//                                 return (
//                                     <div style={styles.songCard} key={song.title}>
//                                         <img src={song.image} alt={song.title} style={styles.songImage} onClick={() => openDetailModal(song)} />
//                                         <button 
//                                             style={styles.cardFavBtnActive} // Always active
//                                             onClick={(e) => { e.stopPropagation(); toggleFavorite(song.title); }}
//                                         >
//                                             {"♥"}
//                                         </button>
//                                         <div style={styles.cardOverlay} onClick={() => openDetailModal(song)}>
//                                             <h3 style={styles.cardTitle}>{song.title}</h3>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     ) : (
//                         <p>You haven't added any favorite songs yet.</p>
//                     )}
//                 </div>
//             )}
//             {/* --- END OF MODIFIED BLOCK --- */}


//             <h2 style={styles.title}>Song Collection</h2>
//             <div style={styles.songGrid}>
//                 {filteredSongs.map((song) => (
//                     <div style={styles.songCard} key={song.title}>
//                         <img src={song.image} alt={song.title} style={styles.songImage} onClick={() => openDetailModal(song)} />
//                         <button 
//                             style={favorites.includes(song.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
//                             onClick={(e) => { e.stopPropagation(); toggleFavorite(song.title); }}
//                         >
//                             {favorites.includes(song.title) ? "♥" : "♡"}
//                         </button>
//                         <div style={styles.cardOverlay} onClick={() => openDetailModal(song)}>
//                             <h3 style={styles.cardTitle}>{song.title}</h3>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             {selectedSong && (
//                 <div style={styles.modalOverlay} onClick={closeDetailModal}>
//                     <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
//                         <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedSong.image})`}}></div>
//                         <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
//                         <div style={styles.modalHeader}>
//                             <img src={selectedSong.image} alt={selectedSong.title} style={styles.modalPoster} />
//                             <div style={styles.modalInfo}>
//                                 <h2 style={styles.modalTitle}>{selectedSong.title}</h2>
//                                 <p style={styles.modalMeta}>by {selectedSong.artist}</p>
//                                 <p style={{...styles.modalMeta, fontStyle: 'italic'}}>{selectedSong.genres.join(" / ")}</p>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedSong.title); }} style={favorites.includes(selectedSong.title) ? styles.favBtnActive : styles.favBtn}>
//                                         {favorites.includes(selectedSong.title) ? "♥ Favorited" : "♡ Add to Favorites"}
//                                     </button>
//                                 </div>
//                                 <div style={styles.recommendButtonsContainer}>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Similar Songs</button>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
//                                     <button onClick={() => handleRecommend(selectedSong.title, 'movies')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Movies</button>
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
//                          <ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.domain, i))}</ul> :
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

// // (Your full styles object)
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
    
//     favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '100%', border: '1px solid #333' }, // Changed maxWidth
//     favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },
//     favList: { listStyle: 'decimal', paddingLeft: '20px', textAlign: 'left' }, // No longer used, but harmless

//     songGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
//     songCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
//     songImage: { width: "100%", height: "220px", objectFit: "cover", display: 'block' },
//     cardFavBtn: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardFavBtnActive: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#e50914', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
//     cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
//     cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    
//     modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
//     modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
//     modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
//     closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
//     modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
//     modalPoster: { width: '220px', height: '220px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
//     modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1, justifyContent: 'center' },
//     modalTitle: { margin: '0 0 5px 0', fontSize: '2.5rem', fontWeight: '700' },
//     modalMeta: { fontSize: '1.1rem', color: '#bbb', margin: '4px 0' },
//     favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
//     recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '20px' },
//     recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    
//     recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
//     explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
//     recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
//     recommendListItem: { color: '#fff', padding: '12px 0', borderBottom: '1px dotted #444', fontSize: '1rem' }
// };

// export default SongRecommendations;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// (Assuming songsDataset is imported or defined above)
const uniqueGenres = Array.from(new Set(songsDataset.flatMap(song => song.genres)));
const allSongTitles = new Set(songsDataset.map(song => song.title));
// --- ADDED ---: 1. Create a list of unique languages from the dataset
// (Assuming songs have a 'language' property)
const uniqueLanguages = Array.from(new Set(songsDataset.map(s => s.language).filter(Boolean)));


function SongRecommendations() {
    const [favorites, setFavorites] = useState([]);
    const [recommendations, setRecommendations] = useState({ domain: null, items: [], explanation: "" });
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [ageFilter, setAgeFilter] = useState("");
    const [genreFilter, setGenreFilter] = useState("");
    const [languageFilter, setLanguageFilter] = useState(""); // --- ADDED ---: 2. State for the new language filter
    const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
    const [recommendationModalVisible, setRecommendationModalVisible] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [showRecommendOptions, setShowRecommendOptions] = useState(false);
    const [showFavorites, setShowFavorites] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5001/favorites")
            .then((res) => setFavorites(Array.from(new Set(res.data.favorites || []))))
            .catch((err) => console.error("Failed to fetch favorites:", err));
    }, []);

    const toggleFavorite = async (songTitle) => {
        try {
            const url = "http://localhost:5001/favorites/";
            let res;
            if (favorites.includes(songTitle)) {
                res = await axios.delete(url + "remove", { data: { movie: songTitle } }); // 'movie' key is used by backend
            } else {
                res = await axios.post(url + "add", { movie: songTitle }); // 'movie' key is used by backend
            }
            setFavorites(Array.from(new Set(res.data.favorites || [])));
        } catch (err) {
            console.error("Failed to update favorites:", err);
        }
    };

    const handleRecommend = async (songTitle, domain) => {
        if (!songTitle.trim()) return;
        let endpoint = "";
        if (domain === 'similar') endpoint = "http://localhost:5001/crossrecommend/from-song/similar";
        else if (domain === 'books') endpoint = "http://localhost:5001/crossrecommend/from-song/books";
        else if (domain === 'movies') endpoint = "http://localhost:5001/crossrecommend/from-song/movies";
        else return;

        // Find the song in your dataset to get its genres
        const songObject = songsDataset.find(s => s.title === songTitle);
        const songGenres = songObject ? songObject.genres : null; // Get genres or null if not found

        // Create the payload with both song title and genres
        const payload = { 
            song: songTitle,
            genres: songGenres 
        };

        setLoading(true);
        setShowRecommendOptions(false);
        try {
            const response = await axios.post(endpoint, payload); 
            setRecommendations({ domain: response.data.target_domain, items: response.data.recommendations || [], explanation: response.data.explanation || `Recommendations for ${domain} based on ${songTitle}.` });
            setRecommendationModalVisible(true);
        } catch (err) {
            console.error("Recommendation error:", err);
            setRecommendations({ domain, items: [], explanation: `Failed to fetch recommendations.` });
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
            setSuggestions(songsDataset.filter(s => s.title.toLowerCase().includes(query.toLowerCase()) || s.artist.toLowerCase().includes(query.toLowerCase())));
            setShowSuggestions(true);
        } else {
            setShowSuggestions(false);
        }
    };

    const onSuggestionClick = (title) => {
        setSearchQuery(title);
        setShowSuggestions(false);
    };

    const openDetailModal = (song) => setSelectedSong(song);
    const closeDetailModal = () => setSelectedSong(null);
    const closeRecommendationModal = () => setRecommendationModalVisible(false);
    // --- UPDATED ---: 3. Add languageFilter reset
    const handleResetFilters = () => { setAgeFilter(""); setGenreFilter(""); setLanguageFilter(""); };
    const goToDashboard = () => navigate("/dashboard");
    const handleLogout = () => navigate("/"); 

    // --- UPDATED ---: 4. Add languageFilter to the filter logic
    const filteredSongs = songsDataset.filter(s =>
        (!ageFilter || s.age_group === ageFilter) &&
        (!genreFilter || s.genres.includes(genreFilter)) &&
        (!languageFilter || s.language === languageFilter) &&
        (s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.artist.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const favoriteSongs = favorites.filter(fav => allSongTitles.has(fav));

    const renderRecommendationItem = (item, domain, i) => {
        let title = "N/A";
        let detail = "";

        if (domain === "songs") {
            title = item.track_name || 'Unknown Track';
            detail = `by ${item.artist_name || 'Unknown Artist'}`;
        } else if (domain === "books") {
            title = item.title || 'Untitled Book';
            detail = `by ${item.authors || 'Unknown Author'}`;
        } else if (domain === "movies") {
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
                        <input type="text" placeholder="Search for a song or artist..." value={searchQuery} onChange={handleSearchChange} style={styles.searchBar} />
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
                                    <label style={styles.filterLabel}>Age Group</label>
                                    <div style={styles.buttonGroup}>
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
                {showRecommendOptions && (
                    <div style={styles.recommendOptionsContainer}>
                        <button onClick={() => handleRecommend(searchQuery, 'similar')} style={styles.optionButton}>🎶 Similar Songs</button>
                        <button onClick={() => handleRecommend(searchQuery, 'books')} style={styles.optionButton}>📚 Books</button>
                        <button onClick={() => handleRecommend(searchQuery, 'movies')} style={styles.optionButton}>🎬 Movies</button>
                    </div>
                )}
            </header>

            {showFavorites && (
                <div style={styles.favoritesSection}>
                    <h2 style={styles.favoritesTitle}>Your Favorite Songs</h2>
                    {favoriteSongs.length > 0 ? (
                        <div style={styles.songGrid}>
                            {favoriteSongs.map((favTitle) => {
                                const song = songsDataset.find(s => s.title === favTitle);
                                if (!song) return null;
                                return (
                                    <div style={styles.songCard} key={song.title}>
                                        <img src={song.image} alt={song.title} style={styles.songImage} onClick={() => openDetailModal(song)} />
                                        <button 
                                            style={styles.cardFavBtnActive} // Always active
                                            onClick={(e) => { e.stopPropagation(); toggleFavorite(song.title); }}
                                        >
                                            {"♥"}
                                        </button>
                                        <div style={styles.cardOverlay} onClick={() => openDetailModal(song)}>
                                            <h3 style={styles.cardTitle}>{song.title}</h3>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <p>You haven't added any favorite songs yet.</p>
                    )}
                </div>
            )}

            <h2 style={styles.title}>Song Collection</h2>
            <div style={styles.songGrid}>
                {filteredSongs.map((song) => (
                    <div style={styles.songCard} key={song.title}>
                        <img src={song.image} alt={song.title} style={styles.songImage} onClick={() => openDetailModal(song)} />
                        <button 
                            style={favorites.includes(song.title) ? styles.cardFavBtnActive : styles.cardFavBtn} 
                            onClick={(e) => { e.stopPropagation(); toggleFavorite(song.title); }}
                        >
                            {favorites.includes(song.title) ? "♥" : "♡"}
                        </button>
                        <div style={styles.cardOverlay} onClick={() => openDetailModal(song)}>
                            <h3 style={styles.cardTitle}>{song.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedSong && (
                <div style={styles.modalOverlay} onClick={closeDetailModal}>
                    <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div style={{...styles.modalBackdrop, backgroundImage: `url(${selectedSong.image})`}}></div>
                        <button style={styles.closeButton} onClick={closeDetailModal}>×</button>
                        <div style={styles.modalHeader}>
                            <img src={selectedSong.image} alt={selectedSong.title} style={styles.modalPoster} />
                            <div style={styles.modalInfo}>
                                <h2 style={styles.modalTitle}>{selectedSong.title}</h2>
                                <p style={styles.modalMeta}>by {selectedSong.artist}</p>
                                <p style={{...styles.modalMeta, fontStyle: 'italic'}}>{selectedSong.genres.join(" / ")}</p>
                                <div style={styles.recommendButtonsContainer}>
                                    <button onClick={(e) => { e.stopPropagation(); toggleFavorite(selectedSong.title); }} style={favorites.includes(selectedSong.title) ? styles.favBtnActive : styles.favBtn}>
                                        {favorites.includes(selectedSong.title) ? "♥ Favorited" : "♡ Add to Favorites"}
                                    </button>
                                </div>
                                <div style={styles.recommendButtonsContainer}>
                                    <button onClick={() => handleRecommend(selectedSong.title, 'similar')} style={{...styles.recommendBtn, backgroundColor: '#1DB954'}}>Similar Songs</button>
                                    <button onClick={() => handleRecommend(selectedSong.title, 'books')} style={{...styles.recommendBtn, backgroundColor: '#0073E6'}}>Books</button>
                                    <button onClick={() => handleRecommend(selectedSong.title, 'movies')} style={{...styles.recommendBtn, backgroundColor: '#E50914'}}>Movies</button>
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
                         <ul style={styles.recommendList}>{recommendations.items.map((rec, i) => renderRecommendationItem(rec, recommendations.domain, i))}</ul> :
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
    
    favoritesSection: { backgroundColor: '#1a1a1a', padding: '20px 30px', borderRadius: '15px', margin: '0 auto 40px auto', maxWidth: '100%', border: '1px solid #333' }, // Changed maxWidth
    favoritesTitle: { color: "#03DAC6", marginTop: '0', textAlign: 'center' },
    favList: { listStyle: 'decimal', paddingLeft: '20px', textAlign: 'left' }, // No longer used, but harmless

    songGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "25px" },
    songCard: { background: "#1c1c1c", borderRadius: "15px", cursor: 'pointer', overflow: 'hidden', position: 'relative' },
    songImage: { width: "100%", height: "220px", objectFit: "cover", display: 'block' },
    cardFavBtn: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
    cardFavBtnActive: { position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', color: '#e50914', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.5rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5 },
    cardOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,1), transparent)', padding: '30px 15px 15px 15px' },
    cardTitle: { margin: 0, fontSize: "1.2rem", color: '#fff', fontWeight: '600', textAlign: 'center' },
    
    modalOverlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000, backdropFilter: 'blur(10px)' },
    modalContent: { backgroundColor: '#181818', width: '90%', maxWidth: '900px', maxHeight: '90vh', boxShadow: '0 15px 40px rgba(0,0,0,0.7)', position: 'relative', border: '1px solid #333', overflow: 'hidden', borderRadius: '20px' },
    modalBackdrop: { position: 'absolute', top: 0, left: 0, right: 0, height: '60%', filter: 'blur(20px) brightness(0.4)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.2)' },
    closeButton: { position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', borderRadius: '50%', width: '40px', height: '40px', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' },
    modalHeader: { display: 'flex', gap: '30px', padding: '40px', position: 'relative', zIndex: 5, alignItems: 'center' },
    modalPoster: { width: '220px', height: '220px', objectFit: "cover", borderRadius: '15px', flexShrink: 0, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' },
    modalInfo: { display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'left', flexGrow: 1, justifyContent: 'center' },
    modalTitle: { margin: '0 0 5px 0', fontSize: '2.5rem', fontWeight: '700' },
    modalMeta: { fontSize: '1.1rem', color: '#bbb', margin: '4px 0' },
    favBtn: { background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
    favBtnActive: { background: '#e50914', border: '1px solid #e50914', color: '#fff', padding: '12px 20px', borderRadius: '50px', cursor: 'pointer', fontWeight: '600' },
    recommendButtonsContainer: { display: 'flex', gap: '10px', marginTop: '20px' },
    recommendBtn: { flex: 1, padding: "12px", color: "#fff", border: "none", borderRadius: "10px", fontSize: "0.9rem", cursor: "pointer", fontWeight: '600' },
    
    recModalTitle: { color: "#03DAC6", marginBottom: "15px", textAlign: 'center', fontSize: '1.8rem' },
    explanationText: { backgroundColor: '#101010', padding: '15px', borderRadius: '10px', marginTop: '20px', color: '#ddd', fontSize: '0.9rem', border: '1px solid #333' },
    recommendList: { listStyle: 'none', padding: '0', maxHeight: '300px', overflowY: 'auto' },
    recommendListItem: { color: '#fff', padding: '12px 0', borderBottom: '1px dotted #444', fontSize: '1rem' }
};

export default SongRecommendations;