'use strict';

// modules
var extend = require('deep-extend');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// local modules
var ResourceProps = require('./Resource.js');
var validators = require('../utils/validators.js');
var emailValidator = validators.email;
var phoneValidator = validators.phone;
var insensitiveUnique = validators.insensitiveUnique;

/**
 * Expose object.
 */
exports = module.exports = {};

// no environment for log props so let's copy what we need

ResourceProps = extend({}, ResourceProps);

// allow users to filter logs by environment

exports.dev = {
  type: Boolean,
  once: function (req, res, next) {
    return (req.originalUrl || req.baseUrl).indexOf('/dev/') === 0;
  }
};

// what is this log about

exports.of = {
  type: ObjectId,
  required: true
};

// how was the log created

exports.method = {
  type: String,
  required: true
};

// good to know

exports.created               = ResourceProps.created;
exports.createdBy             = ResourceProps.createdBy;
exports.modified              = ResourceProps.modified;
exports.modifiedBy            = ResourceProps.modifiedBy;

// descriptive

exports.name                  = ResourceProps.name;
exports.name.required         = false;
exports.name.env              = false;

exports.tags                  = ResourceProps.tags;
exports.tags.env              = false;
exports.description           = ResourceProps.description;
exports.description.env       = false;
exports.image                 = ResourceProps.image;
exports.image.env             = false;
exports.status                = ResourceProps.status;
exports.status.env            = false;

// authorization

exports.viewing               = ResourceProps.viewing;
exports.viewing.env           = false;
exports.publicViewing         = ResourceProps.publicViewing;
exports.publicViewing.env     = false;
exports.viewingPassword       = ResourceProps.viewingPassword;
exports.viewingPassword.env   = false;
exports.viewers               = ResourceProps.viewers;
exports.viewers.env           = false;

exports.editing               = ResourceProps.editing;
exports.editing.env           = false;
exports.publicEditing         = ResourceProps.publicEditing;
exports.publicEditing.env     = false;
exports.editingPassword       = ResourceProps.editingPassword;
exports.editingPassword.env   = false;
exports.editors               = ResourceProps.editors;
exports.editors.env           = false;

// voting

exports.approve               = ResourceProps.approve;
exports.approvedBy            = ResourceProps.approvedBy;

// updates

exports.pendingRun            = ResourceProps.pendingRun;
exports.pendingSave           = ResourceProps.pendingSave;