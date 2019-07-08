const Customer = require('../models/customer.model');

const router = require('express').Router();

router.get('/customer', (req, res) => {
  Customer.find({})
    .then((customers) => {
      res.status(200).send(customers);
    })
    .catch((e) => {
      res.status(500).send({ error: e });
    });
});

router.post('/customer', (req, res) => {
  if (!req.body) {
    return res.status(400).send('Request missing body');
  }
  const { name, email } = req.body;
  if (!name) {
    return res.status(400).send('Request missing name');
  }
  if (!email) {
    return res.status(400).send('Request missing email');
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

router.get('/customer/:name', (req, res) => {
  const { name } = req.params;
  if (!name) {
    return res.status(400).send('Name is missing!');
  }
  Customer.findOne({
    name
  })
    .then((customer) => {
      res.status(200).send(customer);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

router.put('/customer', (req, res) => {
  const { name } = req.query;
  Customer.findOneAndUpdate(
    {
      name
    },
    req.body,
    { new: true }
  )
    .then((customer) => {
      res.status(200).send(customer);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});

router.delete('/customer', (req, res) => {
  const { name } = req.query;
  Customer.findOneAndRemove({
    name
  })
    .then((customer) => {
      res.status(200).send(customer);
    })
    .catch((err) => {
      res.status(500).send({ error: err });
    });
});
module.exports = router;
