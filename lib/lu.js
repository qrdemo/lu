var app = require('../app');

exports.addUser = function(name){
  var users = app.get('users') || {};
  var rejoin = !!users[name];
  var user = {
    'name': name,
    'click': 0,
    'rejoin': rejoin
  };
  users[name] = user;
  app.set('users', users);

  return user;
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