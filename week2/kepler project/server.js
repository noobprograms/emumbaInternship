//nasa has a list of the planets discovered by kepler satellite. Here we use parameters to find the habitable planets out of them using csv-parse
const express = require('express')
const app = express();

const getHabitable = require('./src/controllers/mainController')






app.get('/', getHabitable);


app.listen(8000, () => console.log("server running on port 8000"))