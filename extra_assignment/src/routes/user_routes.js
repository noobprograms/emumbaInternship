const express = require('express');

const bodyParser = require('body-parser');
const { addUser, updateUser, getUser, deleteUser } = require('../controllers/index')
const userRouter = express.Router();
const jsonParser = bodyParser.json();


userRouter.post('/addUser', jsonParser, addUser);

userRouter.get('/getUser:id', getUser);

userRouter.put('/updateUser:id', jsonParser, updateUser);

userRouter.delete('/deleteUser:id', deleteUser);



module.exports = userRouter;