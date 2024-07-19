const express = require("express");
require('dotenv').config();

const mongoose = require("mongoose");
const userRouter = require("./src/routes")
const errorHandler = require('./src/controllers/error_handler');
const errorMiddleware = require("./src/middleware/error_middleware");
const app = express();

mongoose.connect(process.env.MONGODB_URL, { dbName: "userDatabase" }).then(() => {
    console.log("connected to mongodb");
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    console.log(
        "Hello World"
    );
    res.send("thi sis the hello world route ")
});
app.use('/users', userRouter);
app.use(errorHandler);
app.use(errorMiddleware)


app.listen(8181, () => console.log("server running at 8181"));