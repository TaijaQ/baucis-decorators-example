'use strict';

// modules
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// local modules
var ResourceProps = require('../props/Resource.js');

// define schema
var ResourceSchema = new Schema(ResourceProps);

/**
 * Expose schema.
 */
module.exports = ResourceSchema;