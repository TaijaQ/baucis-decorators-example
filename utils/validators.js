'use strict';

// modules
var mongoose = require('mongoose');

/**
 * Expose object.
 */
exports = module.exports = {};

/**
 * Simple email validation.
 *
 * @param {String} email
 * @return {Boolean}
 * @api public
 */
function isValidEmail (email) {
  var split = email && email.split('@') || [];
  
  if (!split[0] || split.length != 2) {
    return false;
  }
  
  split = split[1].split('.');
  if (split.length < 2) {
    return false;
  }
  
  while (split.length) {
    if (!split.shift()) {
      return false;
    }
  }
  
  return true;
};
exports.email = {
  validator: isValidEmail,
  msg: 'Invalid `email`.'
};

/**
 * Simple phone validation.
 *
 * @param {String} phone
 * @return {Boolean}
 * @api public
 */
function isValidPhone (phone) {
  return /[0-9-\+]/.test(phone);
};
exports.phone = {
  validator: isValidPhone,
  msg: 'Invalid `phone`.'
};

/**
 * Generates case-insensitive uniqueness validator.
 * 
 * @param {String} modelName
 * @param {String} field
 * @return {Function}
 * @api public
 **/
function insensitiveUnique (modelName, field) {
  return {
    validator: function (val, cb) {
      if (val && val.length) {
        var model = mongoose.models[modelName];
        var query = model.where(field, new RegExp('^'+val+'$', 'i'));

        if (!this.isNew) {
          query = query.where('_id').ne(this._id);
        }

        query.count(function (err, n) {
          cb(n < 1);
        });
      } else {
        cb(false);
      }
    },
    msg: '`'+field+'` already in use.'
  };
};
exports.insensitiveUnique = insensitiveUnique;