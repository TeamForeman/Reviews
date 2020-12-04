const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE
});

const addUsers = () => {
  var query = 'COPY users(name, profilePic) FROM \'/Users/fabianyee/Desktop/HackReactor/SDC/Customer-Reviews-Service/database/Postgres/psqlSeed/user.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log('users added to the database');
    }
  });
};

const addProducts = () => {
  var query = 'COPY products(description) FROM \'/Users/fabianyee/Desktop/HackReactor/SDC/Customer-Reviews-Service/database/Postgres/psqlSeed/product.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log('products added to the database');
    }
  });
};

const addReviews = () => {
  var query = 'COPY reviews(reviewBody, date, user_id, product_id) FROM \'/Users/fabianyee/Desktop/HackReactor/SDC/Customer-Reviews-Service/database/Postgres/psqlSeed/review.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log('products added to the database');
    }
  });
  pool.end();
};

const getReviews = (productId, cb) => {
  var query = 'SELECT * FROM reviews WHERE product_id = $1';
  pool.query(query, [productId])
    .then(data => {
      cb(data);
    })
    .catch(e => console.error(e.stack));
};


module.exports = {
  pool,
  addUsers,
  addProducts,
  addReviews,
  getReviews
};