const User = require("../models/user_model");
const bcrypt = require('bcryptjs');
const { generateToken, generateRefreshToken } = require('../services/jwt_helper')
const { client } = require('../services/init_redis');

async function getUser(req, res, next) {
    try {

        const myUser = await User.findById(req.params.id);
        if (!myUser) {
            const myError = new Error("User not found");
            myError.status = 401;
            throw myError;
        }
        res.status(200).json({ status: "success", message: { username: myUser.username, email: myUser.email } });
    } catch (error) {
        next(error);
    }

}

async function registerUser(req, res, next) {
    let { username, email, password } = req.body;
    try {


        const mySalt = await bcrypt.genSalt(10);
        const myHash = await bcrypt.hash(password, mySalt); //hashing the password to add an extra layer of protection

        const myUser = await User.create({
            username,
            email,
            password: myHash
        })
        const token = generateToken(myUser._id);
        const refreshToken = generateRefreshToken(myUser._id);
        res.status(200).json({ status: "success", message: myUser, accessToken: token, refreshToken: refreshToken });
    } catch (error) {

        next(error)
    }
}

async function loginUser(req, res, next) {
    let { email, password, user } = req.body;
    try {

        const isMatch = await user.isValidPassword(password);
        console.log("the value of ismatch is ", isMatch)
        if (!isMatch) {
            const myError = new Error("Wrong password");
            myError.status = 401;
            next(myError);
        }
        console.log("the id of the user is ", user._id)
        const myToken = generateToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        // console.log("the token is ", myToken);
        res.status(200).json({ status: "success", message: user, accessToken: myToken, refreshToken: refreshToken });

    } catch (error) {
        next(error)
    }
}

async function logoutUser(req, res, next) {
    const { userID } = req.body;
    const token = req.headers.authorization.split(' ')[1];
    try {
        client.del(userID);
        await client.LPUSH('token', token);
        return res.status(200).json({
          'status': 200,
          'data': 'You are logged out',
        });
    } catch (error) {
      return res.status(400).json({
        'status': 500,
        'error': error.toString(),
      });
    }
    

}

function refreshToken(req, res, next) {
    
    try {
        const userID = req.body.userID;
        const refreshToken = generateRefreshToken(userID);
        const accessToken = generateToken(userID);
        console.log("this is the place where the users is greeted witha  message from response")
        res.status(200).json({ status: "success", newAccessToken: accessToken, newRefreshToken: refreshToken });
    } catch (error) {
        next(error)
    }
}
module.exports = {
    getUser,
    registerUser,
    loginUser,
    logoutUser,
    refreshToken

}