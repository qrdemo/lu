var env = require('../lib/env');

// jsonp
exports.get = function(req, res){
  var o = {
    ip: env.ip,
    port: env.port
  };
  var method = req.query['callback'] || 'callback';
  res.send(method + '(' + JSON.stringify(o) + ')');
};