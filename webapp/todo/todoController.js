'use strict';

/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const asyncM = require('../middleware/asyncHandler');
const logger = require('../config/logger');

const Task = mongoose.model('Tasks');

async function listAllTasks(req, res, next) {
  logger.info('getting all tasks');
  const task = await Task.find({});
  res.json(task);
}

async function createTask(req, res, next) {
  const newTask = new Task(req.body);
  await newTask.save();
  res.json(newTask);
}

async function readTask(req, res, next) {
  logger.info('getting tasks');
  const task = await Task.findById(req.params.taskId);
  res.json(task);
}

async function updateTask(req, res, next) {
  const task = await Task.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true });
  res.json(task);
}

async function deleteTask(req, res) {
  await Task.remove({
    _id: req.params.taskId
  });
  res.json({ message: 'Task successfully deleted' });
}

module.exports = {
  listAllTasks: asyncM(listAllTasks),
  createTask: asyncM(createTask),
  readTask: asyncM(readTask),
  updateTask: asyncM(updateTask),
  deleteTask: asyncM(deleteTask)
};
