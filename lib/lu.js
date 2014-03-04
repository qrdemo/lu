var app = require('../app');

exports.addUser = function(name){
  var users = app.get('users') || {};
  users[name] = {
    'name': name,
    'click': 0
  };
  app.set('users', users);
};

exports.addClick = function(name){
  var totalClick = app.get('totalClick');
  var users = app.get('users');
  var user = users[name];
  if (user) {
    ++user.click;
    ++totalClick;
    app.set('totalClick', totalClick);
  }
};