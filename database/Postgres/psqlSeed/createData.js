const {createUserCSV, createProductCSV, createReviewCSV, createRatingCSV } = require('./faker.js');

createUserCSV();
createRatingCSV(10000000);
createProductCSV(100000);
createReviewCSV(10000000);