require('dotenv').config();
const express = require('express');
const debug = require('debug')('app:index');
const chalk = require('chalk');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.listen(PORT, () => {
  debug(`Webserver started on port ${chalk.inverse.bold.green(PORT)}`);
});
