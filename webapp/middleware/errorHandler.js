'use strict';

const logger = require('../config/logger');

/* eslint-disable no-unused-vars */
// 404 catch-all handler (middleware)
function notFound(req, res, next) {
  logger.error(`${req.originalUrl} not found`);
  res.status(404);
  res.send({ url: `${req.originalUrl} not found` });
}

// 500 catch-all handler (middleware)
function serverError(err, req, res, next) {
  logger.error(err);
  res.status(500);
  res.send({ Error: 'Internal server error' });
}

module.exports = { notFound, serverError };
