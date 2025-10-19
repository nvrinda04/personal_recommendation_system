// const express = require("express");
// const router = express.Router();
// const authController = require("../controllers/authController");

// // 🔥 OTP-based flow
// router.post("/send-otp", authController.sendOtp);
// router.post("/verify-otp-signup", authController.verifyOtpAndSignup);

// // ✅ Login stays same
// router.post("/login", authController.login);

// module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
//const authMiddleware = require("../middleware/authMiddleware");
router.put("/change-password",authController.changePassword);
// Auth
router.post("/send-otp", authController.sendOtp);
router.post("/verify-otp-signup", authController.verifyOtpAndSignup);
router.post("/login", authController.login);
router.get("/profile",  authController.getProfile);


// Admin user management
router.get("/users", authController.getAllUsers);
router.put("/users/:id", authController.updateUserRole);
router.delete("/users/:id", authController.deleteUser);

module.exports = router;

