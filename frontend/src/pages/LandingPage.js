// // frontend/src/pages/LandingPage.js

// import React, { useRef, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaFilm, FaBook, FaMusic } from 'react-icons/fa';
// import styled, { keyframes, createGlobalStyle } from 'styled-components'; // Added createGlobalStyle

// // --- Global Styles for Fonts and Reset (New!) ---
// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap');
  
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Montserrat', sans-serif; /* Primary font */
//     background-color: #0d1117; /* Dark background */
//     color: #e6edf3; /* Light text */
//   }
// `;

// // --- Animations (Keyframes) ---
// const fadeInDown = keyframes`from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); }`;
// const fadeInUp = keyframes`from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); }`;
// const gradientFlow = keyframes`
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// `;
// const spin = keyframes`to { transform: rotate(360deg); }`;

// // --- Particle Background Animation (New!) ---
// const particleAnimation = keyframes`
//   0% { transform: translateY(0) rotate(0deg); opacity: 0; }
//   10% { opacity: 0.5; }
//   100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
// `;

// const ParticlesBackground = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   z-index: -1;
//   background: linear-gradient(135deg, #0d1117 0%, #1a202c 50%, #0d1117 100%);

//   .particle {
//     position: absolute;
//     background-color: rgba(69, 140, 235, 0.6); /* Blueish glow */
//     border-radius: 50%;
//     animation: ${particleAnimation} infinite ease-in-out;
//     filter: blur(2px); /* Soften particles */
//   }

//   /* Specific particle styles to make them appear random */
//   ${Array.from({ length: 50 }).map((_, i) => `
//     .particle:nth-child(${i + 1}) {
//       width: ${Math.random() * 5 + 5}px;
//       height: ${Math.random() * 5 + 5}px;
//       left: ${Math.random() * 100}vw;
//       top: ${Math.random() * 100}vh;
//       animation-delay: ${Math.random() * 10}s;
//       animation-duration: ${Math.random() * 10 + 10}s;
//       background-color: rgba(${Math.random() * 50 + 50}, ${Math.random() * 50 + 100}, ${Math.random() * 50 + 200}, ${Math.random() * 0.4 + 0.2});
//     }
//   `).join('')}
// `;


// // --- Styled Components for Layout & Elements ---
// const LandingPageWrapper = styled.div`
//   min-height: 100vh;
//   position: relative;
//   z-index: 1;
//   padding: 0 5%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center; /* Center content vertically if space allows */
//   align-items: center;
// `;

// const LandingOverlay = styled.div`
//   position: fixed;
//   top: 0; left: 0; right: 0; bottom: 0;
//   background: radial-gradient(circle, rgba(13, 17, 23, 0.4) 0%, rgba(13, 17, 23, 0.8) 70%, rgba(13, 17, 23, 0.95) 100%);
//   z-index: 1;
// `;

// const LandingContent = styled.div`
//   position: relative;
//   z-index: 2;
//   width: 100%;
//   max-width: 1200px; /* Constrain max width for better readability */
//   padding: 50px 0;
// `;

// const Header = styled.header`
//   text-align: center;
//   padding: 80px 0 60px; /* Adjusted padding */
//   animation: ${fadeInDown} 1.2s ease-out;
// `;

// const Headline = styled.h1`
//   font-family: 'Montserrat', sans-serif;
//   font-size: 4.5rem; /* Larger font size */
//   font-weight: 900; /* Bolder */
//   margin-bottom: 1.5rem;
//   letter-spacing: 2px;
//   text-shadow: 0 0 15px rgba(69, 140, 235, 0.5); /* Subtle glow */

//   span {
//     background: linear-gradient(90deg, #6243EA, #458CEB, #2ECAD0); /* More vibrant gradient */
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     animation: ${gradientFlow} 4s ease infinite alternate; /* Slower, alternating flow */
//     background-size: 200% auto;
//   }
// `;

// const Tagline = styled.p`
//   font-family: 'Roboto', sans-serif; /* Different font for tagline */
//   font-size: 1.3rem; /* Slightly larger */
//   max-width: 700px;
//   margin: 0 auto;
//   color: #a0b0c0; /* Softer color */
//   line-height: 1.6;
// `;

