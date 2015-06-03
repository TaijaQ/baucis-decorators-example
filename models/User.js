'use strict';

// modules
var mongoose = require('mongoose');

// local modules
var UserSchema = require('../schemas/User.js');

// define model
var UserModel = mongoose.model('User', UserSchema);

/**
 * Expose model.
 */
module.exports = UserModel;