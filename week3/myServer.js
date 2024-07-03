const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/pricing', (req, res) => {
    res.send('Pricing page');
});
app.get('/contact', (req, res) => {
    res.send('this is teh page where we will give our contact information');
});

app.get('/about', (req, res) => {
    res.send('this is the place where we give our information');
});
app.get('/order', (req, res) => {
    res.send('this is the page where to can order stuff');
})

app.listen(8000, () => console.log("myServer running on 8000 port"))