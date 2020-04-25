const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Spa services
let spaservice = new Schema({
  Spaservices_title: {
    type: String
  },
  Spaservices_price: {
    type: String
  }
}, {
  collection: 'Spaservices'
})

module.exports = mongoose.model('Spaservice', spaservice)
