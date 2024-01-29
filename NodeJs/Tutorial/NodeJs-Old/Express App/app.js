// this is actually custom backend project using express js

const express = require('express');
const port = 1024;
const hostname = '127.0.0.1';

// creats an express app 
const app = express();

// request link should localhost:1024/index.html
// app.get('/index.html', (req, res) => {
//     res.send('This is my first express with jubaer.');
// });

// request link localhost:1024
app.get('/', (req, res) => {
    // res.send('This is my homepage express with jubaer.');
    // res.status(200).send('This is my homepage express with jubaer.');
    res.status(404).send('404 Not Found');
});

app.get('/about.html', (req, res) => {
    res.send('This is my get request about.html express with jubaer.');
});

app.post('/about.html', (req, res) => {
    res.send('This is my post request about.html express with jubaer.');
});

app.listen(port, hostname, () => {
    console.log('Successful.');
});