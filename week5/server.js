const express = require('express');
const path = require('path');
const animal_router = require('./src/routes/animal_routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();


const app = express();
mongoose.connect(process.env.mongo_url, { dbName: "animal_db" }).then(() => {
    console.log("connected to mongo");
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());
    app.use('/animals', animal_router);
    app.use(express.static("public"))

    app.listen(8111, () => console.log('listening at 8111'));
});