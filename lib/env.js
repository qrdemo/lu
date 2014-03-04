var os = require('os');
var app = require('../app');

module.exports = {
  ip: getIP(),
  port: app.get('port')
};

function getIP(){
  var info = os.networkInterfaces();

  for (var k in info) {
    var group = info[k];
    for (var i = 0;i < group.length;i++) {
      var pkg = group[i];
      if (!pkg.internal && pkg.family == 'IPv4') {
        return pkg.address;
      }
    }
  }

  return '';
}
