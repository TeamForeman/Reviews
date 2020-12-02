const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const path = require('path');
const app = express();
const port = 3006;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));


app.get('/api/reviews-module/reviews/:id', (req, res) => {
  db.getAllDataFromTable('reviews', req.params.id, (err, results) => {
    err ? console.log(err) : res.send(results);
  });
});


app.get('/api/reviews-module/ratings/:id', (req, res) => {
  db.getAllDataFromTable('ratings', req.params.id, (err, results) => {
    err ? console.log(err) : res.send(results);
  });
});

app.post('/api/reviews-module/reviews', (req, res) => {
  const { username, date, review, pic } = req.body;
  const data = [username, date, review, pic];
  // console.log(data);
  // res.sendStatus(200);
  db.addReview(data, (err, results) => {
    err ? console.log(err) : res.sendStatus(200);
  });
});

app.put('/api/reviews-module/reviews/:id', (req, res) => {
  const { review } = req.body;
  db.updateReview(req.params.id, review, (err, results) => {
    err ? console.log(err) : res.sendStatus(200);
  });
});

app.delete('/api/reviews-module/reviews/:id', (req, res) => {

});


app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.listen(port, () =>{
  console.log(`listing on port: ${port}`);
});