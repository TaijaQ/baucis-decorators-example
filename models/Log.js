'use strict';

// modules
var mongoose = require('mongoose');

// local modules
var LogSchema = require('../schemas/Log.js');

// define model
var LogModel = mongoose.model('Log', LogSchema);

/**
 * Expose model.
 */
module.exports = LogModel;