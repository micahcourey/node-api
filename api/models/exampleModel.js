'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Enter a task'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['future', 'in progress', 'done']
    }],
    default: ['future']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);

