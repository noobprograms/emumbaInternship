const express = require('express');
const router = require('./src/routes/user_routes')
const startFunc = require('./src/controllers/server_controller')
const app = express();
app.set('views', './public/views');
app.set('view engine', 'ejs');
app.get('/', startFunc);



//in ordrer to use the routes of the router we have defined in the other file we need to mount it inside our app
app.use("/users", router)
app.listen(8000, () => console.log("running on port 8000"));