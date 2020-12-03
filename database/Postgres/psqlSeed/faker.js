const faker = require('faker');
// const db = require('../db.js');
const { names, profilePics, sentences } = require('./fakedata.js');
const fs = require('fs');

//RANDOM NUMBER GENERATOR
const rng = (min, max, oneDecimalPoint) => {
  if (oneDecimalPoint) {
    min *= 10;
    max *= 10;
    return ((Math.floor(Math.random() * (max - min + 1)) + min) / 10);
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

/*
-----------------------------------------
USER GENERATORS
-----------------------------------------
*/

const createUser = (name, profilePic) => {
  return {
    name,
    profilePic
  };
};

const randomPic = () => {
  let randomIndex = rng(0, profilePics.length - 1);
  return profilePics[randomIndex];
};

const createUsersArray = (users) => {
  return users.map(user => {
    return createUser(user, randomPic());
  });
};

const createUserCSVHeader = () => {
  let userStream = fs.createWriteStream(__dirname + '/user.csv');
  userStream.write('name,profilePic\n');
};

const addUsersToCSV = (users) => {
  let userStream = fs.createWriteStream(__dirname + '/user.csv', {flags: 'a'});
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

const createProduct = () => {
  return {
    description: faker.commerce.productName()
  };
};

const createProductCSVHeader = () => {
  let productStream = fs.createWriteStream(__dirname + '/product.csv');
  productStream.write('description\n');
};

const addProductsToCSV = (n) => {
  let userStream = fs.createWriteStream(__dirname + '/product.csv', {flags: 'a'});
  console.log('Creating Products');
  for (let i = 0; i < n; i++) {
    let { description } = createProduct();
    userStream.write(`${description}\n`);
    if (i % (n / 10) === 0) {
      console.log(`${i / n * 100}% created`);
    }
  }
  console.log('finished creating Products');
};

const createProductCSV = (n) => {
  createProductCSVHeader();
  addProductsToCSV(n);
};


/*
-----------------------------------------
REVIEWS GENERATORS
-----------------------------------------
*/

const randomParagraph = (listOfSentences) => {
  debugger;
  let length = rng(0, listOfSentences.length - 1);
  let paragraph = '';
  while (length >= 0) {
    let randomIndex = rng(0, listOfSentences.length - 1);
    paragraph += ' ' + listOfSentences[randomIndex];
    length -= rng(1, 10);
  }
  return paragraph;
};

const randomDate = () => {
  return `${faker.date.month()} ${rng(2000, 2020)}`;
};

const createReview = () => {
  return {
    reviewBody: randomParagraph(sentences),
    date: randomDate(),
    userId: rng(1, 40),
    productId: rng(1, 100000)
  };
};

const createReviewCSVHeader = () => {
  let productStream = fs.createWriteStream(__dirname + '/review.csv');
  productStream.write('reviewBody,date,user_id,product_id\n');
};

const addReviewsToCSV = (n) => {
  let userStream = fs.createWriteStream(__dirname + '/review.csv', {flags: 'a'});
  console.log('Creating Reviews');
  for (let i = 0; i < n; i++) {
    let { reviewBody, date, userId, productId } = createReview();
    userStream.write(`${reviewBody},${date},${userId},${productId}\n`);
    if (i % (n / 10) === 0) {
      console.log(`${i / n * 100}% created`);
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
  addReviewsToCSV
};