var screen = require('./screen');
var mobile = require('./mobile');
var env = require('./env');

module.exports = function(app) {
  // screen
  app.get('/screen', screen.main);

  // mobile
  app.get('/mobile', mobile.register);
  app.post('/mobile', mobile.join);

  // env
  app.get('/env', env.get);
};