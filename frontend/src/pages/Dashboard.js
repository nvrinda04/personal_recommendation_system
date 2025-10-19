// // src/pages/Dashboard.js

// import React, { useState, useEffect } from "react";
// import Chatbot from "./Chatbot";
// import { useNavigate, Link } from "react-router-dom";
// import styled, { keyframes, createGlobalStyle } from "styled-components";
// import Tilt from "react-vanilla-tilt";
// import { BsChatDotsFill } from "react-icons/bs";
// import axios from "axios";

// // --- Global Styles & Fonts ---
// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');
//   body {
//     margin: 0; padding: 0; box-sizing: border-box;
//     font-family: 'Inter', sans-serif;
//     background-color: #121212; color: #f0f0f0;
//   }
// `;

// // --- Keyframes ---
// const backgroundAnimation = keyframes`
//   0% { transform: scale(1); } 
//   50% { transform: scale(1.1); } 
//   100% { transform: scale(1); }
// `;
// const pulse = keyframes`
//   0% { box-shadow: 0 0 0 0 rgba(224, 160, 48, 0.7); }
//   70% { box-shadow: 0 0 0 15px rgba(224, 160, 48, 0); }
//   100% { box-shadow: 0 0 0 0 rgba(224, 160, 48, 0); }
// `;
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(20px);}
//   to { opacity: 1; transform: translateY(0);}
// `;

// // --- Styled Components ---
// const DynamicBackground = styled.div`
//   position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: -1;
//   background: url('https://www.transparenttextures.com/patterns/dark-matter.png'),
//               linear-gradient(135deg, #121212 0%, #1a1f2c 100%);
//   opacity: 0.5; animation: ${backgroundAnimation} 60s ease-in-out infinite;
// `;

// const Header = styled.nav`
//   position: fixed; top: 0; left: 0; width: 100%; padding: 20px 5%;
//   box-sizing: border-box; display: flex; justify-content: space-between; align-items: center; z-index: 10;
//   background: rgba(18, 18, 18, 0.5); backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
// `;

// const Logo = styled.h2`
//   font-family: 'Playfair Display', serif;
//   font-size: 1.8rem; margin: 0; font-weight: 700;
//   letter-spacing: 1px; color: #f0f0f0;
//   span { color: #E0A030; }
// `;

// const NavLink = styled.a`
//   color: #c0c0c0; margin-left: 25px; text-decoration: none; font-weight: 500;
//   font-size: 1rem; transition: color 0.3s ease;
//   &:hover { color: #E0A030; }
// `;

// const DashboardWrapper = styled.main`
//   display: flex; flex-direction: column; justify-content: center; align-items: center;
//   min-height: 100vh; padding: 120px 20px 40px; box-sizing: border-box;
// `;

// const Heading = styled.h1`
//   font-family: 'Playfair Display', serif; font-size: 3.5rem;
//   margin-bottom: 50px; font-weight: 700; text-align: center;
//   color: #f0f0f0; text-shadow: 0 2px 15px rgba(0,0,0,0.5);
// `;

// const CardContainer = styled.div`
//   display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;
// `;

// const BackgroundImage = styled.div`
//   position: absolute; top: 0; left: 0; width: 100%; height: 100%;
//   background-image: url(${(props) => props.imageUrl});
//   background-size: cover; background-position: center;
//   transition: opacity 0.7s ease; z-index: 1;
// `;

// const CardContent = styled.div`
//   position: relative; z-index: 3; width: 100%; height: 100%;
//   display: flex; flex-direction: column; justify-content: flex-end;
//   padding: 30px; box-sizing: border-box;
//   background: linear-gradient(to top, ${(props) => props.gradientColor || "rgba(0,0,0,0.9)"} 25%, transparent 70%);
// `;

// const CategoryCard = styled.div`
//   width: 300px; height: 380px; border-radius: 16px;
//   cursor: pointer; background-color: #1e1e1e;
//   border: 1px solid rgba(255, 255, 255, 0.1);
//   position: relative; overflow: hidden;
//   box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
//   transition: box-shadow 0.4s ease;

//   .default-bg { opacity: 1; }
//   .hover-bg { opacity: 0; }

//   &:hover .default-bg { opacity: 0; }
//   &:hover .hover-bg { opacity: 1; }

