const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/db.js');
const app = express();
const port = 3000;



app.listen(port, () =>{
  console.log(`listing on port: ${port}`);
});