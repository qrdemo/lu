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

  if (!user) user = exports.addUser(name);

  ++user.click;
  ++totalClick;
  app.set('totalClick', totalClick);
};

exports.getTopUsers = function(num){
  var users = app.get('users');
  var arr = [];
  if (users) {
    for (var k in users) {
      arr.push(users[k]);
    }
    arr = arr.sort(function(a, b){return a.click < b.click});
    arr = arr.length < num ? arr : arr.slice(0, num);
  }
  return arr;
};

exports.getUserCount = function(){
  var users = app.get('users');
  var count = 0;
  for (var i in users) {
    ++count;
  }
  return count;
};