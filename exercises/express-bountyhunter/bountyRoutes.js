const express = require('express');
const bountyRoute = express.Router();
const Bounty = require('./models/bountyModel');

bountyRoute.route('/')
  .get((request, response) => {
    Bounty.find((err, bounties) => {
      if (err) return response.status(501).send(err)
      return response.status(200).send(bounties)
    })
  })

  .post((request, response) => {
    const newBounty = new Bounty(request.body)
    // console.log(newBounty)
    newBounty.save(err => {
       if (err) return response.status(500).send(err) 
       return response.status(200).send(newBounty)
    })
  })

bountyRoute.route('/:_id')

  .delete((request, response) => {
    Bounty.findOneAndDelete(
      { _id: request.params._id},
      (err, bounty) => {
        err && response.status(500).send(err)
        return response.status(200).send(`it's deleteeeedd`)
      }
    )
  })

  .get((request, response) => {
    Bounty.findById(
      { _id: request.params._id},
      (err, bounty) => {
        err && response.status(500).send(err)
        return response.status(200).send(`you retrieved one bounty yooo ${bounty}`)
      }
    )
  })

  .put((request, response) => {
    Bounty.findOneAndUpdate(
      {_id: request.params._id},
      request.body,
      {new: true},
      (err, bounty) => {
        err && response.status(500).send(err)
        return response.status(200).send(bounty)
      }
      )
  })

module.exports = bountyRoute;