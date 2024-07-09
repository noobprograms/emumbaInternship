const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(8111, () => console.log('listening at 8111'));