var game = require('./game');

module.exports = function(app) {
  // game
  app.get('/game', game.register);
  app.post('/game', game.join);
};