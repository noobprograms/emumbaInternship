const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser());
app.get('/', myMiddleware, (req, res) => {
    console.log(req.body);
    res.send('Hello World');
});
app.get('/pricing', myMiddleware, (req, res) => {
    res.send('Pricing page');
});
app.get('/contact', myMiddleware, (req, res) => {
    res.send('this is teh page where we will give our contact information');
});

app.get('/about', myMiddleware, (req, res) => {
    res.send('this is the place where we give our information');
});
app.get('/order', myMiddleware, (req, res) => {
    res.send('this is the page where to can order stuff');
})

function myMiddleware(req, res, next) { //logger middleware for assignment 2
    console.log(req);

    return next();
}
app.listen(8000, () => console.log("myServer running on 8000 port"))