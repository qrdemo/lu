var IO = require('socket.io');

module.exports = function(server, app) {
  var io = IO.listen(server);
  io.on('connection', function(socket) {

  });
};