//   &:hover {
//     box-shadow: 0 0 25px 3px ${(props) => props.glowColor || "#000"};
//   }

//   h2 {
//     font-family: 'Playfair Display', serif; font-size: 2.5rem;
//     margin: 0 0 10px 0; text-shadow: 0 2px 8px rgba(0,0,0,0.8);
//   }

//   p {
//     font-family: 'Inter', sans-serif; font-size: 1rem;
//     line-height: 1.5; color: #a0a0b0; text-shadow: 0 1px 5px rgba(0,0,0,0.8);
//   }
// `;

// const RecSection = styled.section`
//   margin-top: 60px;
//   text-align: center;
//   max-width: 1000px;
//   padding: 30px;
//   background: rgba(255,255,255,0.03);
//   border-radius: 16px;
//   box-shadow: 0 4px 15px rgba(0,0,0,0.4);
// `;

// const RecCategory = styled.div`
//   margin-top: 20px;
//   h3 {
//     font-family: 'Playfair Display', serif;
//     color: #E0A030;
//     margin-bottom: 10px;
//   }
//   ul {
//     list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 15px;
//     justify-content: center;
//   }
//   li {
//     background: rgba(255,255,255,0.05);
//     padding: 8px 14px;
//     border-radius: 12px;
//     color: #ccc;
//     font-weight: 500;
//     font-size: 0.95rem;
//   }
// `;

// const ChatbotFAB = styled.button`
//   position: fixed; bottom: 30px; right: 30px; width: 60px; height: 60px;
//   border-radius: 50%; border: none; background-color: #E0A030; color: #121212;
//   display: flex; justify-content: center; align-items: center; font-size: 1.8rem;
//   cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
//   animation: ${pulse} 2s infinite; z-index: 100;
//   transition: transform 0.3s ease;
//   &:hover { transform: scale(1.1); animation: none; }
// `;

// const ChatbotContainer = styled.div`
//   position: fixed; bottom: 100px; right: 30px; width: 360px; height: 450px;
//   background-color: #1e1e1e; border: 1px solid rgba(255, 255, 255, 0.2);
//   border-radius: 16px; box-shadow: 0 8px 30px rgba(0,0,0,0.5);
//   overflow: hidden; z-index: 99;
// `;

// const SurpriseFAB = styled.button`
//   position: fixed; bottom: 110px; right: 30px; width: 60px; height: 60px;
//   border-radius: 50%; border: none; background-color: #ff6f61; color: #fff;
//   display: flex; justify-content: center; align-items: center; font-size: 2rem;
//   cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   &:hover {
//     transform: scale(1.2);
//     box-shadow: 0 8px 20px rgba(0,0,0,0.5);
//   }
// `;

// const SurprisePopup = styled.div`
//   position: fixed; bottom: 100px; right: 110px; width: 360px; max-width: 90%;
//   background-color: #1e1e1e; border: 1px solid rgba(255,255,255,0.2);
//   border-radius: 16px; box-shadow: 0 8px 30px rgba(0,0,0,0.6);
//   overflow: hidden; z-index: 200; animation: ${fadeIn} 0.5s ease;
// `;

// function Dashboard() {
//   const navigate = useNavigate();
//   const [showChat, setShowChat] = useState(false);
//   const [recommendations, setRecommendations] = useState({
//     movies: [],
//     books: [],
//     songs: []
//   });

//   const [showSurprise, setShowSurprise] = useState(false);
//   const [surpriseItem, setSurpriseItem] = useState(null);
//   const [loadingSurprise, setLoadingSurprise] = useState(false);

//   const handleNavigate = (type) => navigate(`/recommend/${type}`);

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     navigate("/");
//   };

//   useEffect(() => {
//   const fetchRecommendations = async () => {
//     const userId = localStorage.getItem("email") || "guest_user";

//     try {
//       const res = await axios.post(
//         "http://localhost:5001/recommend/adaptive",
//         { user_id: userId },
//         { headers: { "Content-Type": "application/json" } }
//       );
//       console.log("🔥 Adaptive API response:", res.data);

