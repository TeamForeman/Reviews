/* eslint-disable no-console */
/* eslint-disable no-loop-func */
/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
const faker = require('faker');
// const db = require('../db.js');
const fs = require('fs');
const { names, profilePics, sentences } = require('./fakedata.js');

// RANDOM NUMBER GENERATOR
const rng = (min, max, oneDecimalPoint) => {
  if (oneDecimalPoint) {
    min *= 10;
    max *= 10;
    return ((Math.floor(Math.random() * (max - min + 1)) + min) / 10);
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/*
-----------------------------------------
USER GENERATORS
-----------------------------------------
*/

const createUser = (name, profilePic) => ({
  name,
  profilePic,
});

const randomPic = () => {
  const randomIndex = rng(0, profilePics.length - 1);
  return profilePics[randomIndex];
};

const createUsersArray = (users) => users.map((user) => createUser(user, randomPic()));

const createUserCSVHeader = () => {
  const userStream = fs.createWriteStream(`${__dirname}/user.csv`);
  userStream.write('name,profilePic\n');
};

const addUsersToCSV = (users) => {
  const userStream = fs.createWriteStream(`${__dirname}/user.csv`, { flags: 'a' });
  for (let i = 0; i < users.length; i++) {
    userStream.write(`${users[i].name},${users[i].profilePic}\n`);
  }
};

const createUserCSV = () => {
  createUserCSVHeader();
  addUsersToCSV(createUsersArray(names));
};

/*
-----------------------------------------
PRODUCT GENERATORS
-----------------------------------------
*/

const createProduct = () => ({
  description: faker.commerce.productName(),
});

const createProductCSVHeader = () => {
  const productStream = fs.createWriteStream(`${__dirname}/product.csv`);
  productStream.write('description\n');
};

const addProductsToCSV = (n) => {
  const productStream = fs.createWriteStream(`${__dirname}/product.csv`, { flags: 'a' });
  while (n > 0) {
    const { description } = createProduct();
    const write = !productStream.write(`${description}\n`);
    if (write) {
      return productStream.once('drain', () => {
        console.log(`${n} records left`);
        addProductsToCSV(n - 1);
      });
    }
    n--;
  }
  console.log('finished creating Products');
};

const createProductCSV = (n) => {
  createProductCSVHeader();
  addProductsToCSV(n);
};

/*
-----------------------------------------
RATINGS GENERATORS
-----------------------------------------
*/

const createRatingCSVHeader = () => {
  const productStream = fs.createWriteStream(`${__dirname}/rating.csv`);
  productStream.write('average,cleanliness,communication,checkin,accuracy,location,value,user_id,product_id\n');
};

const createRating = () => {
  const ratings = [];
  for (let i = 0; i < 6; i += 1) {
    ratings.push(rng(0, 5, true));
  }
  ratings.unshift((ratings.reduce((a, b) => (a + b)) / 6).toFixed(2));
  ratings.push(rng(1, 40));
  ratings.push(rng(1, 100000));
  return ratings.join(',');
};

const addRatingsToCSV = (n) => {
  const ratingStream = fs.createWriteStream(`${__dirname}/rating.csv`, { flags: 'a' });
  while (n > 0) {
    const rating = createRating();
    const write = !ratingStream.write(`${rating}\n`);
    if (write) {
      return ratingStream.once('drain', () => {
        console.log(`${n} records left`);
        addRatingsToCSV(n - 1);
      });
    }
    n--;
  }
  console.log('finished creating Products');
};

const createRatingCSV = (n) => {
  createRatingCSVHeader();
  addRatingsToCSV(n);
};

// console.log(createRating());

/*
-----------------------------------------
REVIEWS GENERATORS
-----------------------------------------
*/

const randomParagraph = (listOfSentences) => {
  let length = rng(0, listOfSentences.length - 1);
  let paragraph = '';
  while (length >= 0) {
    const randomIndex = rng(0, listOfSentences.length - 1);
    paragraph += ` ${listOfSentences[randomIndex]}`;
    length -= rng(1, 10);
  }
  return paragraph;
};

const randomDate = () => `${faker.date.month()} ${rng(2000, 2020)}`;

const createReview = () => ({
  reviewBody: randomParagraph(sentences),
  date: randomDate(),
  userId: rng(1, 40),
  productId: rng(1, 100000),
});

const createReviewCSVHeader = () => {
  const productStream = fs.createWriteStream(`${__dirname}/review.csv`);
  productStream.write('reviewBody,date,user_id,product_id\n');
};

const addReviewsToCSV = (n) => {
  const reviewStream = fs.createWriteStream(`${__dirname}/review.csv`, { flags: 'a' });
  console.log('Creating Reviews');
  for (let i = 0; i < n; i++) {
    const {
      reviewBody, date, userId, productId,
    } = createReview();
    reviewStream.write(`${reviewBody},${date},${userId},${productId}\n`);
    if (i % (n / 10) === 0) {
      console.log(`${(i / n) * 100}% created`);
    }
  }

  console.log('finished creating Reviews');
};

const createReviewCSV = (n) => {
  createReviewCSVHeader();
  addReviewsToCSV(n);
};

module.exports = {
  createUserCSV,
  createProductCSV,
  addProductsToCSV,
  createReviewCSV,
  addReviewsToCSV,
  createRatingCSV,
};
