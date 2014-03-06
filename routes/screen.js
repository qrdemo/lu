var env = require('../lib/env');

// GET
exports.main = function(req, res){
  var app = req.app;
  if ('127.0.0.1' == req.ip || env.ip == req.ip) app.emit('game restart');

  res.render('screen/main', env);
};