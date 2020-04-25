const express = require('express');
const app = express();
const spaservicesRoute = express.Router();

// Student model
let Spaservices = require('../model/Spaservices');

// Get all Spa services
spaservicesRoute.route('/').get((req, res) => {
  Spaservices.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

module.exports = spaservicesRoute;
