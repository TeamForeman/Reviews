const mongoose = require('mongoose');

var mongoDB = 'mongodb://localhost/beartnt_reviews';

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;

var User = new Schema({
  id: Number,
  name: String,
  profilePic: String
});

const MyModel = mongoose.model('ModelName', User);

db.close();