const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'beartnt_reviews'
});

con.connect(err => {
  err ? console.error(err) : console.log('Connected to the database!!');
});

const getAllDataFromTable = (table, callback) => {
  var query = `SELECT * FROM ${table} WHERE ratings_id = 1`;
  con.query(query, (err, res) => {
    err ? callback(err) : callback(null, res);
  });
};

module.exports = {
  getAllDataFromTable,
  con
};