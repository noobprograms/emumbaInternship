const express = require('express');
//suppose we keep all our user routes here



const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is the user");
    console.log("this route got triggered");
});

router.get("/userImage", (req, res) => {
    res.send("this is the image of the user");
});

router.get('/:id', (req, res) => {
    res.send("this is the user with id " + req.params.id);
})

module.exports =
    router