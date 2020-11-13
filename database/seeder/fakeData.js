const faker = require('faker');
// const mysql = require('mysql');
const con = require('../db.js');

//RANDOM NUMBER GENERATOR
var randomNumberBetween = (min, max, oneDecimalPoint) => {
  if (oneDecimalPoint) {
    min *= 10;
    max *= 10;
    return ((Math.floor(Math.random() * (max - min + 1)) + min) / 10);
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

//CHOOSING A RANDOM PHOTO
var photoShuffle = (pics) => {
  var newOrder = pics.sort(() => Math.random() - 0.5);
  return newOrder;
};

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
var createAListing = () => {
  var bnb = [];
  // CREATES RATINGS
  var ratings = [];
  var r1 = randomNumberBetween(1, 5, true);
  var r2 = randomNumberBetween(1, 5, true);
  var r3 = randomNumberBetween(1, 5, true);
  var r4 = randomNumberBetween(1, 5, true);
  var r5 = randomNumberBetween(1, 5, true);
  var r6 = randomNumberBetween(1, 5, true);
  var av = Math.floor(((r1 + r2 + r3 + r4 + r5 + r6) * 10) / 6) / 10;

  ratings.push({
    average: av,
    cleanliness: r1,
    communication: r2,
    checkin: r3,
    accuracy: r4,
    location: r5,
    value: r6
  });


  // CREATES REVIEWS
  var reviews = {posts: []};
  var numberOfReviews = randomNumberBetween(3, 15);
  var pictures = photoShuffle(profilePics);
  while (numberOfReviews > 0) {
    var userName = faker.name.findName();
    var picUrl = pictures[numberOfReviews];
    var date = `${faker.date.month()} ${randomNumberBetween(2008, 2020)}`;
    var paragraph = faker.lorem.paragraphs();
    reviews.posts.push({
      name: userName,
      date: date,
      reviewBody: paragraph,
      profilePic: picUrl
    });
    numberOfReviews--;
  }
  bnb.push(ratings, reviews);
  return bnb;
};



// console.log('ratings?', ratingScore);
// console.log('ratings?', ratingScore);
// console.log('Amount of reviews?', faker.date.month());
// console.log('Amount of reviews?', numberOfReviews);
// console.log('name: ', userName);
// console.log('name: ', userName);

var date = `${faker.date.month()} ${randomNumberBetween(2008, 2020)}`;
console.log(console.log(createAListing()));