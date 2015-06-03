'use strict';

// modules
var baucis = require('baucis');
var decorators = require('baucis-decorators');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;

// decorators
var guests = require('baucis-decorator-guests');
var upgrade = require('baucis-decorator-upgrade');

// local modules
var app = require('../server/app.js');
var ResourceController = require('../controllers/Resource.js');

// ensure model is initialized
var UserModel = require('../models/User.js');

// initialize controller
var UserController = baucis.rest('User');

// decorate controller
decorators.add.call(UserController, [
  guests(app),
  upgrade(app.get('stripeSecret')),
  ResourceController
]);

/**
 * Expose controller.
 */
module.exports = UserController;