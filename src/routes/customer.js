const Customer = require('../models/customer.model');

const router = require('express').Router();

router.post('/customer', (req, res) => {
  const { name, email } = req.body;
  if (!req.body) {
    return res.status(400).send('Request missing body');
  }
  if (!name) {
    return res.status(400).send('Request missing name');
  }
  if (!email) {
    return res.status(400).send('Request missing emain');
  }
  const customer = new Customer({
    name,
    email
  });
  customer
    .save()
    .then((doc) => {
      if (!doc) {
        return res.status(500).send(doc);
      }
      res.status(200).send(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
