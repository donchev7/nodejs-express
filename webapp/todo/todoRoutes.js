'use strict';

const todoList = require('./todoController');

function registerRoutes(app) {
  app
    .route('/tasks')
    .get(todoList.listAllTasks)
    .post(todoList.createTask);

  app
    .route('/tasks/:taskId')
    .get(todoList.readTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask);
}

module.exports = registerRoutes;
