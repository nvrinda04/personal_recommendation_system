// src/pages/SurpriseMe.js
import React, { useState } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import axios from "axios";

// --- Global Styles ---
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;500;600&display=swap');
  body {
    margin: 0; padding: 0; box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    background-color: #121212; color: #f0f0f0;
  }
`;

// --- Animations ---
const backgroundAnimation = keyframes`
  0% { transform: scale(1); } 
  50% { transform: scale(1.05); } 
  100% { transform: scale(1); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(224, 160, 48, 0.7); }
  70% { box-shadow: 0 0 0 15px rgba(224, 160, 48, 0); }
  100% { box-shadow: 0 0 0 0 rgba(224, 160, 48, 0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
`;

// --- Styled Components ---
const DynamicBackground = styled.div`
  position: fixed; top: 0; left: 0; width: 100%; height: 100vh; z-index: -1;
  background: url('https://www.transparenttextures.com/patterns/dark-matter.png'),
              linear-gradient(135deg, #121212 0%, #1a1f2c 100%);
  opacity: 0.5; animation: ${backgroundAnimation} 60s ease-in-out infinite;
`;

const Wrapper = styled.div`
  display: flex; flex-direction: column; align-items: center;
  padding: 120px 20px 40px; min-height: 100vh;
`;

const Heading = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 3rem; margin-bottom: 40px; text-align: center;
  color: #E0A030; text-shadow: 0 2px 15px rgba(0,0,0,0.5);
`;

const SurpriseCard = styled.div`
  width: 350px; max-width: 90%; border-radius: 16px;
  background-color: #1e1e1e; overflow: hidden;
  margin-top: 30px; box-shadow: 0 15px 30px rgba(0,0,0,0.5);
  position: relative; animation: ${fadeIn} 0.6s ease forwards;
  transition: box-shadow 0.4s ease;
  &:hover { box-shadow: 0 0 25px 5px #E0A030; }

  img {
    width: 100%; height: 250px; object-fit: cover;
  }

  .content {
    padding: 20px; background: linear-gradient(to top, rgba(0,0,0,0.85) 25%, transparent 70%);
  }

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem; margin: 0 0 10px 0;
    color: #E0A030;
  }

  p {
    font-size: 0.95rem; margin: 5px 0; color: #ccc;
  }

  .description {
    color: #aaa; text-align: justify; margin-top: 10px;
  }
`;

const Button = styled.button`
  margin-top: 40px; padding: 12px 35px; font-size: 1rem;
  border-radius: 30px; border: none; cursor: pointer;
  background-color: #E0A030; color: #121212;
  font-weight: 600; box-shadow: 0 5px 15px rgba(224,160,48,0.4);
  animation: ${pulse} 2s infinite;
  transition: transform 0.3s ease;
  &:hover { transform: scale(1.1); animation: none; }
`;

export default function SurpriseMe() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSurprise = async () => {
    setLoading(true);
    try {
      const prompt = "Give me a random movie, book, or song with title, category, genre, description in JSON format";
      const res = await axios.post("http://localhost:5001/api/surprise", { prompt });
      setItem(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate surprise. Make sure your backend is running.");
    }
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <DynamicBackground />
      <Wrapper>
        <Heading>🎲 Surprise Me!</Heading>

        <Button onClick={fetchSurprise}>
          {loading ? "Generating..." : "Get a Random Surprise"}
        </Button>

        {item && (
          <SurpriseCard>
            {item.image && <img src={item.image} alt={item.title} />}
            <div className="content">
              <h2>{item.title}</h2>
              <p>Category: {item.category}</p>
              <p>Genre: {item.genre}</p>
              <p className="description">{item.description}</p>
            </div>
          </SurpriseCard>
        )}
      </Wrapper>
    </>
  );
}
