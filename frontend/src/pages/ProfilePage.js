// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';
// import axios from 'axios';
// import { FaUserCircle, FaPlus, FaTimes } from 'react-icons/fa';

// // --- Styled Components ---

// const PageWrapper = styled.div`
//   background-color: #1a1f2c;
//   color: #f0f0f0;
//   min-height: 100vh;
//   font-family: 'Inter', sans-serif;
// `;

// const Header = styled.nav`
//   padding: 20px 5%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: rgba(18, 18, 18, 0.5);
//   backdrop-filter: blur(10px);
//   border-bottom: 1px solid rgba(255, 255, 255, 0.1);
// `;

// const Logo = styled.h2`
//   font-family: 'Playfair Display', serif;
//   font-size: 1.8rem;
//   margin: 0;
//   color: #f0f0f0;
//   span { color: #E0A030; }
// `;

// const NavItems = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;
// `;

// const NavLink = styled(Link)`
//   color: #c0c0c0;
//   text-decoration: none;
//   font-weight: 500;
//   font-size: 1rem;
//   transition: color 0.3s ease;
//   &:hover { color: #E0A030; }
// `;

// const ProfileContainer = styled.main`
//   max-width: 800px;
//   margin: 60px auto;
//   padding: 0 20px;
// `;

// const ProfileHeader = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 40px;
// `;

// const ProfileIcon = styled(FaUserCircle)`
//   font-size: 6rem;
//   color: #8a2be2;
//   margin-bottom: 10px;
// `;

// const EmailDisplay = styled.p`
//   color: #a0a0b0;
//   margin: 5px 0 0 0;
// `;

// const FormSection = styled.div`
//   background-color: #242936;
//   padding: 30px;
//   border-radius: 12px;
//   margin-bottom: 30px;
//   border: 1px solid #333;
// `;

// const SectionTitle = styled.h3`
//   margin: 0 0 25px 0;
//   font-family: 'Playfair Display', serif;
//   font-size: 1.8rem;
//   border-bottom: 1px solid #444;
//   padding-bottom: 10px;
// `;

// const InputGroup = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
//   margin-bottom: 20px;

//   @media (max-width: 600px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const InputWrapper = styled.div`
//   label {
//     display: block;
//     margin-bottom: 8px;
//     font-weight: 500;
//     color: #c0c0c0;
//   }
//   input {
//     width: 100%;
//     padding: 12px;
//     background-color: #1a1f2c;
//     border: 1px solid #444;
//     border-radius: 6px;
//     color: #f0f0f0;
//     font-size: 1rem;
//     box-sizing: border-box;

//     &:focus {
//       outline: none;
//       border-color: #E0A030;
//     }
//   }
// `;

// const TagContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 10px;
//   margin-bottom: 15px;
//   min-height: 20px;
// `;

// const Tag = styled.span`
//   background-color: #8a2be2;
//   color: white;
//   padding: 8px 12px;
//   border-radius: 20px;
//   font-size: 0.9rem;
//   font-weight: 500;
//   display: flex;
//   align-items: center;
//   gap: 8px;
// `;

// const RemoveTagIcon = styled(FaTimes)`
//   cursor: pointer;
//   transition: color 0.2s;
//   &:hover { color: #f0f0f0; }
// `;

// const CustomInputWrapper = styled.div`
//   position: relative;
//   input {
//     width: 100%;
//     padding: 12px 40px 12px 15px;
//     background-color: #1a1f2c;
//     border: 1px solid #444;
//     border-radius: 6px;
//     color: #f0f0f0;
//     font-size: 1rem;
//     box-sizing: border-box;
//   }
//   button {
//     position: absolute;
//     right: 5px;
//     top: 50%;
//     transform: translateY(-50%);
//     background: #E0A030;
//     border: none;
//     border-radius: 50%;
//     width: 30px;
//     height: 30px;
//     color: #121212;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `;

// const SaveButton = styled.button`
//   padding: 12px 25px;
//   background-color: #8a2be2;
//   color: white;
//   border: none;
//   border-radius: 6px;
//   font-size: 1rem;
//   font-weight: 600;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   margin-right: 15px;

