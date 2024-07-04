const express = require('express');
//suppose we keep all our user routes here


const { getUser, getUserImage, getUserbyID } = require('../controllers/user_controllers');
const router = express.Router();

router.get("/", getUser);

router.get("/userImage", getUserImage);

router.get('/:id', (getUserbyID));

module.exports =
    router