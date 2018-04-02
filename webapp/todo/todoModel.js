'use strict';

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: 'Kindly enter the name of the task'
    },
    createdDate: {
      type: Date,
      default: Date.now
    },
    status: {
      type: [
        {
          type: String,
          enum: ['pending', 'ongoing', 'completed']
        }
      ],
      default: ['pending']
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  }
);

module.exports = mongoose.model('Tasks', TaskSchema);
