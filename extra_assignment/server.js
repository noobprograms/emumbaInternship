const express = require('express')
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://waleed:1234@cluster0.fg5wxgy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { dbName: 'myDatabase' }).then((value) => {
    var mydb = value.myDatabase;
    console.log("connected to mongodb");
    const userRouter = require('./src/routes/user_routes');

    app.get('/', (req, res) => res.send("this is a dummy page to demonstrate different routing methods"));
    app.use('/users', userRouter);
    app.listen(8000, () => console.log("Server is running on port 8000"));
});