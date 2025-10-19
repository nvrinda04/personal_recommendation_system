// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");


// // temporary in-memory store
// const otpStore = {};

// exports.sendOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     console.log("📩 Received OTP request for:", email);

//     if (!email) {
//       return res.status(400).json({ error: "Email is required" });
//     }

//     // Generate 6-digit OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     otpStore[email] = otp;
//     console.log("⚡ Generated OTP:", otp);

//     // Setup nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Send mail
//     await transporter.sendMail({
//       from: `"Verify Account" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your OTP Code",
//       text: `Your verification OTP is: ${otp}`,
//     });

//     console.log("✅ OTP email sent successfully!");
//     res.json({ message: "OTP sent ✅" });
//   } catch (err) {
//     console.error("❌ OTP Error:", err.message);
//     res.status(500).json({ error: "Failed to send OTP", details: err.message });
//   }
// };


// // STEP 2: Verify OTP & Register
// exports.verifyOtpAndSignup = async (req, res) => {
//   const { name, email, password, role, otp } = req.body;

//   // Check OTP
//   if (!otpStore[email] || otpStore[email] !== otp) {
//     return res.status(400).json({ error: "Invalid or expired OTP ❌" });
//   }

//   delete otpStore[email]; // Remove after successful use

//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ error: "User already exists ❌" });

//     // Hash password
//     const hashed = await bcrypt.hash(password, 10);

//     // Admin restriction
//     const allowedAdmins = ["kavyapathi60@gmail.com", "otheradmin@gmail.com"];
//     let assignedRole = "User";
//     if (role === "Admin" && allowedAdmins.includes(email)) {
//       assignedRole = "Admin";
//     } else if (role === "Admin") {
//       return res.status(403).json({ error: "You don’t have permission to be Admin ❌" });
//     }

//     const user = new User({ name, email, password: hashed, role: assignedRole });
//     await user.save();

//     res.status(201).json({ message: "User registered ✅", role: assignedRole });
//   } catch (err) {
//     res.status(500).json({ error: "Signup failed ❌", details: err.message });
//   }
// };


// exports.login = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ error: "User not found ❌" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: "Invalid password ❌" });

//     const token = jwt.sign(
//       { userId: user._id, role: user.role }, // ✅ role inside token
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({
//   message: "Login successful ✅",
//   token,
//   role: user.role || "User",
//   lastChoice: user.lastChoice,
//   lastCategory: user.lastCategory,
//   lastRecommendations: user.lastRecommendations,
// });

//   } catch (err) {
//     res.status(500).json({ error: "Login error ❌", details: err.message });
//   }
// };

// // const User = require("../models/User");

// // 📌 Get all users
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}, "-password"); // exclude password
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: "Error fetching users" });
//   }
// };

// // 📌 Update role
// exports.updateUserRole = async (req, res) => {
//   try {
//     const { role } = req.body;
//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { role },
//       { new: true }
//     );
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: "Error updating role" });
//   }
// };

// // 📌 Delete user
// exports.deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting user" });
//   }
// };



// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const nodemailer = require("nodemailer");

// // Temporary in-memory OTP store
// const otpStore = {};

// // ------------------- SEND OTP -------------------
// exports.sendOtp = async (req, res) => {
//   try {
//     const { email } = req.body;
//     if (!email) return res.status(400).json({ error: "Email is required" });

//     // Generate 6-digit OTP
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     otpStore[email.toLowerCase()] = otp; // Store OTP with lowercase email

//     // Setup nodemailer
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
//     });

//     // Send email
//     await transporter.sendMail({
//       from: `"Verify Account" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your OTP Code",
//       text: `Your verification OTP is: ${otp}`,
//     });

//     res.json({ message: "OTP sent ✅" });
//   } catch (err) {
//     res.status(500).json({ error: "Failed to send OTP", details: err.message });
//   }
// };

// // ------------------- VERIFY OTP & SIGNUP -------------------
// exports.verifyOtpAndSignup = async (req, res) => {
//   const { name, email, password, otp } = req.body;
//   const lowerCaseEmail = email.toLowerCase();

//   // Check OTP
//   if (!otpStore[lowerCaseEmail] || otpStore[lowerCaseEmail] !== otp) {
//     return res.status(400).json({ error: "Invalid or expired OTP ❌" });
//   }
//   delete otpStore[lowerCaseEmail]; // remove after successful use

//   try {
//     const existing = await User.findOne({ $or: [{ email: lowerCaseEmail }, { name }] });
//     if (existing) return res.status(400).json({ error: "User already exists ❌" });