//   &:hover {
//     background-color: #9932cc;
//   }
// `;

// // This is the new styled component for the inline message
// const StatusMessage = styled.span`
//   margin-left: 15px;
//   font-size: 0.9rem;
//   font-weight: 500;
//   color: ${props => props.error ? '#ff4d4f' : '#28a745'};
// `;

// // --- Component ---

// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const [profileData, setProfileData] = useState(null);
//   const [newGenre, setNewGenre] = useState('');
//   const [newCreator, setNewCreator] = useState('');
//   const [passwordData, setPasswordData] = useState({
//     currentPassword: '', newPassword: '', confirmPassword: ''
//   });
  
//   // New state variables to hold the status messages
//   const [detailsStatus, setDetailsStatus] = useState({ message: '', error: false });
//   const [passwordStatus, setPasswordStatus] = useState({ message: '', error: false });

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const res = await axios.get('/api/auth/profile', {
//           headers: { 'x-auth-token': token },
//         });
        
//         const data = res.data;
//         if (!data.profile) data.profile = {};
//         if (!data.profile.preferences) data.profile.preferences = { favoriteGenres: [], favoriteCreators: [] };
//         if (!data.profile.languages) data.profile.languages = [];
        
//         setProfileData(data);
//       } catch (error) {
//         console.error('Failed to fetch profile', error);
//         if (error.response && (error.response.status === 401 || error.response.status === 404)) {
//             navigate('/login');
//         }
//       }
//     };
//     fetchProfile();
//   }, [navigate]);

//   const handleDetailsChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setProfileData({ ...profileData, name: value });
//     } else {
//       setProfileData({
//         ...profileData,
//         profile: { ...profileData.profile, [name]: value },
//       });
//     }
//   };
  
//   const handlePasswordInputChange = (e) => {
//     setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
//   };

//   const handleAddTag = (type) => {
//     const preferences = profileData.profile.preferences;
//     if (type === 'genre' && newGenre.trim()) {
//       preferences.favoriteGenres = [...preferences.favoriteGenres, newGenre.trim()];
//       setNewGenre('');
//     }
//     if (type === 'creator' && newCreator.trim()) {
//       preferences.favoriteCreators = [...preferences.favoriteCreators, newCreator.trim()];
//       setNewCreator('');
//     }
//     setProfileData({ ...profileData });
//   };

//   const handleRemoveTag = (type, index) => {
//     const preferences = profileData.profile.preferences;
//     if (type === 'genre') {
//       preferences.favoriteGenres.splice(index, 1);
//     }
//     if (type === 'creator') {
//       preferences.favoriteCreators.splice(index, 1);
//     }
//     setProfileData({ ...profileData });
//   };
  
//   const handleSaveDetails = async () => {
//     try {
//       const token = localStorage.getItem('token');
//       const dataToSave = {
//         name: profileData.name,
//         age: profileData.profile.age,
//         location: profileData.profile.location,
//         languages: Array.isArray(profileData.profile.languages) ? profileData.profile.languages.join(',') : profileData.profile.languages,
//         favoriteGenres: profileData.profile.preferences.favoriteGenres,
//         favoriteCreators: profileData.profile.preferences.favoriteCreators,
//       };
//       await axios.put('/api/auth/profile', dataToSave, { headers: { 'x-auth-token': token } });
      
//       // Setting the success message instead of alert
//       setDetailsStatus({ message: 'Changed successfully!', error: false });
//       setTimeout(() => setDetailsStatus({ message: '', error: false }), 3000); // Clear after 3 seconds

//     } catch (error) {
//       console.error('Failed to save profile', error);
      
//       // Setting the error message instead of alert
//       setDetailsStatus({ message: 'Update failed.', error: true });
//       setTimeout(() => setDetailsStatus({ message: '', error: false }), 3000);
//     }
//   };

//   const handlePasswordSave = async () => {
//     if (passwordData.newPassword !== passwordData.confirmPassword) {
//       setPasswordStatus({ message: 'New passwords do not match.', error: true });
//       setTimeout(() => setPasswordStatus({ message: '', error: false }), 3000);
//       return;
//     }
//     if (passwordData.newPassword.length < 6) {
//         setPasswordStatus({ message: 'Password must be at least 6 characters.', error: true });
//         setTimeout(() => setPasswordStatus({ message: '', error: false }), 3000);
//         return;
//     }
//     try {
//         const token = localStorage.getItem('token');
//         await axios.put('/api/auth/change-password', {
//             currentPassword: passwordData.currentPassword,
//             newPassword: passwordData.newPassword,
//         }, { headers: { 'x-auth-token': token } });

//         // Setting the success message instead of alert
//         setPasswordStatus({ message: 'Password changed successfully!', error: false });
//         setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
//         setTimeout(() => setPasswordStatus({ message: '', error: false }), 3000);

//     } catch (error) {
//         console.error("Password change failed", error);

//         // Setting the error message instead of alert
//         const errorMessage = error.response?.data?.msg || "Failed to change password.";
//         setPasswordStatus({ message: errorMessage, error: true });
//         setTimeout(() => setPasswordStatus({ message: '', error: false }), 4000);
//     }
//   };

//   const handleLogout = (e) => {
//     e.preventDefault();
//     localStorage.clear();
//     navigate("/");
//   };

//   if (!profileData) {
//     return <PageWrapper><div>Loading...</div></PageWrapper>;
//   }

//   return (
//     <PageWrapper>
//       <Header>
//         <Logo as={Link} to="/dashboard" style={{ textDecoration: 'none' }}>Recommend<span>AI</span></Logo>
//         <NavItems>
//           <NavLink to="/dashboard">Dashboard</NavLink>
//           <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
//         </NavItems>
//       </Header>

//       <ProfileContainer>
//         <ProfileHeader>
//           <ProfileIcon />
//           <h2>{profileData.name}</h2>
//           <EmailDisplay>{profileData.email}</EmailDisplay>
//         </ProfileHeader>

//         <FormSection>
//           <SectionTitle>Personal Details</SectionTitle>
//           <InputGroup>
//             <InputWrapper>
//               <label>Name</label>
//               <input type="text" name="name" value={profileData.name} onChange={handleDetailsChange} />
//             </InputWrapper>
//             <InputWrapper>
//               <label>Age</label>
//               <input type="number" name="age" value={profileData.profile.age || ''} onChange={handleDetailsChange} />
//             </InputWrapper>
//           </InputGroup>
//           <InputGroup>
//             <InputWrapper>
//               <label>Location</label>
//               <input type="text" name="location" value={profileData.profile.location || ''} onChange={handleDetailsChange} />
//             </InputWrapper>
//             <InputWrapper>
//               <label>Preferred Languages (comma-separated)</label>
//               <input type="text" name="languages" value={Array.isArray(profileData.profile.languages) ? profileData.profile.languages.join(', ') : ''} onChange={handleDetailsChange} />
//             </InputWrapper>
//           </InputGroup>
//         </FormSection>

//         <FormSection>
//           <SectionTitle>Your Preferences</SectionTitle>
//           <div>
//             <label>Favorite Genres</label>
//             <TagContainer>
//               {profileData.profile.preferences.favoriteGenres.map((genre, index) => (
//                 <Tag key={index}>
//                   {genre}
//                   <RemoveTagIcon onClick={() => handleRemoveTag('genre', index)} />
//                 </Tag>
//               ))}
//             </TagContainer>
//             <CustomInputWrapper>
//               <input type="text" placeholder="Add a custom genre" value={newGenre} onChange={(e) => setNewGenre(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddTag('genre')}/>
//               <button onClick={() => handleAddTag('genre')}><FaPlus /></button>
//             </CustomInputWrapper>
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <label>Favorite Artists / Authors / Directors</label>
//             <TagContainer>
//                 {profileData.profile.preferences.favoriteCreators.map((creator, index) => (
//                     <Tag key={index}>
//                         {creator}
//                         <RemoveTagIcon onClick={() => handleRemoveTag('creator', index)} />
//                     </Tag>
//                 ))}
//             </TagContainer>
//              <CustomInputWrapper>
//               <input type="text" placeholder="Add a custom creator" value={newCreator} onChange={(e) => setNewCreator(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAddTag('creator')}/>
//               <button onClick={() => handleAddTag('creator')}><FaPlus /></button>
//             </CustomInputWrapper>
//           </div>
//         </FormSection>
        
//         <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
//              <SaveButton onClick={handleSaveDetails}>Save Details</SaveButton>
//              {detailsStatus.message && (
//                <StatusMessage error={detailsStatus.error}>
//                  {detailsStatus.message}
//                </StatusMessage>
//              )}
//         </div>

//         <FormSection>
//             <SectionTitle>Change Password</SectionTitle>
//             <InputWrapper style={{marginBottom: '15px'}}>
//                 <label>Current Password</label>
//                 <input type="password" name="currentPassword" value={passwordData.currentPassword} onChange={handlePasswordInputChange} />
//             </InputWrapper>
//             <InputGroup>
//                 <InputWrapper>
//                     <label>New Password</label>
//                     <input type="password" name="newPassword" value={passwordData.newPassword} onChange={handlePasswordInputChange}/>
//                 </InputWrapper>
//                 <InputWrapper>
//                     <label>Confirm New Password</label>
//                     <input type="password" name="confirmPassword" value={passwordData.confirmPassword} onChange={handlePasswordInputChange}/>
//                 </InputWrapper>
//             </InputGroup>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <SaveButton onClick={handlePasswordSave}>Change Password</SaveButton>
//                 {passwordStatus.message && (
//                     <StatusMessage error={passwordStatus.error}>
//                         {passwordStatus.message}
//                     </StatusMessage>
//                 )}
//             </div>
//         </FormSection>

//       </ProfileContainer>
//     </PageWrapper>
//   );
// };

// export default ProfilePage;
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';

// --- Styled Components ---

const PageWrapper = styled.div`
  background-color: #1a1f2c;
  color: #f0f0f0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
`;

const Header = styled.nav`
  padding: 20px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(18, 18, 18, 0.5);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  margin: 0;
  color: #f0f0f0;
  span { color: #E0A030; }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: #c0c0c0;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  &:hover { color: #E0A030; }
`;

const ProfileContainer = styled.main`
  max-width: 800px;
  margin: 60px auto;
  padding: 0 20px;
`;

const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ProfileIcon = styled(FaUserCircle)`
  font-size: 6rem;
  color: #8a2be2;
  margin-bottom: 10px;
`;

const EmailDisplay = styled.p`
  color: #a0a0b0;
  margin: 5px 0 0 0;
`;

const StatusMessage = styled.span`
  margin-left: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.$error ? '#ff4d4f' : '#28a745'};
`;

// --- Component ---

const ProfilePage = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [status, setStatus] = useState({ message: '', error: false });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { 'x-auth-token': token },
        });
        setProfileData(res.data);
      } catch (error) {
        console.error('Failed to fetch profile', error);
        if (error.response && (error.response.status === 401 || error.response.status === 404)) {
          navigate('/login');
        }
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  if (!profileData) {
    return <PageWrapper><div>Loading...</div></PageWrapper>;
  }

  return (
    <PageWrapper>
      <Header>
        <Logo as={Link} to="/dashboard" style={{ textDecoration: 'none' }}>
          Recommend<span>AI</span>
        </Logo>
        <NavItems>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
        </NavItems>
      </Header>

      <ProfileContainer>
        <ProfileHeader>
          <ProfileIcon />
          <h2>{profileData.name}</h2>
          <EmailDisplay>{profileData.email}</EmailDisplay>
        </ProfileHeader>

        {status.message && (
          <StatusMessage $error={status.error}>
            {status.message}
          </StatusMessage>
        )}
      </ProfileContainer>
    </PageWrapper>
  );
};

export default ProfilePage;
