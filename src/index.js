require('dotenv').config();
require('./db');
const express = require('express');
const debug = require('debug')('app:index');
const chalk = require('chalk');
const morgan = require('morgan');
const path = require('path');

const personRouter = require('./routes/person');
const customerRouter = require('./routes/customer');

const PORT = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
  debug(`${new Date().toString()} -- ${req.originalUrl}`);
  next();
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(morgan('dev'));
app.use(express.static('public'));

app.use(personRouter);
app.use(customerRouter);

app.use((req, res, next) => {
  res.status(404).send('Resourse not found');
  next();
});

app.use((err, req, res, next) => {
  res.senFile(path.join(__dirname, '../public/500.html'));
});

app.listen(PORT, () => {
  debug(`Webserver started on port ${chalk.inverse.bold.green(PORT)}`);
});
