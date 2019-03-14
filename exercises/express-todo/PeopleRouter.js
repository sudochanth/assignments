const express = require('express');
const peopleRouter = express.Router();
const uuid = require('uuid');
const data = require('./Data')


//Refactored router.route
peopleRouter.route('/')


// GET all information. make request to database
// Send back database as response to client
.get((request, response) => {
  response.send({data});
})

// POST
.post((request, response) => {
  // console.log(request.body);
  const newObj = request.body;
  newObj._id = uuid.v4();
  data.push(newObj);
  response.send(newObj);
})

// Refactored route with ID
peopleRouter.route('/:_id')

// GET info for one object. 
// Make request, get id from params and set variable to find single object
.get((request, response) => {
  const { _id } = request.params;
  const found = data.find(item => item._id === _id);
  found ? response.send(found) : response.send('not found')
})

.delete((request, response) => {
  const { _id } = request.params;
  const objIndex = data.findIndex(item => {
    return item._id === _id
  })

  data.splice(objIndex, 1);
  response.send('deleted');
})

.put((request, response) => {
  const { _id } = request.params;
  const updatedObj = request.body;
  data.forEach(item => {
    if (item._id === _id) {
      item = Object.assign(item, updatedObj);
    } else {
      response.send(data)
    }
  })
})


module.exports = peopleRouter;