const express = require('express');

const app = express();

// Functions
function remainder(n, m){
    const largerNum = Math.max(n,m);
    const smallerNum = Math.min(n,m);
    
    return largerNum % smallerNum;
}

// Routes
app.get('/', (req, res) => {
    res.send('my first API');
});

app.get('/find-the-remainder/:num1/:num2', (req, res) => {
    const {num1, num2} = req.params;
    
    const foundRemainder = remainder(num1, num2);

    const largerNum = Math.max(num1, num2);
    const smallerNum = Math.min(num1, num2);

    res.send(`The remainder of ${largerNum} divided by ${smallerNum} is ${foundRemainder}.`);
})

module.exports = app;