//     const hashed = await bcrypt.hash(password, 10);
//     const assignedRole = "User";

//     // ✅ **FIX 1:** Store email and username in a consistent format (lowercase)
//     const user = new User({ 
//         name, 
//         email: lowerCaseEmail, 
//         password: hashed, 
//         role: assignedRole 
//     });
//     await user.save();

//     res.status(201).json({ message: "User registered ✅", role: assignedRole });
//   } catch (err) {
//     res.status(500).json({ error: "Signup failed ❌", details: err.message });
//   }
// };

// // ------------------- LOGIN -------------------
// exports.login = async (req, res) => {
//   const { usernameOrEmail, password } = req.body;

//   try {
//     // ✅ **FIX 2:** Use a case-insensitive regular expression for the search
//     const user = await User.findOne({ 
//       $or: [
//         { email: new RegExp(`^${usernameOrEmail}$`, "i") }, 
//         { name: new RegExp(`^${usernameOrEmail}$`, "i") }
//       ] 
//     });
    
//     if (!user) return res.status(401).json({ error: "Invalid credentials ❌" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ error: "Invalid credentials ❌" });

//     const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

//     res.json({
//       message: "Login successful ✅",
//       token,
//       name: user.name,
//       role: user.role || "User",
//     });
//   } catch (err) {
//     res.status(500).json({ error: "Login error ❌", details: err.message });
//   }
// };

// // ------------------- GET ALL USERS -------------------
// exports.getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find({}, "-password");
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ message: "Error fetching users" });
//   }
// };

// // ------------------- UPDATE USER ROLE -------------------
// exports.updateUserRole = async (req, res) => {
//   try {
//     const { role } = req.body;
//     const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ message: "Error updating role" });
//   }
// };

// // ------------------- GET PROFILE -------------------
// exports.getProfile = async (req, res) => {
//   try {
//     // The authMiddleware has already run and placed the user's ID into req.user.userId
//     const user = await User.findById(req.user.userId).select('-password'); // .select('-password') prevents sending the password hash

//     if (!user) {
//       return res.status(404).json({ msg: 'User not found' });
//     }

//     res.json(user); // Send back the user object (without the password)
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// };
// // --- END OF ADDED FUNCTION ---

// // // ------------------- GET PROFILE -------------------
// // // --- THIS FUNCTION NOW INCLUDES THE SECURITY CHECK LOGIC ---
// // exports.getProfile = async (req, res) => {
// //   try {
// //     // Step 1: Get the token from the header (The security guard's job)
// //     const token = req.header('x-auth-token');

// //     // Step 2: Check if there is no token
// //     if (!token) {
// //       return res.status(401).json({ msg: 'No token, authorization denied' });
// //     }

// //     // Step 3: Verify the token is real and not expired
// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //     // Step 4: Use the user ID from inside the token to find the user
// //     const user = await User.findById(decoded.userId).select('-password');

// //     if (!user) {
// //       return res.status(404).json({ msg: 'User not found' });
// //     }

// //     res.json(user); // If everything is okay, send back the user's profile data
// //   } catch (err) {
// //     // This will catch errors if the token is invalid or expired
// //     console.error("Error in getProfile:", err.message);
// //     res.status(401).json({ msg: 'Token is not valid' });
// //   }
// // };
// // // --- END OF MODIFIED FUNCTION ---

// // ------------------- DELETE USER -------------------
// exports.deleteUser = async (req, res) => {
//   try {
//     await User.findByIdAndDelete(req.params.id);
//     res.json({ message: "User deleted successfully" });
//   } catch (err) {
//     res.status(500).json({ message: "Error deleting user" });
//   }
// };
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt =require("jsonwebtoken");
const nodemailer = require("nodemailer");

// Temporary in-memory OTP store
const otpStore = {};

// ------------------- SEND OTP -------------------
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email.toLowerCase()] = otp;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Verify Account" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Your verification OTP is: ${otp}`,
    });

    res.json({ message: "OTP sent ✅" });
  } catch (err) {
    res.status(500).json({ error: "Failed to send OTP", details: err.message });
  }
};

