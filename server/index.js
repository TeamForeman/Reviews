/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/db.js');
const pool = require('../database/Postgres/db.js');
// const mongo = require('../database/Mongo/db.js');
const app = express();
const port = 3006;
require('newrelic');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/reviews-module/reviews/:id', (req, res) => {
  pool.getReviews(req.params.id, (data) => {
    res.send(data);
  });
});

app.get('/api/reviews-module/ratings/:id', (req, res) => {
  pool.getRatings(req.params.id, (data) => {
    res.send(data);
  });
});

app.post('/api/reviews-module/reviews/:id', (req, res) => {
  const { username, review } = req.body;

  pool.postReview(req.params.id, username, review, () => {
    res.sendStatus(201);
  });
  // console.log(data);
  // res.sendStatus(200);
  // db.addReview(data, (err, results) => {
  //   err ? console.log(err) : res.sendStatus(200);
  // });
});

app.put('/api/reviews-module/reviews/:id', (req, res) => {
  const { review } = req.body;
  db.updateReview(req.params.id, review, (err, results) => {
    err ? console.log(err) : res.sendStatus(200);
  });
});

app.delete('/api/reviews-module/reviews/:id', (req, res) => {
  pool.deleteReview(req.params.id, () => {
    res.sendStatus(200);
  });
});

// app.get('/:id', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.listen(port, () => {
  console.log(`listing on port: ${port}`);
});
