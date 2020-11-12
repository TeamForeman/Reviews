const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'beartnt_reviews'
});

con.connect(err => {
  err ? console.error(err) : console.log('Connected to the database!!');
});

const getAllTheData = (callback) => {

};

module.exports = {
  getAllTheData
};