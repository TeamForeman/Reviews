const mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost/beartnt_reviews';
//beartnt_reviews
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const userSchema = new mongoose.Schema({
//   name: String
// });

// const Kitten = mongoose.model('Kitten', kittySchema);

// Kitten.find(function (err, kittens) {
//   if (err) {
//     return console.error(err);
//   }
//   console.log(kittens);
//   db.close();
// });

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  profilePic: String
});

var reviewSchema = new Schema({
  reviewBody: String,
  date: String,
  'user_id': Number,
  'product_id': Number
});

const user = mongoose.model('user', userSchema);
const review = mongoose.model('review', reviewSchema);


const getReviews = (productId, cb) => {
  review.find({'product_id': productId}, (err, data) => {
    if (err) { return console.error(err.stack); }
    cb(data);
    db.close();
  });
};

getReviews(10999, (data) => {
  console.log(data);
});

module.exports = {
  getReviews,
};



