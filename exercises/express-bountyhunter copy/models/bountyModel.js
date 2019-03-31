const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  isAlive: {
    type: Boolean,
    default: true
  },
  amount: Number,
  type: {
    type: String,
    enum: ['jedi', 'sith']
  }
  
})

module.exports = mongoose.model('Bounty', bountySchema)