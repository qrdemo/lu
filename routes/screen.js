var env = require('../lib/env')

// GET
exports.main = function(req, res){
  console.log(env)
  res.render('screen/main', env);
};