// const Section = styled.section`
//   text-align: center;
//   padding: 80px 0;
//   h2 {
//     font-family: 'Montserrat', sans-serif;
//     font-size: 3rem; /* Larger section titles */
//     font-weight: 700;
//     margin-bottom: 3rem;
//     color: #e6edf3;
//     text-shadow: 0 0 10px rgba(69, 140, 235, 0.3);
//   }
// `;

// const InteractiveDemoSection = styled(Section)`
//   padding-top: 40px;
//   animation: ${fadeInUp} 1.2s ease-out 0.3s forwards;
//   opacity: 0; /* Start hidden for animation */
// `;

// const DemoWidget = styled.div`
//   background: rgba(255, 255, 255, 0.03); /* More subtle background */
//   border-radius: 20px;
//   padding: 50px; /* More padding */
//   max-width: 750px;
//   margin: 0 auto;
//   border: 1px solid rgba(69, 140, 235, 0.3); /* Blue border for high-tech feel */
//   box-shadow: 0 0 30px rgba(69, 140, 235, 0.15); /* Soft outer glow */
//   min-height: 280px; /* Slightly taller */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   transition: all 0.3s ease;
//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 0 40px rgba(69, 140, 235, 0.3);
//   }

//   h3 { 
//     font-family: 'Roboto', sans-serif;
//     font-size: 1.8rem; /* Larger demo questions */
//     margin-top: 0; 
//     margin-bottom: 2.5rem; 
//     color: #e6edf3;
//   }
// `;

// const ButtonGroup = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 15px; /* Spacing between buttons */

//   button {
//     background: #1e2a3b; /* Darker button background */
//     color: #e6edf3;
//     border: 1px solid #458ceb; /* Blue border */
//     padding: 18px 35px; /* Larger buttons */
//     border-radius: 12px; /* Slightly less rounded */
//     cursor: pointer;
//     font-size: 1.1rem; /* Larger font */
//     font-weight: 600;
//     transition: all 0.3s ease;
//     box-shadow: 0 2px 10px rgba(0,0,0,0.2);

//     &:hover {
//       background: #458ceb; /* Blue hover */
//       border-color: #458ceb;
//       transform: translateY(-2px) scale(1.02);
//       box-shadow: 0 5px 20px rgba(69, 140, 235, 0.4);
//     }
//   }
// `;

// const BackButton = styled.button`
//   background: transparent !important;
//   color: #a0b0c0 !important;
//   border: none !important;
//   margin-top: 30px !important;
//   font-size: 1rem !important;
//   text-decoration: none !important; /* Ensure no underline by default */
//   &:hover { 
//     text-decoration: underline !important; 
//     color: #458ceb !important; /* Blue hover for back button */
//     transform: none !important;
//     box-shadow: none !important;
//   }
// `;

// const FeaturesSection = styled(Section)`
//   padding-top: 60px;
//   padding-bottom: 100px;
// `;

// const FeaturesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Slightly wider cards */
//   gap: 30px;
//   max-width: 1000px;
//   margin: 0 auto;
// `;

// const FeatureCard = styled.div`
//   background: rgba(255, 255, 255, 0.03);
//   padding: 35px; /* More padding */
//   border-radius: 15px;
//   border: 1px solid rgba(69, 140, 235, 0.2); /* Subtle blue border */
//   box-shadow: 0 0 20px rgba(69, 140, 235, 0.08);
//   transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

//   &:hover {
//     transform: translateY(-8px);
//     box-shadow: 0 10px 30px rgba(69, 140, 235, 0.3);
//     background: rgba(255, 255, 255, 0.05); /* Slightly brighter on hover */
//   }

//   .feature-icon {
//     font-size: 3.5rem; /* Larger icons */
//     color: #458ceb; /* Blue color */
//     margin-bottom: 1.5rem;
//     filter: drop-shadow(0 0 8px rgba(69, 140, 235, 0.6)); /* Glow effect for icons */
//   }

//   h3 {
//     font-family: 'Montserrat', sans-serif;
//     font-size: 1.8rem; /* Larger feature titles */
//     font-weight: 700;
//     margin-bottom: 0.8rem;
//     color: #e6edf3;
//   }

//   p {
//     font-family: 'Roboto', sans-serif;
//     color: #a0b0c0;
//     line-height: 1.7;
//     font-size: 1.05rem;
//   }
// `;

