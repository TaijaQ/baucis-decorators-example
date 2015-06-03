'use strict';

// modules
var baucis = require('baucis');
var decorators = require('baucis-decorators');

// ensure model is initialized
var ResourceModel = require('../models/Resource.js');

// initialize controller
var ResourceController = baucis.rest('Resource');

// decorate controller
decorators.add.call(ResourceController, [
  'baucis-decorator-deep-select',
  'baucis-decorator-env',
  'baucis-decorator-file',
  'baucis-decorator-insensitive',
  'baucis-decorator-reserved',
  'baucis-decorator-init',
  'baucis-decorator-once',
  'baucis-decorator-update',
  'baucis-decorator-required',
  'baucis-decorator-vote',
  'baucis-decorator-auth'
]);

/**
 * Expose controller.
 */
module.exports = ResourceController;