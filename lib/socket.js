var IO = require('socket.io');
var app = require('../app');
var lu = require('./lu');

app.set('users', {});
app.set('totalClick', 0);
app.set('game start', false);

module.exports = function(server) {
  var io = IO.listen(server);
  var socket, screenId, pptId;

  app.on('game restart', function(){
    console.log('game restart');
    var users = app.get('users');
    for (var i in users) {
      var user = users[i];
      user.click = 0;
    }
    app.set('game start', false);
    io.sockets.emit('game restart');
  });

  io.on('connection', function(sock) {
    socket = sock;

    // connection
    console.log('socket connected')
    socket.emit('connection');

    // save screen socket id
    socket.on('screen', function(){
      console.log('screen');
      screenId = socket.id;
    });

    // save ppt socket id
    socket.on('ppt', function(){
      console.log('ppt');
      pptId = socket.id;
    });

    // ppt left
    socket.on('ppt left', function(){
      console.log('ppt left');
      io.sockets.socket(pptId).emit('ppt left');
    });

    // ppt right
    socket.on('ppt right', function(){
      console.log('ppt right');
      io.sockets.socket(pptId).emit('ppt right');
    });

    // game start
    socket.on('game start', function(){
      console.log('game start');
      app.set('game start', true);

      io.sockets.emit('game start', {totalCount: lu.getUserCount()});
    });

    // game over
    socket.on('game over', function(){
      console.log('game over');
      app.set('game start', false);
      io.sockets.socket(screenId).emit('game over', lu.getTopUsers(3));
    });

    // join game
    socket.on('join', function(user){
      console.log(user.name + ' joined');
      if (!user.rejoin) {
        socket.broadcast.emit('message', {msg: user.name + ' 丢了一块肥皂，等你来捡哦~'});
      }
    });

    // click
    socket.on('click', function(user){
      if (!app.get('game start')) return;
      lu.addClick(user.name);
      io.sockets.socket(screenId).emit('click', {totalClick: app.get('totalClick')});
    });
  });
};

