const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/beartnt_reviews';
// beartnt_reviews
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  profilePic: String,
});

const reviewSchema = new Schema({
  reviewBody: String,
  date: String,
  user_id: Number,
  product_id: Number,
});

const user = mongoose.model('user', userSchema);
const review = mongoose.model('review', reviewSchema);

const getReviews = (productId, cb) => {
  review.find({ product_id: productId }, (err, data) => {
    if (err) { return console.error(err.stack); }
    return cb(data);
  });
};

const getUserId = (name, cb) => {
  user.find({ name }, (err, data) => {
    if (err) { return console.error(err.stack); }
    return cb(data);
  });
};

getUserId('Fabian Yee', (data) => {
  console.log(data);
});

// const postReviews = (productId, cb) => {
//   review.find({'product_id': productId}, (err, data) => {
//     if (err) { return console.error(err.stack); }
//     cb(data);
//   });
// };

module.exports = {
  getReviews,
};
