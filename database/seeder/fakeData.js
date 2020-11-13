const faker = require('faker');
const db = require('../db.js');
const fs = require('fs');
const fastcsv = require('fast-csv');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

/*
-----------------------------------------
RANDOM GENERATORS
-----------------------------------------
*/

//RANDOM NUMBER GENERATOR
const randomNumberBetween = (min, max, oneDecimalPoint) => {
  if (oneDecimalPoint) {
    min *= 10;
    max *= 10;
    return ((Math.floor(Math.random() * (max - min + 1)) + min) / 10);
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

//SHUFFLES PHOTOS LIST
const photoShuffle = (pics) => {
  var newOrder = pics.sort(() => Math.random() - 0.5);
  return newOrder;
};

/*
-----------------------------------------
CREATING ELEMENTS
-----------------------------------------
*/

//LINKS TO ALL THE PROFILE PICTURES
var profilePics = [
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-1310522.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-1484810.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-220453.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-2726111.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3770317.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3775540.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3851312.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3970387.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-4100670.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-4123910.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-4153618.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-415829.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-4626351.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-4886781.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-4886801.jpeg',
  'https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-5853675.jpeg'
];

//LISTING CREATER:
const createAListing = () => {
  var bnb = {};

  // CREATES RATINGS
  var r1 = randomNumberBetween(1, 5, true);
  var r2 = randomNumberBetween(1, 5, true);
  var r3 = randomNumberBetween(1, 5, true);
  var r4 = randomNumberBetween(1, 5, true);
  var r5 = randomNumberBetween(1, 5, true);
  var r6 = randomNumberBetween(1, 5, true);
  var av = Math.floor(((r1 + r2 + r3 + r4 + r5 + r6) * 10) / 6) / 10;

  var ratings = {
    average: av,
    cleanliness: r1,
    communication: r2,
    checkin: r3,
    accuracy: r4,
    location: r5,
    value: r6
  };

  // CREATES REVIEWS
  var reviews = [];
  reviews;
  var numberOfReviews = randomNumberBetween(3, 15);
  var pictures = photoShuffle(profilePics);

  while (numberOfReviews > 0) {
    var userName = faker.name.findName();
    var picUrl = pictures[numberOfReviews];
    var date = `${faker.date.month()} ${randomNumberBetween(2008, 2020)}`;
    var paragraph = faker.lorem.paragraphs();

    reviews.push({
      name: userName,
      date: date,
      reviewBody: paragraph,
      profilePic: picUrl
    });
    numberOfReviews--;
  }

  bnb.ratings = ratings;
  bnb.reviews = reviews;
  return bnb;
};

//CREATE A MEGA OBJECT
const make100 = () => {
  var count = 1;
  var all100 = {};
  var allReviews = [];
  var allRatings = [];

  while (count !== 101) {
    var data = createAListing();
    //SETS THE RELATIONAL ID
    data.ratings.ratingsId = count;
    data.reviews.map(review => {
      review.ratingsId = count;
    });
    allRatings.push(data.ratings);
    allReviews = allReviews.concat(data.reviews);
    count++;
  }
  all100.ratings = allRatings;
  all100.reviews = allReviews;
  return all100;
};

/*
-----------------------------------------
WRITING TO CSV FILES
-----------------------------------------
*/

//WRITE TO CSV FILES
const writeToCsv = () =>{
  var fullPackage = make100();

  //RATING CSV WRITER
  const csvRatingWriter = createCsvWriter({
    path: './database/seeder/ratings.csv',
    header: [
      {id: 'average', title: 'AVERAGE'},
      {id: 'cleanliness', title: 'CLEANLINESS'},
      {id: 'communication', title: 'COMMUNICATION'},
      {id: 'checkin', title: 'CHECKIN'},
      {id: 'accuracy', title: 'ACCURACY'},
      {id: 'location', title: 'LOCATION'},
      {id: 'value', title: 'VALUE'},
      {id: 'ratingsId', title: 'RATINGS_ID'}
    ]
  });

  csvRatingWriter.writeRecords(fullPackage.ratings)
    .then(() => {
      console.log('sucessfull writing the ratings');
    });

  //REVIEW CVS WRITER
  const cvsReviewWriter = createCsvWriter({
    path: './database/seeder/reviews.csv',
    header: [
      {id: 'name', title: 'NAME'},
      {id: 'date', title: 'DATE'},
      {id: 'reviewBody', title: 'REVIEW_BODY'},
      {id: 'profilePic', title: 'PROFILE_PIC'},
      {id: 'ratingsId', title: 'RATINGS_ID'}
    ]
  });

  cvsReviewWriter.writeRecords(fullPackage.reviews)
    .then(() => {
      console.log('sucessfull writing the reviews');
    });
};

writeToCsv();

/*
-----------------------------------------
READ CVS FILES, QUERY TO DATABASE
-----------------------------------------
*/

var reviewsStream = fs.createReadStream('./reviews.csv');
var ratingsStream = fs.createReadStream('./ratings.csv');
var reviewsData = [];
var ratingsData = [];

var readCsvFile = (stream, dataStorage) => {
  var csvStream = fastcsv
    .parse()
    .on('data', (data) => {
      dataStorage.push(data);
    })
    .on('end', () => {
      //REMOVES THE FIRST LINE OF FILE(HEADER)
      dataStorage.shift();
    });
  stream.pipe(csvStream);
};

readCsvFile(ratingsStream, ratingsData);
readCsvFile(reviewsStream, reviewsData);

console.log(ratingsData);


module.exports = {
//JUST SO I CAN SEE CHANGES IN THE SERVER
};