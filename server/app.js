'use strict';

// initialize express
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 8080);

/**
 * Expose object.
 */
module.exports = app;

// log errors
app.on('error', function (err) {
  console.log('App Error:', err);
});

// set app environment
var env = process.env.NODE_ENV || 'development';
app.set('env', env);
if (env === 'production') {
  app.set('stripeSecret', 'sk_live_abc123');
} else {
  app.set('stripeSecret', 'sk_test_xyz123');
}

// redirect to https if necessary
if (env === 'production') {
  app.use(require('../utils/https-redirection.js'));
}

// initialize database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/baucis-decorators-example');

// initialize baucis and swagger
var baucis = require('baucis');
var swagger = require('baucis-swagger');

// enable sessions
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var cookieParser = require('cookie-parser');
var secret = 'baucis decorators example';
app.set('secret', secret);
app.use(cookieParser(secret));
app.use(session({
  key: 'sessions',
  secret: secret,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

// parse request body
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true,
  limit: 10000000
}));
app.use(bodyParser.json({
  limit: 10000000
}));

// allow file uploads
var multipart = require('multer');
app.use(multipart());

// gzip after 256 bytes
var compression = require('compression');
app.use(compression({threshold: 256}));

// serve REST api
var api = require('../routes/api.js');
app.use('/dev/api', api);
app.use('/api', api);

// serve static assets
app.use(express.static(__dirname+'/../client'));

