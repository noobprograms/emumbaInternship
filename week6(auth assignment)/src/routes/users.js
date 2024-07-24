const express = require("express");
const { getUser, registerUser, loginUser, logoutUser, refreshToken } = require('../controllers/user_controller')
const { verifyRecordsForSignup, verifyRecordForSignIn, verifyAccess, verifyRefreshToken } = require('../middleware/verify_record_middleware');
const userRouter = express.Router();
userRouter.get("/:id", verifyAccess, getUser);
userRouter.post("/register", verifyRecordsForSignup, registerUser);
userRouter.post("/login", verifyRecordForSignIn, loginUser);
userRouter.delete("/logout", verifyRefreshToken, logoutUser);
userRouter.post("/refreshToken", verifyRefreshToken, refreshToken);
module.exports = userRouter