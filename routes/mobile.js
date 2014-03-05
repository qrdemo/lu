var S = require('kissy');
var env = require('../lib/env');
var lu = require('../lib/lu');

// GET main
exports.main = function(req, res){
  res.render('screen/main');
};

// GET register
exports.register = function(req, res) {
  res.render('mobile/register');
};

exports.join = function(req, res) {
  var app = req.app;
  var flag = app.get('game start');
  var name = S.trim(req.body.user);
  if ('' !== name) {
    var user = lu.addUser(name);
    res.render('mobile/game', {name: user.name, rejoin: user.rejoin, env: env, flag: flag});
  } else {
    res.render('mobile/register', {
      error: '用户名不能为空！'
    });
  }
};