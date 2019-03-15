const express = require('express');
const bountyRoute = express.Router();
const uuid = require('uuid');
const data = require('./bounties');
const Bounty = require('./models/bountyModel');


bountyRoute.route('/')

  .get((request, response) => {
    response.send(data);
  })

  .post((request, response) => {
    const newObj = request.body
    newObj._id = uuid.v4()
    data.push(newObj)
    response.send(newObj)
  })

bountyRoute.route('/:_id')

  .delete((request, response) => {
    const { _id } = request.params;
    const objIndex = data.findIndex(item => item._id === _id);
    data.splice(objIndex, 1);
    response.send('bounty completed');
  })

  .get((request, response) => {
    const { _id } = request.params;
    const found = data.find(item => item._id === _id);
    found ? response.send(found) : response.send('not found');
  })

  .put((request, response) => {
    const { _id } = request.params;
    const updatedObj = request.body;
    data.forEach(item => {
      if (item._id === _id) {
        item = Object.assign(item, updatedObj)
      }
    })
    response.send(data);
  })

module.exports = bountyRoute;