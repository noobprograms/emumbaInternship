const express = require('express')
const app = express();

const userRouter = require('./src/routes/user_routes');
const bodyParser = require('body-parser');
app.get('/', (req, res) => res.send("this is a dummy page to demonstrate different routing methods"));
app.use('/user', userRouter);
app.listen(8000, () => console.log("Server is running on port 8000"));