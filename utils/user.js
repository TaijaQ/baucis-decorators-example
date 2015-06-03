'use strict';

/**
 * Expose object.
 */
exports = module.exports = {};

/**
 * Gets ID from the current session.
 *
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @param {Function} next Express next
 * @api public
 */
exports.getId = getId;
function getId (req, res, next) {
  return req.session.userId;
};