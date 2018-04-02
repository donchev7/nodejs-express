'use strict';

const mongoose = require('mongoose');
const logger = require('../config/logger');

mongoose.Promise = global.Promise;

before((done) => {
  mongoose.connect('mongodb://localhost:27017/Todo');
  const db = mongoose.connection;
  db.once('open', () => {
    logger.info('Connected to mongodb database!');
    done();
  });
  db.on('error', (error) => {
    logger.error(error);
  });
});

after(() => {
  mongoose.connection.close();
});

// beforeEach(() =>
//   // runs before each test in this block
// );

// afterEach(() =>
//   // runs after each test in this block
// );

// test cases

