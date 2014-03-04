var IO = require('socket.io');
var app = require('../app');
var lu = require('./lu');

app.set('users', {});
app.set('totalClick', 0);

module.exports = function(server) {
  var io = IO.listen(server);
  var socket, screenId;
  io.on('connection', function(sock) {
    socket = sock;

    // connection
    console.log('socket connected')
    socket.emit('connection');

    // save screen socket id
    socket.on('screen', function(){
      screenId = socket.id;
    });

    // game start
    socket.on('game start', function(){
      console.log('game start');
    });

    // join game
    socket.on('join', function(user){
      console.log(user.name + ' joined');
      socket.broadcast.emit('message', {msg: user.name + ' join the game\n'});
    });

    // click
    socket.on('click', function(user){
      lu.addUser(user.name);
      io.sockets.socket(screenId).emit('click', {totalClick: app.get('totalClick')});
    });
  });
};

