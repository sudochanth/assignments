const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  firstName: String,
  lastName: String,
  isAlive: {
    type: Boolean,
    default: true
  },
  amount: Number,
  image: {
    type: String,
    default: 'https://www.catster.com/wp-content/uploads/2017/12/A-kitten-meowing.jpg'
  },
  type: String
  
})

module.exports = mongoose.model('Bounty', bountySchema)