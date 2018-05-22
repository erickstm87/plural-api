// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

const express = require('express');
const app = express();
const path = require('path');

//const greeter = require('./index.html');
const jsonData = {count: 12, message: 'hey'};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/data', (req, res) => {
    console.log(jsonData);
    res.json(jsonData);
});

app.listen(3000, () => {
    console.log('i am listening on port 3000');
});
