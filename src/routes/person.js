const express = require('express');

const router = express.Router();

router.get('/person', (req, res) => {
  res.send('Person requested');
});

module.exports = router;