//       if (res.data && res.data.recommendations) {
//         setRecommendations({
//           movies: res.data.recommendations.movies.map(m => m.title),
//           books: res.data.recommendations.books.map(b => b.title),
//           songs: res.data.recommendations.songs.map(s => s.title),
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching adaptive recommendations:", err);
//       setRecommendations({ movies: [], books: [], songs: [] });
//     }
//   };

//   fetchRecommendations();
// }, []);


//   const fetchSurprise = async () => {
//     setLoadingSurprise(true);
//     try {
//       const res = await axios.post("http://localhost:5001/api/surprise", {});
//       setSurpriseItem(res.data);
//       setShowSurprise(true);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to get surprise. Make sure backend is running.");
//     }
//     setLoadingSurprise(false);
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <DynamicBackground />

//       <Header>
//         <Logo>Recommend<span>AI</span></Logo>
//         <div>
//           <NavLink as={Link} to="/dashboard">Dashboard</NavLink>
//           <NavLink as={Link} to="/" onClick={handleLogout}>Logout</NavLink>
//         </div>
//       </Header>

//       <DashboardWrapper>
//         <Heading>What Would You Like to Explore?</Heading>

//         <CardContainer>
//           {/* --- MOVIES --- */}
//           <Tilt style={{ borderRadius: "16px" }} options={{ max: 20, scale: 1.05 }}>
//             <CategoryCard onClick={() => handleNavigate("movies")} glowColor="rgba(80,30,80,0.7)">
//               <BackgroundImage className="default-bg" imageUrl="https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=800&q=80" />
//               <BackgroundImage className="hover-bg" imageUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" />
//               <CardContent gradientColor="rgba(80,30,80,0.9)">
//                 <h2>Movies</h2>
//                 <p>Discover timeless classics and new favorites curated just for you.</p>
//               </CardContent>
//             </CategoryCard>
//           </Tilt>

//           {/* --- BOOKS --- */}
//           <Tilt style={{ borderRadius: "16px" }} options={{ max: 20, scale: 1.05 }}>
//             <CategoryCard onClick={() => handleNavigate("books")} glowColor="rgba(20,70,50,0.7)">
//               <BackgroundImage className="default-bg" imageUrl="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=800&q=80" />
//               <BackgroundImage className="hover-bg" imageUrl="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80" />
//               <CardContent gradientColor="rgba(20,70,50,0.9)">
//                 <h2>Books</h2>
//                 <p>Personalized literary adventures for every kind of reader.</p>
//               </CardContent>
//             </CategoryCard>
//           </Tilt>

//           {/* --- SONGS --- */}
//           <Tilt style={{ borderRadius: "16px" }} options={{ max: 20, scale: 1.05 }}>
//             <CategoryCard onClick={() => handleNavigate("songs")} glowColor="rgba(30,50,110,0.7)">
//               <BackgroundImage className="default-bg" imageUrl="https://images.unsplash.com/photo-1516223725357-6db4e29844a4?auto=format&fit=crop&w=800&q=80" />
//               <BackgroundImage className="hover-bg" imageUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" />
//               <CardContent gradientColor="rgba(30,50,110,0.9)">
//                 <h2>Songs</h2>
//                 <p>Find the soundtrack to your mood, vibe, and style.</p>
//               </CardContent>
//             </CategoryCard>
//           </Tilt>
//         </CardContainer>

//         {/* 🧠 Adaptive Recommendations */}
//         {recommendations && (
//           <RecSection>
//             <h2>✨ Based on Your Previous Choices</h2>

//             <RecCategory>
//               <h3>🎬 Movies</h3>
//               <ul>{recommendations.movies.map((m, i) => <li key={i}>{m}</li>)}</ul>
//             </RecCategory>

//             <RecCategory>
//               <h3>📚 Books</h3>
//               <ul>{recommendations.books.map((b, i) => <li key={i}>{b}</li>)}</ul>
//             </RecCategory>

//             <RecCategory>
//               <h3>🎵 Songs</h3>
//               <ul>{recommendations.songs.map((s, i) => <li key={i}>{s}</li>)}</ul>
//             </RecCategory>
//           </RecSection>
//         )}
//       </DashboardWrapper>

//       <ChatbotFAB onClick={() => setShowChat(!showChat)}>
//         <BsChatDotsFill />
//       </ChatbotFAB>

//       <SurpriseFAB onClick={fetchSurprise} title="🎲 Surprise Me!">
//         🎲
//       </SurpriseFAB>

