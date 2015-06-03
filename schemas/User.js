'use strict';

// modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// local modules
var UserProps = require('../props/User.js');

// define schema
var UserSchema = new Schema(UserProps);

/**
 * Expose schema.
 */
module.exports = UserSchema;