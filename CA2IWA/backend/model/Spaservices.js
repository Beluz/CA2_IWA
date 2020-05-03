const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true},
    password: String,
    username: String
});

module.exports = mongoose.model('User', userSchema);

// Define collection and schema for Spa services
// let spaservice = new Schema({
//   Spaservices_title: {
//     type: String
//   },
//   Spaservices_price: {
//     type: String
//   }
// }, {
//   collection: 'Spaservices'
// })

// module.exports = mongoose.model('Spaservice', spaservice)
