const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const app = express();
const port = 3000;
const FAKE = require('../database/seeder/fakeData.js');



app.listen(port, () =>{
  console.log(`listing on port: ${port}`);
});