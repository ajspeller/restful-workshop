const mongoose = require('mongoose');
const debug = require('debug')('app:db');

const db = process.env.MONGO_URI;

mongoose.connect(
  db,
  { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false },
  (err, client) => {
    debug(`Database connection established`);
  }
);
