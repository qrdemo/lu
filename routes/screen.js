var env = require('../lib/env')

// GET
exports.main = function(req, res){
  res.render('screen/main', env);
};