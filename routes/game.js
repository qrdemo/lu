var S = require('kissy');

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
  var users = app.get('users');
  var user = S.trim(req.body.user);
  if ('' !== user) {
    users[user] = {name: user};
    res.render('mobile/index', {name: user});
  } else {
    res.render('mobile/register', {
      error: '用户名不能为空！'
    });
  }
};