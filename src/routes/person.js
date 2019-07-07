const express = require('express');

const router = express.Router();

router.get('/person', (req, res) => {
  const { name } = req.query;
  if (name) {
    return res.send(`Person requested: ${name}`);
  }
  res.send('Person requested');
});

router.get('/person/:name', (req, res) => {
  const { name } = req.params;
  res.send(`You have requested ${name}`);
});

module.exports = router;
