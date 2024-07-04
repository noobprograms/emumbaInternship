const express = require('express')
const app = express();


module.exports = (req, res) => {
    res.render('index.ejs', { text: "World" });

}