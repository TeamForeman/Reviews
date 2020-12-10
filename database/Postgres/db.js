/* eslint-disable no-console */
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
});

const addUsers = () => {
  const query = 'COPY users(name, "profilePic") FROM \'/Users/fabianyee/Desktop/HackReactor/SDC/Customer-Reviews-Service/database/Postgres/psqlSeed/user.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log('users added to the database');
      pool.query('CREATE INDEX name_on_users on users(name)', (err, res) => {
        if (err) {
          console.error(err.stack);
        } else {
          console.log('name_on_users index created');
        }
      });
    }
  });
};

const addProducts = () => {
  const query = 'COPY products(description) FROM \'/Users/fabianyee/Desktop/HackReactor/SDC/Customer-Reviews-Service/database/Postgres/psqlSeed/product.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log('products added to the database');
    }
  });
};

const addRatings = () => {
  const query = 'COPY ratings(average, cleanliness, communication, checkin, accuracy, location, value, user_id, product_id) FROM \'/Users/fabianyee/Desktop/HackReactor/SDC/Customer-Reviews-Service/database/Postgres/psqlSeed/rating.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log('ratings added to the database');
      pool.query('CREATE INDEX product_id_on_ratings on ratings(product_id)', (err, res) => {
        if (err) {
          console.error(err.stack);
        } else {
          console.log('product_id_on_ratings index created');
        }
      });
    }
  });
};

const addReviews = () => {
  const query = 'COPY reviews("reviewBody", date, user_id, product_id) FROM \'/Users/fabianyee/Desktop/HackReactor/SDC/Customer-Reviews-Service/database/Postgres/psqlSeed/review.csv\' DELIMITER \',\' CSV HEADER';
  pool.query(query, (err, res) => {
    if (err) {
      console.error(err.stack);
    } else {
      console.log('products added to the database');
      pool.query('CREATE INDEX product_id_on_reviews on reviews(product_id)', (err, res) => {
        if (err) {
          console.error(err.stack);
        } else {
          console.log('product_id_on_reviews index created');
        }
      });
    }
  });
};

const getReviews = (productId, cb) => {
  const query = 'SELECT reviews.id, "reviewBody", date, users.name, users."profilePic" FROM reviews INNER JOIN users ON (reviews.user_id = users.id) WHERE product_id = $1';
  pool.query(query, [productId])
    .then((data) => {
      cb(data.rows);
    })
    .catch((e) => console.error(e.stack));
};

const getRatings = (productId, cb) => {
  const query = 'SELECT average, cleanliness, communication, checkin, accuracy, location, value FROM ratings WHERE product_id = $1';
  pool.query(query, [productId])
    .then((data) => {
      cb(data.rows);
    })
    .catch((e) => console.error(e.stack));
};

const getUserId = (name, cb) => {
  const query = 'SELECT id FROM users WHERE name = $1';
  pool.query(query, [name])
    .then((data) => {
      cb(data.rows[0].id);
    })
    .catch((e) => console.error(e.stack));
};

const postReview = (productId, user, reviewBody, cb) => {
  getUserId(user, (id) => {
    const options = { year: 'numeric', month: 'long' };

    const date = new Date().toLocaleDateString('en-US', options);
    const query = 'INSERT INTO reviews ("reviewBody", date, user_id, product_id) VALUES ($1, $2, $3, $4)';

    pool.query(query, [reviewBody, date, id, productId])
      .then(() => {
        console.log('stored');
        cb();
      });
  });
};

const deleteReview = (reviewId, cb) => {
  const query = 'DELETE FROM reviews WHERE id = $1';
  pool.query(query, [reviewId])
    .then(() => {
      console.log('deleted');
      cb();
    })
    .catch((e) => console.error(e.stack));
};

module.exports = {
  pool,
  addUsers,
  addProducts,
  addReviews,
  addRatings,
  getReviews,
  getRatings,
  postReview,
  deleteReview,
};
