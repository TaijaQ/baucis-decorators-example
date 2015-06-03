'use strict';

// modules
var mongoose = require('mongoose');

// local modules
var ResourceSchema = require('../schemas/Resource.js');

// define model
var ResourceModel = mongoose.model('Resource', ResourceSchema);

/**
 * Expose model.
 */
module.exports = ResourceModel;