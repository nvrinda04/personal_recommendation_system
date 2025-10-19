// // src/pages/LoginPage.js

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled, { keyframes, createGlobalStyle } from 'styled-components';

// // --- Global Styles & Fonts (Consistent with Landing Page) ---
// const GlobalStyle = createGlobalStyle`
//   @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap');
  
//   body {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: 'Montserrat', sans-serif;
//     background-color: #0d1117;
//     color: #e6edf3;
//   }
// `;

// // --- Animations (Consistent with Landing Page) ---
// const particleAnimation = keyframes`
//   0% { transform: translateY(0) rotate(0deg); opacity: 0; }
//   10% { opacity: 0.5; }
//   100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
// `;

// // --- Background Component (Consistent with Landing Page) ---
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
//     background-color: rgba(69, 140, 235, 0.6);
//     border-radius: 50%;
//     animation: ${particleAnimation} infinite ease-in-out;
//     filter: blur(2px);
//   }

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

// // --- Styled Components for the Login Page ---
// const PageWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   position: relative;
//   z-index: 2;
// `;

// const LoginCard = styled.div`
//   background: rgba(13, 17, 23, 0.8);
//   backdrop-filter: blur(10px);
//   padding: 40px;
//   border-radius: 20px;
//   box-shadow: 0 0 40px rgba(69, 140, 235, 0.3);
//   border: 1px solid rgba(69, 140, 235, 0.4);
//   width: 400px;
//   text-align: center;
// `;

// const Title = styled.h2`
//   margin-bottom: 30px;
//   font-size: 2rem;
//   font-weight: 700;
//   color: #e6edf3;
//   text-shadow: 0 0 10px rgba(69, 140, 235, 0.5);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 15px;
//   border-radius: 10px;
//   border: 1px solid #30363d;
//   background-color: #0d1117;
//   color: #e6edf3;
//   font-size: 1rem;
//   font-family: 'Roboto', sans-serif;
//   box-sizing: border-box;
//   transition: all 0.3s ease;

//   &::placeholder {
//     color: #8b949e;
//   }

//   &:focus {
//     outline: none;
//     border-color: #458ceb;
//     box-shadow: 0 0 15px rgba(69, 140, 235, 0.5);
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 15px;
//   border: none;
//   border-radius: 10px;
//   background: linear-gradient(90deg, #6243EA, #458CEB);
//   color: #fff;
//   font-size: 1.1rem;
//   font-weight: 600;
//   font-family: 'Montserrat', sans-serif;
//   cursor: pointer;
//   transition: all 0.3s ease;
//   box-shadow: 0 5px 20px rgba(69, 140, 235, 0.3);

//   &:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 8px 25px rgba(69, 140, 235, 0.5);
//   }
// `;

// const SignupLink = styled.p`
//   margin-top: 25px;
//   color: #8b949e;
//   font-size: 0.9rem;
//   font-family: 'Roboto', sans-serif;

//   span {
//     color: #458ceb;
//     font-weight: 500;
//     cursor: pointer;
//     text-decoration: underline;

//     &:hover {
//       color: #6243EA;
//     }
//   }
// `;

// // --- New styled component for inline login message ---
// const LoginMessage = styled.p`
//   margin-top: 10px;
//   color: ${props => props.error ? "#ff4d4f" : "#58d68d"};
//   font-size: 0.9rem;
//   font-family: 'Roboto', sans-serif;
//   text-align: center;
// `;

// function LoginPage() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginMessage, setLoginMessage] = useState("");
//   const [isError, setIsError] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoginMessage("");
//     setIsError(false);
//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });
//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("role", data.role);
//         setLoginMessage("Login successful, redirecting...");
//         setTimeout(() => {
//           if (data.role?.toLowerCase() === "admin") {
//             navigate("/admin-dashboard");
//           } else {
//             navigate("/dashboard");
//           }
//         }, 1500);
//       } else {
//         setIsError(true);
//         setLoginMessage(data.error || "Login failed ❌");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setIsError(true);
//       setLoginMessage("Something went wrong ❌");
//     }
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <ParticlesBackground>
//         {Array.from({ length: 50 }).map((_, i) => (
//           <div key={i} className="particle" />
//         ))}
//       </ParticlesBackground>

//       <PageWrapper>
//         <LoginCard>
//           <Title>Welcome Back</Title>
//           <Form onSubmit={handleLogin}>
//             <Input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             {loginMessage && <LoginMessage error={isError}>{loginMessage}</LoginMessage>}
//             <Button type="submit">Login</Button>
//           </Form>
//           <SignupLink>
//             Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
//           </SignupLink>
//         </LoginCard>
//       </PageWrapper>
//     </>
//   );
// }

