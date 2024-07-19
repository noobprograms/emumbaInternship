const express = require("express");
const { getUser, registerUser, loginUser, logoutUser, refreshToken } = require('../controllers/user_controller')
const { verifyRecordsForSignup, verifyRecordForSignIn, verifyAccessToken, verifyRefreshToken } = require('../middleware/verify_record_middleware');
const userRouter = express.Router();
userRouter.get("/:id", verifyAccessToken, getUser);
userRouter.post("/register", verifyRecordsForSignup, registerUser);
userRouter.post("/login", verifyRecordForSignIn, loginUser);
userRouter.get("/logout", logoutUser);
userRouter.post("/refreshToken", verifyRefreshToken, refreshToken);
module.exports = userRouter