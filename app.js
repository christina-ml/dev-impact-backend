const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('my first API');
});

module.exports = app;