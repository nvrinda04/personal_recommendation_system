// src/pages/SignupPage.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// --- Global Styles & Fonts (Consistent with other pages) ---
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: #0d1117;
    color: #e6edf3;
  }
`;

// --- Animations (Consistent with other pages) ---
const particleAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.5; }
  100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
`;

// --- Background Component (Consistent with other pages) ---
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
    background-color: rgba(69, 140, 235, 0.6);
    border-radius: 50%;
    animation: ${particleAnimation} infinite ease-in-out;
    filter: blur(2px);
  }

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

// --- Styled Components for the Signup Page ---
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Use min-height to handle content overflow */
  padding: 40px 0; /* Add padding for smaller screens */
  position: relative;
  z-index: 2;
`;

const SignupCard = styled.div`
  background: rgba(13, 17, 23, 0.8);
  backdrop-filter: blur(10px);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 0 40px rgba(69, 140, 235, 0.3);
  border: 1px solid rgba(69, 140, 235, 0.4);
  width: 400px;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 700;
  color: #e6edf3;
  text-shadow: 0 0 10px rgba(69, 140, 235, 0.5);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between inputs and button */
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #30363d;
  background-color: #0d1117;
  color: #e6edf3;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &::placeholder { color: #8b949e; }
  &:focus {
    outline: none;
    border-color: #458ceb;
    box-shadow: 0 0 15px rgba(69, 140, 235, 0.5);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #30363d;
  background-color: #0d1117;
  color: #e6edf3;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  transition: all 0.3s ease;
  appearance: none; /* Remove default dropdown arrow */
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23458CEB%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 15px top 50%;
  background-size: .65em auto;

  &:focus {
    outline: none;
    border-color: #458ceb;
    box-shadow: 0 0 15px rgba(69, 140, 235, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(90deg, #6243EA, #458CEB);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(69, 140, 235, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(69, 140, 235, 0.5);
  }
`;

const VerifyButton = styled(Button)`
  background: #28a745; /* Green for verification step */
  box-shadow: 0 5px 20px rgba(40, 167, 69, 0.3);
  &:hover {
    box-shadow: 0 8px 25px rgba(40, 167, 69, 0.5);
  }
`;

const ErrorMessage = styled.p`
  margin-top: 20px;
  color: ${props => props.isSuccess ? '#28a745' : '#e53e3e'}; /* Green for success, red for error */
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

const LoginLink = styled.p`
  margin-top: 25px;
  color: #8b949e;
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;

  span {
    color: #458ceb;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: #6243EA;
    }
  }
`;

function SignupPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [errorMsg, setErrorMsg] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const allowedAdmins = ["kavyapathi60@gmail.com", "otheradmin@gmail.com"];

  // Step 1: Send OTP (logic unchanged)
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    if (role === "Admin" && !allowedAdmins.includes(email)) {
      setErrorMsg("You don’t have permission to be Admin ❌");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });
      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
        setErrorMsg("✅ OTP sent to your email!");
      } else {
        setErrorMsg(data.error || "Failed to send OTP ❌");
      }
    } catch (err) {
      setErrorMsg("Something went wrong while sending OTP ❌");
    }
  };

  // Step 2: Verify OTP (logic unchanged)
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/verify-otp-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("role", data.role);
        navigate(data.role === "Admin" ? "/admin-dashboard" : "/dashboard");
      } else {
        setErrorMsg(data.error || "Invalid OTP ❌");
      }
    } catch (err) {
      setErrorMsg("Something went wrong during OTP verification ❌");
    }
  };

  return (
    <>
      <GlobalStyle />
      <ParticlesBackground>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </ParticlesBackground>

      <PageWrapper>
        <SignupCard>
          <Title>Create an Account</Title>

          {!otpSent ? (
            <Form onSubmit={handleSendOtp}>
              <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <Select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
              </Select>
              <Button type="submit">Sign Up</Button>
            </Form>
          ) : (
            <Form onSubmit={handleVerifyOtp}>
              <Input type="text" placeholder="Enter OTP from your email" value={otp} onChange={(e) => setOtp(e.target.value)} required />
              <VerifyButton type="submit">Verify & Create Account</VerifyButton>
            </Form>
          )}

          {errorMsg && <ErrorMessage isSuccess={errorMsg.includes("✅")}>{errorMsg}</ErrorMessage>}
          
          <LoginLink>
            Already have an account? <span onClick={() => navigate("/login")}>Log In</span>
          </LoginLink>
        </SignupCard>
      </PageWrapper>
    </>
  );
}

export default SignupPage;