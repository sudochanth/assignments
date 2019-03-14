// Server allows you to handle requests
// Intro to Servers
// Servers listens for requests and gives back responses (receptionist at front desk)

// Installation process for any time you create a server
// 1) npm init -y (creates package json file/all dependencies are listed, and what node modules are needed)
// 2) npm i express
// 3) touch .gitignore (read by GitHub, ignores anything in that file)
// 4) touch server.js (prob can name something else)
// 5) npm i -g nodemon (allows updates server automatically)
// 6) nodemon <filename>.js (to start nodemon)
// 7) npm i body-parser (don't need to install this anymore)


// Brings in express module
const express = require('express');

// Saving all express libraries into variable 'app'
const app = express();

// Install random ID creator/package (only if you need ID's)
const uuid = require('uuid')

// Create port as variable
const port = 7000;

// establishes where it connects, initiates server. available ports 0-65535 use above 1023
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

// Middleware (communicates with your database)
// Body parser has handful of methods that converts incoming info into javascript object
// Body parser good for single requests coming in
// const bodyParser = require('body-parser');

// Using body parser
// change incoming json info/object into js
// app.use(bodyParser.json()); < dont use bodyParser anymore?
app.use(express.json());

// 'Get' method handles all get requests on backend side (receiving requests)
// Takes two parameters, route/url string and another set of parameters as callback function (request, response)
// Response is everything we want returned back to the user
// Anytime call back function is called, anything in the function is sent back

// app.get('/', (request, response) => {
//   response.send({sport: 'football'})
// })



// // GET
// app.get('/food', (request, response) => {
//   response.send({database})
// })

// // POST takes two arguments, url, callback function
// app.post('/food', (request, response) => {
//   console.log(request.body);
//   database.push(request.body);
//   response.send(database);
// })

// PUT
// app.put('/food/update/:id', (request, reponse, next) => {
//   let id = {
//     id: ObjectID(req.params.id)
//   };



// GET
app.get('/food', (request, response) => {
  response.send({database})
})

// POST
app.post('/food', (request, response) => {
  const newObj = request.body;
  // newObj._id = uuid.v4();
  database.push(newObj)
  response.send(newObj)
})


// establishes where it connects, initiates server. available ports 0-65535 use above 1023
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})

// request is the info client makes to server

// response is the info we're sending back