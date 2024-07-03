const express = require('express');
const router = require('./routes/router')
const app = express();

app.get('/', (req, res) => {
    res.render('index.ejs', { text: "World" });

});

//in ordrer to use the routes of the router we have defined in the other file we need to mount it inside our app
app.use("/users", router)
app.listen(8000, () => console.log("running on port 8000"));