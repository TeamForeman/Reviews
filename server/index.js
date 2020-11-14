const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const path = require('path');
const app = express();
const port = 3002;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));


app.get('/beartnt/reviews', (req, res) => {
  db.getAllDataFromTable('reviews', (err, results) => {
    err ? console.log(err) : res.send(results);
  });
});


app.get('/beartnt/ratings', (req, res) => {
  db.getAllDataFromTable('ratings', (err, results) => {
    err ? console.log(err) : res.send(results);
  });
});




app.listen(port, () =>{
  console.log(`listing on port: ${port}`);
});