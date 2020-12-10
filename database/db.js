const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'beartnt_reviews',
  password: 'Fabi!995',
});

con.connect(err => {
  err ? console.error(err) : console.log('Connected to the database!!');
});

const getAllDataFromTable = (table, id, callback) => {
  id = id || 5;
  var query = `SELECT * FROM ${table} WHERE ratings_id = ${id}`;
  con.query(query, (err, res) => {
    err ? callback(err) : callback(null, res);
  });
};

const addReview = (data, callback) => {
  var query = 'INSERT INTO reviews (name, date, reviewBody, profilePic) VALUES (?, ?, ?, ?) ';
  con.query(query, data, (err, res) => {
    err ? callback(err) : callback(null, res);
  });
};

const updateReview = (id, reviewBody, callback) => {
  var query = 'UPDATE reviews SET reviewBody = ? WHERE reviews_id = ?';
  con.query(query, [reviewBody, id], (err, res) => {
    err ? callback(err) : callback(null, res);
  });
};

const deleteReview = () => {

};

module.exports = {
  getAllDataFromTable,
  addReview,
  updateReview,
  con
};