// const LoadingState = styled.div`
//   padding: 20px 0;
//   .spinner {
//     border: 4px solid rgba(255, 255, 255, 0.1);
//     border-left-color: #458ceb; /* Blue spinner */
//     border-radius: 50%;
//     width: 50px;
//     height: 50px;
//     animation: ${spin} 1s linear infinite;
//     margin: 0 auto 1rem;
//   }
// `;

// const MainCTA = styled.button`
//   background-color: #1DB954; /* Keeping Spotify green for strong contrast/action */
//   color: white;
//   padding: 18px 40px; /* Larger CTA */
//   border-radius: 50px;
//   border: none;
//   font-size: 1.2rem;
//   font-weight: 700;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   margin-bottom: 1.5rem;
//   &:hover {
//     transform: scale(1.03);
//     box-shadow: 0 6px 25px rgba(29, 185, 84, 0.5);
//   }
// `;

// const LoginLink = styled.p`
//   font-family: 'Roboto', sans-serif;
//   color: #a0b0c0;
//   font-size: 1rem;
//   margin-top: 1.5rem;
//   span {
//     color: #458ceb; /* Blue link */
//     cursor: pointer;
//     text-decoration: underline;
//     &:hover {
//         color: #6243EA; /* Purple hover */
//     }
//   }
// `;

// // --- The Main React Component ---
// function LandingPage() {
//   const navigate = useNavigate();
//   const containerRef = useRef(null); // This ref is no longer used for GSAP scroll, but kept for potential future use or if you revert.
//   const [step, setStep] = useState(1);
//   const [mood, setMood] = useState('');

//   // The GSAP animation for scrolling items is now REMOVED
//   // in favor of the ParticlesBackground.
//   // The useEffect for GSAP is completely gone from here.

//   // Interactive Demo logic (unchanged functionality)
//   const handleMoodSelect = (selectedMood) => { setMood(selectedMood); setStep(2); };
//   const handleGenreSelect = () => { setStep(3); setTimeout(() => setStep(4), 2000); };
//   const resetDemo = () => { setStep(1); setMood(''); };

//   const renderMiniDemo = () => {
//     switch (step) {
//       case 1: return ( <> <h3>First, what are you in the mood for?</h3> <ButtonGroup> <button onClick={() => handleMoodSelect('Movie')}>🎬 Movie</button> <button onClick={() => handleMoodSelect('Book')}>📚 Book</button> <button onClick={() => handleMoodSelect('Song')}>🎵 Song</button> </ButtonGroup> </> );
//       case 2: return ( <> <h3>Great! Now, pick a genre.</h3> <ButtonGroup> {['Action', 'Comedy', 'Sci-Fi', 'Drama', 'Mystery'].map(genre => ( <button key={genre} onClick={handleGenreSelect}>{genre}</button> ))} </ButtonGroup> <BackButton onClick={resetDemo}>Back</BackButton> </> );
//       case 3: return ( <LoadingState> <div className="spinner"></div> <p>Analyzing your taste...</p> </LoadingState> );
//       case 4: return ( 
//         <div className="recommendation-result"> 
//             <p>We've found the perfect {mood} for you!</p> 
//             <h3>Sign up to reveal your personalized recommendations.</h3> 
//             <MainCTA onClick={() => navigate('/signup')}>Create Your Free Account</MainCTA> 
//             <LoginLink>
//                 Already have an account? <span onClick={() => navigate('/login')}>Log In</span>
//             </LoginLink>
//             <BackButton onClick={resetDemo}>Try Again</BackButton> 
//         </div> 
//       );
//       default: return null;
//     }
//   };

//   // JSX to render the page
//   return (
//     <>
//       <GlobalStyle /> {/* Apply global styles */}
//       <ParticlesBackground>
//         {Array.from({ length: 50 }).map((_, i) => (
//           <div key={i} className="particle" />
//         ))}
//       </ParticlesBackground>
      
//       <LandingOverlay />
      
//       <LandingPageWrapper>
//         <LandingContent>
//           <Header>
//             <Headline>Find Your Next <span>Obsession</span>.</Headline>
//             <Tagline>Stop searching, start discovering. Our AI curates personalized recommendations for movies, books, and music, just for you.</Tagline>
//           </Header>

