'use strict';

// modules
var extend = require('deep-extend');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

// local modules
var ResourceProps     = require('./Resource.js');
var validators        = require('../utils/validators.js');
var emailValidator    = validators.email;
var phoneValidator    = validators.phone;
var insensitiveUnique = validators.insensitiveUnique;

/**
 * Expose object.
 */
exports = module.exports = {};

// no environment for user props so let's copy what we need

ResourceProps = extend({}, ResourceProps);
    
// good to know

exports.created     = ResourceProps.created;
exports.createdBy   = ResourceProps.createdBy;
exports.modified    = ResourceProps.modified;
exports.modifiedBy  = ResourceProps.modifiedBy;

// descriptive

exports.name = ResourceProps.name;
exports.name.index = {
  sparse: true
};
exports.name.validate = [
  insensitiveUnique('User', 'name')
];
exports.name.env = false;

exports.first = {
  type: String,
  trim: true
};

exports.last = {
  type: String,
  trim: true
};

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
exports.resetViewingPassword  = ResourceProps.resetViewingPassword;
exports.resetViewingPassword.env  = false;
exports.viewers               = ResourceProps.viewers;
exports.viewers.env           = false;

exports.editing               = ResourceProps.editing;
exports.editing.env           = false;
exports.publicEditing         = ResourceProps.publicEditing;
exports.publicEditing.env     = false;
exports.editingPassword       = ResourceProps.editingPassword;
exports.editingPassword.env   = false;
exports.resetEditingPassword  = ResourceProps.resetEditingPassword;
exports.resetEditingPassword.env  = false;
exports.editors               = ResourceProps.editors;
exports.editors.env           = false;

// voting

exports.approve               = ResourceProps.approve;
exports.approvedBy            = ResourceProps.approvedBy;

exports.follow = {
  type: Boolean,
  reserved: true,
  vote: 'followedBy'
};

exports.followedBy = {
  type: [{
    type: ObjectId,
    ref: 'User'
  }],
  reserved: true
};

exports.trust = {
  type: Boolean,
  reserved: true,
  vote: 'trustedBy'
};

exports.trustedBy = {
  type: [{
    type: ObjectId,
    ref: 'User'
  }],
  reserved: true
};

// updates

exports.pendingRun            = ResourceProps.pendingRun;
exports.pendingSave           = ResourceProps.pendingSave;

// contact

exports.email = {
  type: String,
  trim: true,
  required: true,
  index: {
    sparse: true
  },
  validate: [
    emailValidator,
    insensitiveUnique('User', 'email')
  ],
  visibleTo: ['editing']
};

exports.phone = {
  type: String,
  trim: true,
  validate: [
    phoneValidator
  ],
  visibleTo: ['editing']
};

exports.website = {
  type: String,
  trim: true
};

exports.address = {
  type: String,
  trim: true,
  visibleTo: ['editing']
};

exports.city = {
  type: String,
  trim: true
};

exports.state = {
  type: String,
  trim: true
};

exports.country = {
  type: String,
  trim: true
};

// customers

exports.level = {
  type: Number,
  default: 0,
  min: 0,
  max: 9001,
  reserved: true
};

exports.stripeCustomerId = {
  type: String,
  reserved: true,
  select: false
};

exports.stripeSubscriptionId = {
  type: String,
  reserved: true,
  select: false
};