const express = require("express");
const { getUser, registerUser, loginUser, logoutUser, refreshToken } = require('../controllers/user_controller')
const { verifyRecordsForSignup, verifyRecordForSignIn, verifyAccess, verifyRefreshToken } = require('../middleware/verify_record_middleware');
const userRouter = express.Router();
userRouter.post("/index/register", verifyRecordsForSignup, registerUser);
userRouter.post("/index/login", verifyRecordForSignIn,loginUser);
userRouter.delete("/index/logout", verifyRefreshToken, logoutUser);
userRouter.post("/index/refreshToken", verifyRefreshToken, refreshToken);
userRouter.get("/:id", verifyAccess, getUser);

module.exports = userRouter