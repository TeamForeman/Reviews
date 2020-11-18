const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const path = require('path');
const app = express();
const port = 3006;

var listingId;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));


app.get('/beartnt/reviews/:id', (req, res) => {
  db.getAllDataFromTable('reviews', req.params.id, (err, results) => {
    err ? console.log(err) : res.send(results);
  });
});


app.get('/beartnt/ratings/:id', (req, res) => {
  db.getAllDataFromTable('ratings', req.params.id, (err, results) => {
    err ? console.log(err) : res.send(results);
  });
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// app.get(/beartnt/, (req, res) => {
//   console.log('second get', req.params);
//   res.sendFile(path.join(__dirname, '../public/'));
// });



app.listen(port, () =>{
  console.log(`listing on port: ${port}`);
});