//       {showSurprise && surpriseItem && (
//         <SurprisePopup>
//           <div className="header">
//             <span>🎲 Surprise Recommendation</span>
//             <button className="close-btn" onClick={() => setShowSurprise(false)}>×</button>
//           </div>
//           <div className="content">
//             {surpriseItem.image && <img src={surpriseItem.image} alt={surpriseItem.title} />}
//             <h3>{surpriseItem.title}</h3>
//             <p><b>Category:</b> {surpriseItem.category}</p>
//             <p><b>Genre:</b> {surpriseItem.genre}</p>
//             <p className="description">{surpriseItem.description}</p>
//           </div>
//         </SurprisePopup>
//       )}

//       {showChat && (
//         <ChatbotContainer>
//           <Chatbot isInline={true} />
//         </ChatbotContainer>
//       )}
//     </>
//   );
// }

// export default Dashboard;

// src/pages/Dashboard.js

import React, { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import { useNavigate, Link } from "react-router-dom";
import styled, { keyframes, createGlobalStyle, css } from "styled-components";
import Tilt from "react-vanilla-tilt";
import { BsChatDotsFill, BsPlusLg } from "react-icons/bs";
import { GiMagicSwirl } from "react-icons/gi";
import axios from "axios";

// --- Global Styles & Fonts ---
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');
  body {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background-color: #0d0d10;
    color: #f0f0f0;
    overflow-x: hidden;
  }
`;

// --- Keyframes ---
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
`;
const auroraAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const marqueeScroll = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;
const scaleIn = keyframes`
  from { opacity: 0; transform: scale(0.3) translate(100%, 100%); }
  to { opacity: 1; transform: scale(1) translate(0, 0); }
`;


// --- Styled Components ---
const DynamicBackground = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: -1;
  background: linear-gradient(-45deg, #0d0d10, #1a1f2c, #3c2a4d, #121212, #233a4f);
  background-size: 400% 400%; animation: ${auroraAnimation} 30s ease infinite; opacity: 0.6;
`;

const Header = styled.nav`
  position: fixed; top: 0; left: 0; width: 100%; padding: 20px 5%; box-sizing: border-box; display: flex; justify-content: space-between; align-items: center; z-index: 10;
  background: rgba(18, 18, 18, 0.5); backdrop-filter: blur(10px); border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Logo = styled.h2`
  font-family: 'Playfair Display', serif; font-size: 1.8rem; margin: 0; font-weight: 700;
  letter-spacing: 1px; color: #f0f0f0; span { color: #E0A030; }
`;

const NavLink = styled(Link)`
  color: #c0c0c0; margin-left: 25px; text-decoration: none; font-weight: 500; font-size: 1rem; transition: color 0.3s ease;
  &:hover { color: #E0A030; }
`;

const DashboardWrapper = styled.main`
  display: flex; flex-direction: column; justify-content: center; align-items: center; min-height: 100vh;
  padding: 120px 20px 40px; box-sizing: border-box;
`;

const Heading = styled.h1`
  font-family: 'Playfair Display', serif; font-size: 3.8rem; margin-bottom: 50px; font-weight: 700; text-align: center; color: #f0f0f0;
  background: linear-gradient(45deg, #f0f0f0, #c0c0c0); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 15px rgba(0,0,0,0.5);
`;

const CardContainer = styled.div`
  display: flex; justify-content: center; gap: 40px; flex-wrap: wrap;
`;

const BackgroundImage = styled.div`
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover; background-position: center;
  transition: opacity 0.7s ease, transform 0.7s ease; z-index: 1;
`;

const CardContent = styled.div`
  position: relative; z-index: 3; width: 100%; height: 100%;
  display: flex; flex-direction: column; justify-content: flex-end;
  padding: 30px; box-sizing: border-box;
  background: linear-gradient(to top, ${(props) => props.gradientColor || "rgba(0,0,0,0.9)"} 25%, transparent 70%);
`;

const CategoryCard = styled.div`
  width: 300px; height: 380px; border-radius: 16px; cursor: pointer; background-color: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.1); position: relative; overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4); transition: box-shadow 0.4s ease;
  .default-bg { opacity: 1; }
  .hover-bg { opacity: 0; }
  &:hover .default-bg { opacity: 0; transform: scale(1.1); }
  &:hover .hover-bg { opacity: 1; transform: scale(1.1); }
  &:hover { box-shadow: 0 0 30px 5px ${(props) => props.glowColor || "#000"}; }
  h2 { font-family: 'Playfair Display', serif; font-size: 2.5rem; margin: 0 0 10px 0; text-shadow: 0 2px 8px rgba(0,0,0,0.8); }
  p { font-family: 'Inter', sans-serif; font-size: 1rem; line-height: 1.5; color: #a0a0b0; text-shadow: 0 1px 5px rgba(0,0,0,0.8); }
`;

const RecSection = styled.section`
  margin-top: 80px; width: 100%; max-width: 1200px; padding: 40px 0;
  background: rgba(20, 21, 24, 0.5); border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(12px); animation: ${fadeIn} 0.8s ease-out; overflow: hidden;
`;

const RecTitle = styled.h2`
  text-align: center; font-family: 'Playfair Display', serif; font-size: 2.2rem;
  margin-top: 0; margin-bottom: 40px; padding: 0 40px; color: #f0f0f0;
`;

const RecCategory = styled.div`
  margin-bottom: 20px;
  &:last-child { margin-bottom: 0; }
  h3 {
    font-family: 'Playfair Display', serif; color: #E0A030; margin: 0 0 15px 40px;
    font-size: 1.2rem; text-transform: uppercase;
  }
`;

const MarqueeContainer = styled.div`
  display: flex; width: max-content;
  animation: ${marqueeScroll} 45s linear infinite;
  &:hover { animation-play-state: paused; }
`;

const RecList = styled.div`
  display: flex; gap: 15px; padding: 0 15px;
`;

const RecItem = styled.div`
  background: rgba(255,255,255,0.08); padding: 10px 22px; border-radius: 20px;
  color: #ccc; font-weight: 500; font-size: 1rem; border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease; cursor: pointer; white-space: nowrap;
  &:hover {
    background: #E0A030; color: #121212; transform: translateY(-3px) scale(1.05);
    box-shadow: 0 4px 10px rgba(224, 160, 48, 0.2);
  }
`;

// --- ✨ MODAL & FAB STYLES ---

const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(8px);
  z-index: 1000; display: flex; justify-content: center; align-items: center;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalWrapper = styled.div`
  background: rgba(28, 29, 34, 0.7); border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  overflow: hidden; z-index: 1001; display: flex; flex-direction: column;
  transform-origin: bottom right;
  animation: ${scaleIn} 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
`;

const ChatbotModal = styled(ModalWrapper)`
  width: 400px; height: 550px;
  max-width: 90vw; max-height: 80vh;
`;

const SurpriseModal = styled(ModalWrapper)`
  width: 380px; max-width: 90vw;
  .content {
    padding: 20px; max-height: 400px; overflow-y: auto;
    img { width: 100%; height: auto; border-radius: 8px; margin-bottom: 15px; }
    h3 { margin: 0 0 10px 0; font-family: 'Playfair Display', serif; }
    p { margin: 4px 0; font-size: 0.9rem; color: #bbb; b { color: #E0A030; } }
    .description { margin-top: 15px; font-size: 0.95rem; line-height: 1.6; color: #ddd; }
  }
`;

const ModalHeader = styled.div`
  display: flex; justify-content: space-between; align-items: center;
  padding: 12px 20px; background-color: rgba(0,0,0,0.2);
  border-bottom: 1px solid rgba(255,255,255,0.1); flex-shrink: 0;
  span { font-weight: 600; color: ${(props) => props.color || '#E0A030'}; }
  .close-btn {
    background: none; border: none; color: #888; font-size: 1.5rem; line-height: 1;
    cursor: pointer; transition: color 0.2s ease;
    &:hover { color: #fff; }
  }
`;

const FabMenuContainer = styled.div`
  position: fixed; bottom: 30px; right: 30px;
  z-index: 999; display: flex; flex-direction: column; align-items: center;
`;

const FabOption = styled.button`
  width: 50px; height: 50px; border-radius: 50%; border: none;
  display: flex; justify-content: center; align-items: center; font-size: 1.6rem;
  cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  opacity: 0; transform: translateY(20px) scale(0.5);
  ${(props) => props.active && css`
    opacity: 1; transform: translateY(0) scale(1);
  `}
  &:hover { transform: scale(1.15) !important; }
`;

const ChatbotFabOption = styled(FabOption)`
  background-color: #E0A030; color: #121212; margin-bottom: 15px;
  transition-delay: ${(props) => (props.active ? '0.1s' : '0s')};
`;

const SurpriseFabOption = styled(FabOption)`
  background-color: #ff6f61; color: #fff; margin-bottom: 15px;
  transition-delay: ${(props) => (props.active ? '0.2s' : '0s')};
`;

const MainFab = styled.button`
  width: 60px; height: 60px; border-radius: 50%; border: none;
  background: linear-gradient(45deg, #E0A030, #ffc56e); color: #121212;
  display: flex; justify-content: center; align-items: center; font-size: 1.8rem;
  cursor: pointer; box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  transition: transform 0.3s ease, background 0.3s ease; z-index: 1000;
  &:hover { transform: scale(1.1); }
  svg {
    transition: transform 0.3s ease;
    transform: ${(props) => (props.active ? 'rotate(135deg)' : 'rotate(0)')};
  }
`;


// Helper component for marquee effect
const Marquee = ({ items }) => {
  const duplicatedItems = [...items, ...items];
  return (
    <MarqueeContainer>
      <RecList>
        {duplicatedItems.map((item, index) => <RecItem key={index}>{item}</RecItem>)}
      </RecList>
    </MarqueeContainer>
  );
};


function Dashboard() {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [isFabMenuOpen, setFabMenuOpen] = useState(false);
  const [recommendations, setRecommendations] = useState({ movies: [], books: [], songs: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [surpriseItem, setSurpriseItem] = useState(null);
  const [loadingSurprise, setLoadingSurprise] = useState(false);

  const handleNavigate = (type) => navigate(`/recommend/${type}`);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  useEffect(() => {
    const fetchRecommendations = async () => {
      setIsLoading(true);
      const userId = localStorage.getItem("email") || "guest_user";
      try {
        const res = await axios.post(
          "http://localhost:5001/recommend/adaptive",
          { user_id: userId },
          { headers: { "Content-Type": "application/json" } }
        );
        if (res.data && res.data.recommendations) {
          setRecommendations({
            movies: res.data.recommendations.movies.map(m => m.title),
            books: res.data.recommendations.books.map(b => b.title),
            songs: res.data.recommendations.songs.map(s => s.title),
          });
        }
      } catch (err) { console.error("Error fetching adaptive recommendations:", err); }
      setTimeout(() => setIsLoading(false), 500);
    };
    fetchRecommendations();
  }, []);

  const fetchSurprise = async () => {
    if (loadingSurprise) return;
    setLoadingSurprise(true);
    try {
      const res = await axios.post("http://localhost:5001/api/surprise", {});
      setSurpriseItem(res.data);
      setShowSurprise(true);
      setFabMenuOpen(false);
    } catch (err) {
      console.error(err);
      alert("Failed to get surprise. Make sure backend is running.");
    }
    setLoadingSurprise(false);
  };
  
  const openChat = () => {
    setShowChat(true);
    setFabMenuOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <DynamicBackground />

      <Header>
        <Logo>Recommend<span>AI</span></Logo>
        <div>
          <NavLink to="/dashboard">Dashboard</NavLink>
           <NavLink to="/profile" >Profile</NavLink>
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
          
        </div>
      </Header>

      <DashboardWrapper>
        <Heading>What Would You Like to Explore?</Heading>

        <CardContainer>
          <Tilt style={{ borderRadius: "16px" }} options={{ max: 20, scale: 1.05 }}>
             <CategoryCard onClick={() => handleNavigate("movies")} glowColor="rgba(204, 73, 112, 0.6)">
                <BackgroundImage className="default-bg" imageUrl="https://images.unsplash.com/photo-1574267432553-4b4628081c31?auto=format&fit=crop&w=800&q=80" />
                <BackgroundImage className="hover-bg" imageUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=800&q=80" />
                <CardContent gradientColor="rgba(80,30,80,0.9)">
                    <h2>Movies</h2><p>Discover timeless classics and new favorites curated just for you.</p>
                </CardContent>
            </CategoryCard>
          </Tilt>
          <Tilt style={{ borderRadius: "16px" }} options={{ max: 20, scale: 1.05 }}>
            <CategoryCard onClick={() => handleNavigate("books")} glowColor="rgba(69, 150, 117, 0.6)">
                <BackgroundImage className="default-bg" imageUrl="https://images.unsplash.com/photo-1550399105-c4db5fb85c18?auto=format&fit=crop&w=800&q=80" />
                <BackgroundImage className="hover-bg" imageUrl="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80" />
                <CardContent gradientColor="rgba(20,70,50,0.9)">
                    <h2>Books</h2><p>Personalized literary adventures for every kind of reader.</p>
                </CardContent>
            </CategoryCard>
          </Tilt>
          <Tilt style={{ borderRadius: "16px" }} options={{ max: 20, scale: 1.05 }}>
            <CategoryCard onClick={() => handleNavigate("songs")} glowColor="rgba(63, 102, 182, 0.6)">
                <BackgroundImage className="default-bg" imageUrl="https://images.unsplash.com/photo-1516223725357-6db4e29844a4?auto=format&fit=crop&w=800&q=80" />
                <BackgroundImage className="hover-bg" imageUrl="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80" />
                <CardContent gradientColor="rgba(30,50,110,0.9)">
                    <h2>Songs</h2><p>Find the soundtrack to your mood, vibe, and style.</p>
                </CardContent>
            </CategoryCard>
          </Tilt>
        </CardContainer>
        
        {!isLoading && (
          <RecSection>
            <RecTitle>✨ Based on Your Previous Choices</RecTitle>
            <RecCategory>
              <h3>🎬 Movies</h3>
              <Marquee items={recommendations.movies.length > 0 ? recommendations.movies : ['Loading your movie tastes...']} />
            </RecCategory>
            <RecCategory>
              <h3>📚 Books</h3>
              <Marquee items={recommendations.books.length > 0 ? recommendations.books : ['Finding your next great read...']} />
            </RecCategory>
            <RecCategory>
              <h3>🎵 Songs</h3>
              <Marquee items={recommendations.songs.length > 0 ? recommendations.songs : ['Curating a playlist for you...']} />
            </RecCategory>
          </RecSection>
        )}
      </DashboardWrapper>
      
      <FabMenuContainer>
        <SurpriseFabOption active={isFabMenuOpen} onClick={fetchSurprise} title="Surprise Me!">
          <GiMagicSwirl />
        </SurpriseFabOption>
        <ChatbotFabOption active={isFabMenuOpen} onClick={openChat} title="Chat with AI">
          <BsChatDotsFill />
        </ChatbotFabOption>
        <MainFab active={isFabMenuOpen} onClick={() => setFabMenuOpen(!isFabMenuOpen)}>
          <BsPlusLg />
        </MainFab>
      </FabMenuContainer>

      {showSurprise && surpriseItem && (
        <ModalOverlay onClick={() => setShowSurprise(false)}>
          <SurpriseModal onClick={(e) => e.stopPropagation()}> 
            <ModalHeader color="#ff6f61">
              <span>🎲 Surprise Recommendation</span>
              <button className="close-btn" onClick={() => setShowSurprise(false)}>×</button>
            </ModalHeader>
            <div className="content">
              {surpriseItem.image && <img src={surpriseItem.image} alt={surpriseItem.title} />}
              <h3>{surpriseItem.title}</h3>
              <p><b>Category:</b> {surpriseItem.category}</p>
              {surpriseItem.genre && <p><b>Genre:</b> {surpriseItem.genre}</p>}
              {surpriseItem.description && <p className="description">{surpriseItem.description}</p>}
            </div>
          </SurpriseModal>
        </ModalOverlay>
      )}

      {showChat && (
        <ModalOverlay onClick={() => setShowChat(false)}>
          <ChatbotModal onClick={(e) => e.stopPropagation()}>
            <ModalHeader>
              <span>🤖 AI Assistant</span>
              <button className="close-btn" onClick={() => setShowChat(false)}>×</button>
            </ModalHeader>
            <Chatbot isInline={true} />
          </ChatbotModal>
        </ModalOverlay>
      )}
    </>
  );
}

export default Dashboard;

