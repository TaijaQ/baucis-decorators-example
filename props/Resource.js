'use strict';

// modules
var extend = require('deep-extend');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;
var Mixed = Schema.Types.Mixed;

// local modules
var userUtils = require('../utils/user.js');

/**
 * Expose object.
 */
exports = module.exports = {};

// good to know

exports.created = {
  type: Date,
  default: Date.now,
  required: true,
  reserved: true
};

exports.createdBy = {
  type: ObjectId,
  ref: 'User',
  required: true,
  once: userUtils.getId
};

exports.modified = {
  type: Date,
  default: Date.now,
  required: true,
  update: Date.now
};

exports.modifiedBy = {
  type: ObjectId,
  ref: 'User',
  required: true,
  update: userUtils.getId
};

// descriptive
  
exports.name = {
  type: String,
  trim: true,
  required: true,
  env: true
};

exports.tags = {
  type: [String],
  trim: true,
  env: true
};

exports.description = {
  type: String,
  trim: true,
  env: true
};

exports.image = {
  type: String,
  env: true
};

exports.status = {
  type: String,
  trim: true,
  env: true
};

// authorization

exports.viewing = {
  type: [String], // should represent sessionId
  auth: {
    password: 'viewingPassword',
    enabler: 'publicViewing',
    designator: 'viewers',
    resetter: 'resetViewingPassword',
    roles: {
      enabled: {
        read   : true
      }
    }
  },
  reserved: true,
  env: true
};

exports.publicViewing = {
  type: Boolean,
  default: true,
  env: true
};

exports.viewingPassword = {
  type: String,
  select: false,
  env: true
};

exports.resetViewingPassword = {
  type: String,
  select: false,
  env: true
};

exports.viewers = {
  type: [{
    type: ObjectId,
    ref: 'User'
  }],
  env: true
};

exports.editing = {
  type: [String], // should represent sessionId
  auth: {
    password: 'editingPassword',
    enabler: 'publicEditing',
    designator: 'editors',
    resetter: 'resetEditingPassword',
    roles: {
      enabled: {
        read   : true,
        write  : true,
        drop   : true
      },
      User: {
        create : true
      }
    }
  },
  reserved: true,
  env: true
};

exports.publicEditing = {
  type: Boolean,
  default: false,
  env: true
};

exports.editingPassword = {
  type: String,
  select: false,
  env: true
};

exports.resetEditingPassword = {
  type: String,
  select: false,
  env: true
};

exports.editors = {
  type: [{
    type: ObjectId,
    ref: 'User'
  }],
  init: function (req, res, next) {
    return [userUtils.getId(req, res, next)];
  },
  env: true
};

// voting

exports.approve = {
  type: Boolean,
  reserved: true,
  vote: 'approvedBy'
};

exports.approvedBy = {
  type: [{
    type: ObjectId,
    ref: 'User'
  }],
  reserved: true
};

// updates

exports.pendingRun = {
  type: Mixed,
  reserved: true,
  select: false
};

exports.pendingSave = {
  type: Mixed,
  reserved: true,
  select: false
};

exports.pendingDeploy = {
  type: [String],
  reserved: true
};
