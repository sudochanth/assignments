const express = require('express');
const app = express();
// mongo db is database
//access to mongoose
//mongoose is language allows us to int4eract with database
const mongoose = require('mongoose');
app.use(express.json());

const port = 7070;

// location of mongo database where server connects to database
// takes two arguments
// creates an instance of database in mongo
// after connect to database .then to show connection and then .catch error
// get server 
mongoose.connect('mongodb://localhost:27017/bounties', {useNewUrlParser: true})
  .then( () => console.log('connected to mongodb!!'))
  .catch(err => console.log(err))

// middleware
// requiring router file. use specific router/url path '/bounties'
// first parameter: you're naming/creating location
// second parameter: requiring where your routes are
app.use('/bounties', require('../bountyRoutes'))

app.listen(port, () => {
  console.log(`success. server is running on port ${port}`)
});