// ------------------- VERIFY OTP & SIGNUP -------------------
exports.verifyOtpAndSignup = async (req, res) => {
  const { name, email, password, otp } = req.body;
  const lowerCaseEmail = email.toLowerCase();

  if (!otpStore[lowerCaseEmail] || otpStore[lowerCaseEmail] !== otp) {
    return res.status(400).json({ error: "Invalid or expired OTP ❌" });
  }
  delete otpStore[lowerCaseEmail];

  try {
    const existing = await User.findOne({ $or: [{ email: lowerCaseEmail }, { name }] });
    if (existing) return res.status(400).json({ error: "User already exists ❌" });

    const hashed = await bcrypt.hash(password, 10);
    const assignedRole = "User";

    const user = new User({ 
        name, 
        email: lowerCaseEmail, 
        password: hashed, 
        role: assignedRole 
    });
    await user.save();

    res.status(201).json({ message: "User registered ✅", role: assignedRole });
  } catch (err) {
    res.status(500).json({ error: "Signup failed ❌", details: err.message });
  }
};

// ------------------- LOGIN -------------------
exports.login = async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    const user = await User.findOne({ 
      $or: [
        { email: new RegExp(`^${usernameOrEmail}$`, "i") }, 
        { name: new RegExp(`^${usernameOrEmail}$`, "i") }
      ] 
    });
    
    if (!user) return res.status(401).json({ error: "Invalid credentials ❌" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials ❌" });

    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({
      message: "Login successful ✅",
      token,
      name: user.name,
      role: user.role || "User",
    });
  } catch (err) {
    res.status(500).json({ error: "Login error ❌", details: err.message });
  }
};

// ------------------- GET PROFILE -------------------
// --- THIS IS THE NEW, DIAGNOSTIC VERSION ---
exports.getProfile = async (req, res) => {
  console.log("\n--- TRIGGERED GET /profile ---");

  // 1. Check for the token
  const token = req.header('x-auth-token');
  if (!token) {
    console.error("  -> ERROR: No token was found in the 'x-auth-token' header.");
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  console.log("  -> Found token in header.");

  // 2. Check if the JWT_SECRET environment variable is loaded
  if (!process.env.JWT_SECRET) {
    console.error("  -> FATAL ERROR: process.env.JWT_SECRET is NOT loaded. Check your .env file and server start script.");
    return res.status(500).send('Server Error: JWT Secret is missing.');
  }
  console.log("  -> JWT_SECRET is loaded.");

  // 3. Try to verify the token and find the user
  try {
    console.log("  -> Verifying token...");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("  -> Token decoded successfully. Payload:", decoded);

    // This is the line that was crashing before. Let's check 'decoded' first.
    if (!decoded || !decoded.userId) {
        console.error("  -> ERROR: The decoded token does not contain a 'userId' property.");
        return res.status(401).json({ msg: 'Token is invalid (malformed payload)' });
    }

    console.log(`  -> Searching for user in DB with ID: ${decoded.userId}`);
    const user = await User.findById(decoded.userId).select('-password');

    if (!user) {
      console.error(`  -> ERROR: User with ID ${decoded.userId} not found in database.`);
      return res.status(404).json({ msg: 'User not found' });
    }

    console.log("  -> SUCCESS: Found user. Sending profile data.");
    res.json(user);

  } catch (err) {
    console.error("  -> CATCH BLOCK ERROR: Token is not valid or has expired.", err.message);
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
// --- END OF NEW FUNCTION ---


// ------------------- GET ALL USERS -------------------
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Error fetching users" });
  }
};


// ------------------- UPDATE PROFILE -------------------
exports.updateProfile = async (req, res) => {
  const { name, age, location, languages, favoriteGenres, favoriteCreators } = req.body;

  const updateData = {};
  if (name) updateData.name = name;
  if (age) updateData.age = age;
  if (location) updateData.location = location;
  if (languages) {
    updateData.languages = languages.split(',').map(lang => lang.trim().replace(/,\s*$/, ""));
  }
  if (favoriteGenres) updateData['preferences.favoriteGenres'] = favoriteGenres;
  if (favoriteCreators) updateData['preferences.favoriteCreators'] = favoriteCreators;
  
  try {
    const user = await User.findByIdAndUpdate(
      req.user.userId,
      { $set: updateData },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error('Error updating profile:', err.message);
    res.status(500).send('Server Error');
  }
};

// ------------------- CHANGE PASSWORD -------------------
exports.changePassword = async (req, res) => {
    const { currentPassword, newPassword } = req.body;

    try {
        const user = await User.findById(req.user.userId);
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Incorrect current password' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(newPassword, salt);
        await user.save();

        res.json({ msg: 'Password updated successfully' });

    } catch (err) {
        console.error('Error changing password:', err.message);
        res.status(500).send('Server Error');
    }
};

// --- END OF ADDED CODE ---


// ------------------- UPDATE USER ROLE -------------------
exports.updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Error updating role" });
  }
};

// ------------------- DELETE USER -------------------
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting user" });
  }
};

