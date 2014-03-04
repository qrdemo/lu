var IO = require('socket.io');
var app = require('../app');

module.exports = function(server) {
  var io = IO.listen(server);
  var socket;
  io.on('connection', function(sock) {
    socket = sock;

    // connection
    console.log('socket connected')
    socket.emit('connection');

    // game start
    socket.on('game start', function(){
      console.log('game start');
    });

    // join game
    socket.on('join', function(user){
      console.log(user.name + ' joined');
      socket.broadcast.emit('message', {msg: user.name + ' join the game\n'});
    });
  });
};

