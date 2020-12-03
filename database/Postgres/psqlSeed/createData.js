const {createUserCSV, createProductCSV, createReviewCSV } = require('./faker.js');

createUserCSV();
createProductCSV(100000);
createReviewCSV(10000000);