// export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled, { createGlobalStyle, keyframes } from "styled-components";

// // --- Styled Components ---

// const GlobalStyle = createGlobalStyle`
//   body {
//     font-family: 'Poppins', sans-serif;
//     margin: 0;
//     background-color: #0a0c1b;
//     color: #ffffff;
//     overflow: hidden;
//   }
// `;

// const particlesAnimation = keyframes`
//   0% { transform: translateY(0); opacity: 1; }
//   100% { transform: translateY(-100vh); opacity: 0; }
// `;

// const ParticlesBackground = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   z-index: 1;

//   .particle {
//     position: absolute;
//     bottom: -20px;
//     background: rgba(255, 255, 255, 0.2);
//     border-radius: 50%;
//     animation: ${particlesAnimation} linear infinite;
//   }
// `;

// const PageWrapper = styled.div`
//   min-height: 100vh;
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: linear-gradient(to bottom right, #0a0c1b, #1a1a2e, #000000);
//   z-index: 2;
// `;

// const LoginCard = styled.div`
//   position: relative;
//   background-color: rgba(26, 26, 46, 0.85);
//   backdrop-filter: blur(12px);
//   padding: 40px 30px;
//   border-radius: 15px;
//   box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
//   width: 380px;
//   text-align: center;
//   z-index: 3;
//   border: 1px solid rgba(255, 255, 255, 0.1);
// `;

// const Title = styled.h2`
//   margin-bottom: 25px;
//   font-size: 2.2rem;
//   font-weight: 700;
//   color: #ffffff;
//   text-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `;

// const Input = styled.input`
//   box-sizing: border-box;
//   width: 100%;
//   padding: 14px;
//   margin: 10px 0;
//   border-radius: 8px;
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   background-color: rgba(0, 0, 0, 0.3);
//   color: #ffffff;
//   font-size: 16px;
//   outline: none;
//   transition: border-color 0.3s, box-shadow 0.3s;

//   &:focus {
//     border-color: #e0c25b;
//     box-shadow: 0 0 15px rgba(224, 194, 91, 0.3);
//   }
// `;

// const Button = styled.button`
//   width: 100%;
//   padding: 14px;
//   margin-top: 15px;
//   border: none;
//   border-radius: 30px;
//   background: linear-gradient(135deg, #699af5, #e0c25b);
//   color: #000;
//   font-size: 16px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: transform 0.2s, box-shadow 0.2s;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
//   }

//   &:disabled {
//     background: #6c757d;
//     cursor: not-allowed;
//     transform: none;
//     box-shadow: none;
//   }
// `;

// const LoginMessage = styled.div`
//   min-height: 21px;
//   margin: 5px 0 10px;
//   font-size: 14px;
//   font-weight: 500;
//   text-align: center;
//   color: ${props => (props.error ? "#ff4d4d" : "#28a745")};
// `;

// const SignupLink = styled.p`
//   margin-top: 25px;
//   font-size: 14px;
//   color: rgba(255, 255, 255, 0.7);

//   span {
//     color: #e0c25b;
//     cursor: pointer;
//     font-weight: 600;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// function LoginPage() {
//   const navigate = useNavigate();
//   const [usernameOrEmail, setUsernameOrEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [notification, setNotification] = useState({ message: "", type: "" });
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setNotification({ message: "", type: "" });

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ usernameOrEmail, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("role", data.role);
//         localStorage.setItem("userName", data.name);

//         const role = (data.role || "").toLowerCase();
//         setNotification({ message: "Login successful! Redirecting...", type: "success" });
//         setTimeout(() => {
//           if (role === "admin") {
//             navigate("/admin-dashboard");
//           } else {
//             navigate("/dashboard");
//           }
//         }, 1500);
//       } else {
//         setNotification({ message: data.error || "Login failed", type: "error" });
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       setNotification({ message: "Cannot connect to the server.", type: "error" });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleInputChange = (setter) => (e) => {
//     setter(e.target.value);
//     if (notification.message) setNotification({ message: "", type: "" });
//   };

//   // Function to generate random particles for the background
//   const renderParticles = () => {
//     return Array.from({ length: 50 }).map((_, i) => {
//       const style = {
//         left: `${Math.random() * 100}vw`,
//         width: `${Math.random() * 3 + 1}px`,
//         height: `${Math.random() * 3 + 1}px`,
//         animationDuration: `${Math.random() * 15 + 5}s`,
//         animationDelay: `${Math.random() * 5}s`,
//       };
//       return <div key={i} className="particle" style={style} />;
//     });
//   };

//   return (
//     <>
//       <GlobalStyle />
//       <ParticlesBackground>{renderParticles()}</ParticlesBackground>

//       <PageWrapper>
//         <LoginCard>
//           <Title>Welcome Back</Title>
//           <Form onSubmit={handleLogin}>
//             <Input
//               type="text"
//               placeholder="Username or Email"
//               value={usernameOrEmail}
//               onChange={handleInputChange(setUsernameOrEmail)}
//               required
//             />
//             <Input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={handleInputChange(setPassword)}
//               required
//             />
//             {notification.message && (
//               <LoginMessage error={notification.type === 'error'}>
//                 {notification.message}
//               </LoginMessage>
//             )}
//             <Button type="submit" disabled={isLoading}>
//               {isLoading ? "Logging In..." : "Log In"}
//             </Button>
//           </Form>
//           <SignupLink>
//             Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
//           </SignupLink>
//         </LoginCard>
//       </PageWrapper>
//     </>
//   );
// }

// export default LoginPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from 'styled-components';

// --- Global Styles & Fonts ---
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500&display=swap');
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: #0d1117;
    color: #e6edf3;
  }
`;

// --- Animations ---
const particleAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0; }
  10% { opacity: 0.5; }
  100% { transform: translateY(-1000px) rotate(720deg); opacity: 0; }
`;

// --- Background Component ---
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
`;

// --- Styled Components for the Login Page ---
const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 2;
`;

const LoginCard = styled.div`
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
  gap: 20px;
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

  &::placeholder {
    color: #8b949e;
  }

  &:focus {
    outline: none;
    border-color: #458ceb;
    box-shadow: 0 0 15px rgba(69, 140, 235, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 15px;
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
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(69, 140, 235, 0.5);
  }
`;

const SignupLink = styled.p`
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

const LoginMessage = styled.p`
  margin-top: -10px;
  margin-bottom: 0;
  color: ${props => props.error ? "#ff4d4f" : "#58d68d"};
  font-size: 0.9rem;
  font-family: 'Roboto', sans-serif;
  text-align: center;
`;

// --- Merged Component ---
function LoginPage() {
  const navigate = useNavigate();
  // State from your original, more robust component
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [isLoading, setIsLoading] = useState(false);

  // Login logic from your original component
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification({ message: "", type: "" });

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usernameOrEmail, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        localStorage.setItem("userName", data.name);

        const role = (data.role || "").toLowerCase();
        setNotification({ message: "Login successful! Redirecting...", type: "success" });
        setTimeout(() => {
          if (role === "admin") {
            navigate("/admin-dashboard");
          } else {
            navigate("/dashboard");
          }
        }, 1500);
      } else {
        setNotification({ message: data.error || "Login failed", type: "error" });
      }
    } catch (err) {
      console.error("Login error:", err);
      setNotification({ message: "Cannot connect to the server.", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function from your original component for cleaner input handling
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
    if (notification.message) setNotification({ message: "", type: "" });
  };

  // Function to generate random particles for the background
  const renderParticles = () => {
    return Array.from({ length: 50 }).map((_, i) => {
      const style = {
        left: `${Math.random() * 100}vw`,
        width: `${Math.random() * 3 + 1}px`,
        height: `${Math.random() * 3 + 1}px`,
        animationDuration: `${Math.random() * 15 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
        backgroundColor: `rgba(${Math.random() * 50 + 50}, ${Math.random() * 50 + 100}, ${Math.random() * 50 + 200}, ${Math.random() * 0.4 + 0.2})`,
      };
      return <div key={i} className="particle" style={style} />;
    });
  };

  return (
    <>
      <GlobalStyle />
      <ParticlesBackground>{renderParticles()}</ParticlesBackground>

      <PageWrapper>
        <LoginCard>
          <Title>Welcome Back</Title>
          <Form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Username or Email"
              value={usernameOrEmail}
              onChange={handleInputChange(setUsernameOrEmail)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange(setPassword)}
              required
            />
            {notification.message && (
              <LoginMessage error={notification.type === 'error'}>
                {notification.message}
              </LoginMessage>
            )}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Logging In..." : "Log In"}
            </Button>
          </Form>
          <SignupLink>
            Don't have an account? <span onClick={() => navigate("/signup")}>Sign Up</span>
          </SignupLink>
        </LoginCard>
      </PageWrapper>
    </>
  );
}

export default LoginPage;
