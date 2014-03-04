var game = require('./game');

module.exports = function(app) {
  // game

  app.get('/', game.main);

  // 注册
  app.get('/register', game.register);
  app.post('/register', game.join);
};