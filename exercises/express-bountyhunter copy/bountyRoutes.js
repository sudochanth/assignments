const express = require('express');
const bountyRoute = express.Router();
// const uuid = require('uuid');
// const data = require('./bounties');
const Bounty = require('./models/bountyModel');


bountyRoute.route('/')
// .GET without mongoose
// .get((request, response) => {
//   response.send(data);
// })
  .get((request, response) => {
    Bounty.find((err, bounties) => {
      if (err) return response.status(501).send(err)
      return response.status(200).send(bounties)
    })
  })

  // .post((request, response) => {
  //   const newObj = request.body
  //   newObj._id = uuid.v4()
  //   data.push(newObj)
  //   response.send(newObj)
  // })
  .post((request, response) => {
    // line 28/29 same as line 30
    // const newBountyInfo = request.body
    // const newBounty = new Bounty(newBountyInfo)
    const newBounty = new Bounty(request.body)
    // client info (req.body) is being put into newBounty and followig its schema
    console.log(newBounty)
    newBounty.save(err => {
      err && response.status(500).send(err)
      return response.status(200).send(newBounty)
      // ^^ only send info that you need
    })
    response.send(newBounty)
  })

  // : is a placeholder saying anything after is the name of it (client side??)
bountyRoute.route('/:_id')

  // .delete((request, response) => {
  //   const { _id } = request.params;
  //   const objIndex = data.findIndex(item => item._id === _id);
  //   data.splice(objIndex, 1);
  //   response.send('bounty completed');
  // })
  .delete((request, response) => {
    Bounty.findByOneAndDelete(
      { _id: request.params._id},
      (err, bounty) => {
        err && response.status(500).send(err)
        return response.status(200).send(`it's deleteeeedd`)
      }
    )
  })

  // .get((request, response) => {
  //   const { _id } = request.params;
  //   const found = data.find(item => item._id === _id);
  //   found ? response.send(found) : response.send('not found');
  // })
  .get((request, response) => {
    Bounty.findById(
      { _id: request.params._id},
      (err, bounty) => {
        err && response.status(500).send(err)
        return response.status(200).send(`you retrieved one bounty yooo ${bounty}`)
        // return response.send(todo)
      }
    )
  })

  // .put((request, response) => {
  //   const { _id } = request.params;
  //   const updatedObj = request.body;
  //   data.forEach(item => {
  //     if (item._id === _id) {
  //       item = Object.assign(item, updatedObj)
  //     }
  //   })
  //   response.send(data);
  // })
  .put((request, response) => {
    // const { _id } = request.params;
    // const updatedObj = request.body;
    // vv takes four arguments.
    // id, request.body, {new: true} sends back new updated true object, error
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