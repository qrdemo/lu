var game = require('./game');

module.exports = function(app) {
  // game

  app.get('/game', game.main);

  // 注册
  app.get('/game/register', game.register);
  app.post('/game/register', game.join);
};