'use strict';

// modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// local modules
var LogProps = require('../props/Log.js');

// define schema
var LogSchema = new Schema(LogProps);

/**
 * Expose schema.
 */
module.exports = LogSchema;