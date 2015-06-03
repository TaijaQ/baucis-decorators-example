'use strict';

/**
 * Expose function.
 */
module.exports = httpsRedirection;

/**
 * Redirects the request to https://www.*
 * 
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @param {Object} next Express next
 * @api public
 */
function httpsRedirection (req, res, next) {
  try {
    if (req.headers.host.split('.').length < 3) {
      res.redirect('https://www.'+req.headers.host+(req.originalUrl || req.baseUrl));
    } else if (!req.connection.encrypted) {
      res.redirect('https://'+req.headers.host+(req.originalUrl || req.baseUrl));
    } else {
      next();
    }
  } catch(err) {
    next();
  }
}