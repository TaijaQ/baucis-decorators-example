'use strict';

// modules
var baucis = require('baucis');

// ensure swagger is initialized first
require('baucis-swagger');

// initialize controllers
require('../controllers/Resource.js');
require('../controllers/User.js');
require('../controllers/Log.js');

/**
 * Expose router.
 */
module.exports = baucis();