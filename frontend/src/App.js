// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";

// // Pages
// import LandingPage from "./pages/LandingPage";
// import LoginPage from "./pages/LoginPage";
// import SignupPage from "./pages/SignupPage";
// import Dashboard from "./pages/Dashboard";
// import MovieRecommendations from "./pages/MovieRecommendations";
// import BookRecommendations from "./pages/BookRecommendations";
// import SongRecommendations from "./pages/SongRecommendations";
// import SurpriseMe from "./pages/SurpriseMe";
// import AdminDashboard from "./pages/AdminDashboard";
// import ManageUsers from "./pages/ManageUsers";
// import ManageRecommendations from "./pages/ManageRecommendations";
// import Chatbot from "./pages/Chatbot";
// import CrossRecommendation from "./pages/CrossRecommendation"; // Cross recommendation page
// import ProfilePage from "./pages/ProfilePage";
// // ProtectedRoute wrapper
// function ProtectedRoute({ children, roleRequired }) {
//   const token = localStorage.getItem("token");
//   const role = localStorage.getItem("role");

//   if (!token) return <Navigate to="/login" replace />;
//   if (roleRequired && role?.toLowerCase() !== roleRequired.toLowerCase())
//     return <Navigate to="/login" replace />; // redirect if role mismatch

//   return children;
// }

// // Conditionally render Chatbot only on Dashboard
// const ChatbotWrapper = () => {
//   const location = useLocation();
//   return location.pathname === "/dashboard" ? <Chatbot /> : null;
// };

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<LandingPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />

//         {/* User Dashboard */}
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute roleRequired="user">
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Cross Recommendation */}
//         <Route
//           path="/crossrecommend"
//           element={
//             <ProtectedRoute roleRequired="user">
//               <CrossRecommendation />
//             </ProtectedRoute>
//           }
//         />

//         {/* Admin Dashboard */}
//         <Route
//           path="/admin-dashboard"
//           element={
//             <ProtectedRoute roleRequired="admin">
//               <AdminDashboard />
//             </ProtectedRoute>
//           }
//         />

//         {/* Other Protected Routes */}
//         <Route
//           path="/recommend/movies"
//           element={
//             <ProtectedRoute>
//               <MovieRecommendations />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/recommend/books"
//           element={
//             <ProtectedRoute>
//               <BookRecommendations />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/recommend/songs"
//           element={
//             <ProtectedRoute>
//               <SongRecommendations />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/surpriseme"
//           element={
//             <ProtectedRoute>
//               <SurpriseMe />
//             </ProtectedRoute>
//           }
//         />

//         {/* Admin-only management */}
//         <Route
//           path="/manage-users"
//           element={
//             <ProtectedRoute roleRequired="admin">
//               <ManageUsers />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/manage-recommendations"
//           element={
//             <ProtectedRoute roleRequired="admin">
//               <ManageRecommendations />
//             </ProtectedRoute>
//           }
//         />
//           <Route
//           path="/profile"
//           element={
//             <ProtectedRoute>
//               <ProfilePage />
//             </ProtectedRoute>
//           }
//         />

//         {/* Catch-all */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>

//       {/* Chatbot only on Dashboard */}
//       <ChatbotWrapper />
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import MovieRecommendations from "./pages/MovieRecommendations";
import BookRecommendations from "./pages/BookRecommendations";
import SongRecommendations from "./pages/SongRecommendations";
import SurpriseMe from "./pages/SurpriseMe";
import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageRecommendations from "./pages/ManageRecommendations";
import Chatbot from "./pages/Chatbot";
import ProfilePage from "./pages/ProfilePage"; // ✅ ADDED

// ✅ New Cross Recommendation pages
import CrossRecommendation from "./pages/CrossRecommendation";

// ProtectedRoute wrapper
function ProtectedRoute({ children, roleRequired }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log("--- ProtectedRoute Check ---");
  console.log("Token from localStorage:", token); 
  console.log("Role from localStorage:", role);
  console.log("Role Required for this page:", roleRequired);

  if (!token) return <Navigate to="/login" replace />;
  if (roleRequired && role?.toLowerCase() !== roleRequired.toLowerCase())
    return <Navigate to="/login" replace />; // redirect to login if role mismatch

  return children;
}


// Wrapper to conditionally render Chatbot
const ChatbotWrapper = () => {
  const location = useLocation();
  return location.pathname === "/dashboard" ? <Chatbot /> : null;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* User Dashboard */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute roleRequired="user">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Cross Recommendation */}
        <Route
          path="/crossrecommend"
          element={
            <ProtectedRoute roleRequired="user">
              <CrossRecommendation />
            </ProtectedRoute>
          }
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute roleRequired="admin">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* ✅ New Profile Page Route */}
        <Route 
          path="/profile"
          element={
            <ProtectedRoute roleRequired="user">
              <ProfilePage />
            </ProtectedRoute>
          }
        />

        {/* Other Protected Routes */}
        <Route path="/recommend/movies" element={<ProtectedRoute><MovieRecommendations /></ProtectedRoute>} />
        <Route path="/recommend/books" element={<ProtectedRoute><BookRecommendations /></ProtectedRoute>} />
        <Route path="/recommend/songs" element={<ProtectedRoute><SongRecommendations /></ProtectedRoute>} />
        <Route path="/surprise" element={<ProtectedRoute><SurpriseMe /></ProtectedRoute>} />

        {/* Admin-only management */}
        <Route path="/manage-users" element={<ProtectedRoute roleRequired="admin"><ManageUsers /></ProtectedRoute>} />
        <Route path="/manage-recommendations" element={<ProtectedRoute roleRequired="admin"><ManageRecommendations /></ProtectedRoute>} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* ✅ Only shows Chatbot on Dashboard */}
      <ChatbotWrapper />
    </Router>
  );
}

export default App;