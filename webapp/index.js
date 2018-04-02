'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('./config/logger');
const errorHandler = require('./middleware/errorHandler');
require('./todo/todoModel');
const routes = require('./todo/todoRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Use native promises
mongoose.Promise = global.Promise;
const mongoUrl = process.env.MONGO_URL;
mongoose.connect(mongoUrl);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);
app.listen(port);
logger.info(`todo list RESTful API server started on: ${port}`);

app.use(errorHandler.notFound);
app.use(errorHandler.serverError);