//           <InteractiveDemoSection>
//             <h2>Get a Taste of Our AI</h2>
//             <DemoWidget>{renderMiniDemo()}</DemoWidget>
//           </InteractiveDemoSection>

//           <FeaturesSection>
//             <h2>Discover Everything in One Place</h2>
//             <FeaturesGrid>
//               <FeatureCard> <FaFilm className="feature-icon" /> <h3>Movies</h3> <p>From blockbuster hits to indie gems, find films you'll love.</p> </FeatureCard>
//               <FeatureCard> <FaBook className="feature-icon" /> <h3>Books</h3> <p>Uncover your next favorite author and get lost in a new story.</p> </FeatureCard>
//               <FeatureCard> <FaMusic className="feature-icon" /> <h3>Music</h3> <p>Explore new artists and songs based on your listening habits.</p> </FeatureCard>
//             </FeaturesGrid>
//           </FeaturesSection>
//         </LandingContent>
//       </LandingPageWrapper>
//     </>
//   );
// }

// export default LandingPage;




import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFilm, FaBook, FaMusic } from 'react-icons/fa';
import styled, { keyframes, createGlobalStyle } from 'styled-components'; // Added createGlobalStyle

// --- Global Styles for Fonts and Reset (New!) ---
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif; /* Primary font */
    background-color: #0d1117; /* Dark background */
    color: #e6edf3; /* Light text */
  }
`;

// --- Animations (Keyframes) ---
const fadeInDown = keyframes`from { opacity: 0; transform: translateY(-30px); } to { opacity: 1; transform: translateY(0); }`;
const fadeInUp = keyframes`from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); }`;
const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const spin = keyframes`to { transform: rotate(360deg); }`;

// --- Particle Background Animation (New!) ---
const particleAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.5; }
  100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
`;

const ParticlesBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: linear-gradient(135deg, #0d1117 0%, #1a202c 50%, #0d1117 100%);

  .particle {
    position: absolute;
    background-color: rgba(69, 140, 235, 0.6); /* Blueish glow */
    border-radius: 50%;
    animation: ${particleAnimation} infinite ease-in-out;
    filter: blur(2px); /* Soften particles */
  }

  /* Specific particle styles to make them appear random */
  ${Array.from({ length: 50 }).map((_, i) => `
    .particle:nth-child(${i + 1}) {
      width: ${Math.random() * 5 + 5}px;
      height: ${Math.random() * 5 + 5}px;
      left: ${Math.random() * 100}vw;
      top: ${Math.random() * 100}vh;
      animation-delay: ${Math.random() * 10}s;
      animation-duration: ${Math.random() * 10 + 10}s;
      background-color: rgba(${Math.random() * 50 + 50}, ${Math.random() * 50 + 100}, ${Math.random() * 50 + 200}, ${Math.random() * 0.4 + 0.2});
    }
  `).join('')}
`;


// --- Styled Components for Layout & Elements ---
const TopNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 5%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  animation: ${fadeInDown} 0.8s ease-out;
  background: rgba(13, 17, 23, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Logo = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: #e6edf3;
  cursor: pointer;

  span {
    color: #458CEB;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 15px;
`;

const NavButton = styled.button`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: transparent;
  border: 1px solid #458ceb;
  color: #458ceb;

  &:hover {
    background: #458ceb;
    color: #fff;
    transform: translateY(-2px);
  }

  &.primary {
    background: #458ceb;
    color: #fff;
    border-color: #458ceb;
  }
  
  &.primary:hover {
      box-shadow: 0 0 15px rgba(69, 140, 235, 0.6);
  }
`;

const LandingPageWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  z-index: 1;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center content vertically if space allows */
  align-items: center;
`;

const LandingOverlay = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: radial-gradient(circle, rgba(13, 17, 23, 0.4) 0%, rgba(13, 17, 23, 0.8) 70%, rgba(13, 17, 23, 0.95) 100%);
  z-index: 1;
`;

const LandingContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px; /* Constrain max width for better readability */
  padding: 50px 0;
`;

const Header = styled.header`
  text-align: center;
  padding: 140px 0 60px; /* Increased top padding to avoid overlap with new nav */
  animation: ${fadeInDown} 1.2s ease-out;
`;

const Headline = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 4.5rem; /* Larger font size */
  font-weight: 900; /* Bolder */
  margin-bottom: 1.5rem;
  letter-spacing: 2px;
  text-shadow: 0 0 15px rgba(69, 140, 235, 0.5); /* Subtle glow */

  span {
    background: linear-gradient(90deg, #6243EA, #458CEB, #2ECAD0); /* More vibrant gradient */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${gradientFlow} 4s ease infinite alternate; /* Slower, alternating flow */
    background-size: 200% auto;
  }
`;

const Tagline = styled.p`
  font-family: 'Roboto', sans-serif; /* Different font for tagline */
  font-size: 1.3rem; /* Slightly larger */
  max-width: 700px;
  margin: 0 auto;
  color: #a0b0c0; /* Softer color */
  line-height: 1.6;
`;

const Section = styled.section`
  text-align: center;
  padding: 80px 0;
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem; /* Larger section titles */
    font-weight: 700;
    margin-bottom: 3rem;
    color: #e6edf3;
    text-shadow: 0 0 10px rgba(69, 140, 235, 0.3);
  }
`;

const InteractiveDemoSection = styled(Section)`
  padding-top: 40px;
  animation: ${fadeInUp} 1.2s ease-out 0.3s forwards;
  opacity: 0; /* Start hidden for animation */
`;

const DemoWidget = styled.div`
  background: rgba(255, 255, 255, 0.03); /* More subtle background */
  border-radius: 20px;
  padding: 50px; /* More padding */
  max-width: 750px;
  margin: 0 auto;
  border: 1px solid rgba(69, 140, 235, 0.3); /* Blue border for high-tech feel */
  box-shadow: 0 0 30px rgba(69, 140, 235, 0.15); /* Soft outer glow */
  min-height: 280px; /* Slightly taller */
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 40px rgba(69, 140, 235, 0.3);
  }

  h3 { 
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem; /* Larger demo questions */
    margin-top: 0; 
    margin-bottom: 2.5rem; 
    color: #e6edf3;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px; /* Spacing between buttons */

  button {
    background: #1e2a3b; /* Darker button background */
    color: #e6edf3;
    border: 1px solid #458ceb; /* Blue border */
    padding: 18px 35px; /* Larger buttons */
    border-radius: 12px; /* Slightly less rounded */
    cursor: pointer;
    font-size: 1.1rem; /* Larger font */
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);

    &:hover {
      background: #458ceb; /* Blue hover */
      border-color: #458ceb;
      transform: translateY(-2px) scale(1.02);
      box-shadow: 0 5px 20px rgba(69, 140, 235, 0.4);
    }
  }
`;

const BackButton = styled.button`
  background: transparent !important;
  color: #a0b0c0 !important;
  border: none !important;
  margin-top: 30px !important;
  font-size: 1rem !important;
  text-decoration: none !important; /* Ensure no underline by default */
  &:hover { 
    text-decoration: underline !important; 
    color: #458ceb !important; /* Blue hover for back button */
    transform: none !important;
    box-shadow: none !important;
  }
`;

const FeaturesSection = styled(Section)`
  padding-top: 60px;
  padding-bottom: 100px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Slightly wider cards */
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  padding: 35px; /* More padding */
  border-radius: 15px;
  border: 1px solid rgba(69, 140, 235, 0.2); /* Subtle blue border */
  box-shadow: 0 0 20px rgba(69, 140, 235, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(69, 140, 235, 0.3);
    background: rgba(255, 255, 255, 0.05); /* Slightly brighter on hover */
  }

  .feature-icon {
    font-size: 3.5rem; /* Larger icons */
    color: #458ceb; /* Blue color */
    margin-bottom: 1.5rem;
    filter: drop-shadow(0 0 8px rgba(69, 140, 235, 0.6)); /* Glow effect for icons */
  }

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem; /* Larger feature titles */
    font-weight: 700;
    margin-bottom: 0.8rem;
    color: #e6edf3;
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: #a0b0c0;
    line-height: 1.7;
    font-size: 1.05rem;
  }
`;

const LoadingState = styled.div`
  padding: 20px 0;
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-left-color: #458ceb; /* Blue spinner */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 1s linear infinite;
    margin: 0 auto 1rem;
  }
`;

const MainCTA = styled.button`
  background-color: #1DB954; /* Keeping Spotify green for strong contrast/action */
  color: white;
  padding: 18px 40px; /* Larger CTA */
  border-radius: 50px;
  border: none;
  font-size: 1.2rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1.5rem;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 25px rgba(29, 185, 84, 0.5);
  }
`;

const LoginLink = styled.p`
  font-family: 'Roboto', sans-serif;
  color: #a0b0c0;
  font-size: 1rem;
  margin-top: 1.5rem;
  span {
    color: #458ceb; /* Blue link */
    cursor: pointer;
    text-decoration: underline;
    &:hover {
        color: #6243EA; /* Purple hover */
    }
  }
`;

// --- The Main React Component ---
function LandingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [mood, setMood] = useState('');

  const handleMoodSelect = (selectedMood) => { setMood(selectedMood); setStep(2); };
  const handleGenreSelect = () => { setStep(3); setTimeout(() => setStep(4), 2000); };
  const resetDemo = () => { setStep(1); setMood(''); };

  const renderMiniDemo = () => {
    switch (step) {
      case 1: return ( <> <h3>First, what are you in the mood for?</h3> <ButtonGroup> <button onClick={() => handleMoodSelect('Movie')}>🎬 Movie</button> <button onClick={() => handleMoodSelect('Book')}>📚 Book</button> <button onClick={() => handleMoodSelect('Song')}>🎵 Song</button> </ButtonGroup> </> );
      case 2: return ( <> <h3>Great! Now, pick a genre.</h3> <ButtonGroup> {['Action', 'Comedy', 'Sci-Fi', 'Drama', 'Mystery'].map(genre => ( <button key={genre} onClick={handleGenreSelect}>{genre}</button> ))} </ButtonGroup> <BackButton onClick={resetDemo}>Back</BackButton> </> );
      case 3: return ( <LoadingState> <div className="spinner"></div> <p>Analyzing your taste...</p> </LoadingState> );
      case 4: return ( 
        <div className="recommendation-result"> 
            <p>We've found the perfect {mood} for you!</p> 
            <h3>Sign up to reveal your personalized recommendations.</h3> 
            <MainCTA onClick={() => navigate('/signup')}>Create Your Free Account</MainCTA> 
            <LoginLink>
                Already have an account? <span onClick={() => navigate('/login')}>Log In</span>
            </LoginLink>
            <BackButton onClick={resetDemo}>Try Again</BackButton> 
        </div> 
      );
      default: return null;
    }
  };

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <ParticlesBackground>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </ParticlesBackground>
      
      <LandingOverlay />

      <TopNav>
          <Logo onClick={() => navigate('/')}>Recommend<span>AI</span></Logo>
          <NavActions>
              <NavButton onClick={() => navigate('/login')}>Log In</NavButton>
              <NavButton className="primary" onClick={() => navigate('/signup')}>Sign Up</NavButton>
          </NavActions>
      </TopNav>
      
      <LandingPageWrapper>
        <LandingContent>
          <Header>
            <Headline>Find Your Next <span>Obsession</span>.</Headline>
            <Tagline>Stop searching, start discovering. Our AI curates personalized recommendations for movies, books, and music, just for you.</Tagline>
          </Header>

          <InteractiveDemoSection>
            <h2>Get a Taste of Our AI</h2>
            <DemoWidget>{renderMiniDemo()}</DemoWidget>
          </InteractiveDemoSection>

          <FeaturesSection>
            <h2>Discover Everything in One Place</h2>
            <FeaturesGrid>
              <FeatureCard> <FaFilm className="feature-icon" /> <h3>Movies</h3> <p>From blockbuster hits to indie gems, find films you'll love.</p> </FeatureCard>
              <FeatureCard> <FaBook className="feature-icon" /> <h3>Books</h3> <p>Uncover your next favorite author and get lost in a new story.</p> </FeatureCard>
              <FeatureCard> <FaMusic className="feature-icon" /> <h3>Music</h3> <p>Explore new artists and songs based on your listening habits.</p> </FeatureCard>
            </FeaturesGrid>
          </FeaturesSection>
        </LandingContent>
      </LandingPageWrapper>
    </>
  );
}

export default LandingPage;