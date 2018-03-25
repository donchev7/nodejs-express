let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  task = require('./todo/todoModel'),
  bodyParser = require('body-parser');

// Use native promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongodb:27017/Todo');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./todo/todoRoutes');
routes(app);

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.use(function(req, res, next) {
  res.send('Hello World');
  next();
});


// SET UP CONFIG VARs for mongo and others?
// Configure domain error handling
// Add error handling middleware
// Add other app middleware in folder
// Write tests for controller, route,  middleware