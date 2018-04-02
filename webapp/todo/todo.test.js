'use strict';

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
const assert = require('assert');
const Task = require('./todoModel');

describe('Insert Fail', () => {
  it('should throw an error', async () => {
    const taskToInsert = {
      createdDate: Date.Now,
      status: ['completed']
    };
    const newTask = new Task(taskToInsert);
    try {
      await newTask.save();
    } catch (e) {
      assert.equal(e.errors.name.message, 'Kindly enter the name of the task');
    }
  });
});

describe('Insert', () => {
  it('should insert new task', async () => {
    const taskToInsert = {
      name: 'NewTask',
      createdDate: Date.Now,
      status: ['completed']
    };
    const newTask = new Task(taskToInsert);
    const taskResult = await newTask.save();
    assert.equal(taskResult.name, taskToInsert.name);
  });
});
