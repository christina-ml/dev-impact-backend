const express = require('express');

const app = express();

// Functions
const { remainder, removeDuplicateWords } = require('./stringUtils');

// Routes
app.get('/', (req, res) => {
    res.send('my first API');
});

app.get('/find-the-remainder/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params;

    // error handling - if input is not a number
    if (String(parseInt(num1)).length !== num1.length){
        res.send(`${num1} is not a valid number`);
        return;
    }
    if (String(parseInt(num2)).length !== num2.length){
        res.send(`${num2} is not a valid number`);
        return;
    }
    
    const foundRemainder = remainder(num1, num2);

    const largerNum = Math.max(num1, num2);
    const smallerNum = Math.min(num1, num2);

    res.send(`The remainder of ${largerNum} divided by ${smallerNum} is ${foundRemainder}.`);
})

app.get('/remove-duplicates/:str', (req, res) => {
    const { str } = req.params;
    const removedDuplicates = removeDuplicateWords(str);
    res.send(`${removedDuplicates}`)
});

module.exports = app;