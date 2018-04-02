'use strict';

const config = require('./settings');
const logger = require('winston');

// configure winston 3.x.x logger
// const { createLogger, format, transports } = require('winston');
// const logger = createLogger({
//     level: config.env === 'development' ? 'silly' : 'info',
//     format: config.env === 'development' ? format.prettyPrint() : format.json(),
//     transports: [new transports.Console({
//         colorize: true,
//         timestamp: true
//     })]
//   });

// configure winston 2.x.x logger
logger.default.transports.console.colorize = true;
logger.default.transports.console.timestamp = true;
logger.default.transports.console.prettyPrint = config.env === 'development';
logger.level = config.logger.level;

module.exports = logger;
