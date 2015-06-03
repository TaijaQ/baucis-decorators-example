'use strict';

// modules
var baucis = require('baucis');
var decorators = require('baucis-decorators');

// local modules
var ResourceController = require('../controllers/Resource.js');

// ensure model is initialized
var LogModel = require('../models/Log.js');

// initialize controller
var LogController = baucis.rest('Log');

// decorate controller
decorators.add.call(LogController, [ResourceController]);

/**
 * Expose controller.
 */
module.exports = LogController;